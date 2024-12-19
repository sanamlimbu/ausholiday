import * as fs from 'fs';
import Papa from 'papaparse';
import * as path from 'path';

const JURISDICTIONS = new Set([
  'act', // Australian Capital Territory
  'nsw', // New South Wales
  'nt', // Northern Territory
  'qld', // Queensland
  'sa', // South Australia
  'tas', // Tasmania
  'vic', // Victoria
  'wa', // Western Australia
]);

interface CSVRow {
  sn: number;
  date: string;
  name: string;
  jurisdiction: string;
}

function parseCSV(filePath: string): Promise<CSVRow[]> {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    Papa.parse<CSVRow>(fileContent, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error: Error) => reject(error),
    });
  });
}

interface Holiday {
  date: string;
  name: string;
}

async function generateMap(inputFile: string, outputFile: string) {
  const csvData = await parseCSV(inputFile);

  const holidaysByJurisdiction: { [key: string]: Holiday[] } = {};

  csvData.forEach((data) => {
    if (!isValidJurisdiction(data.jurisdiction)) {
      throw new Error(
        `Invalid jurisdiction: ${data.jurisdiction} at SN: ${data.sn}`
      );
    }

    if (!isValidAndInRange(data.date)) {
      throw new Error(`Invalid date: ${data.date} at SN: ${data.sn}`);
    }

    const jurisdiction = data.jurisdiction.toUpperCase();

    if (!holidaysByJurisdiction[jurisdiction]) {
      holidaysByJurisdiction[jurisdiction] = [];
    }

    holidaysByJurisdiction[jurisdiction].push({
      date: data.date,
      name: data.name,
    });
  });

  let outputContent = '// Auto-generated code, do not modify.\n\n';

  for (const [jurisdiction, holidays] of Object.entries(
    holidaysByJurisdiction
  )) {
    const mapEntries = getMapEntries(holidays);
    const mapContent = `
          export const ${jurisdiction}PublicHolidays = new Map<string, string>([
${mapEntries.join(',\n')}
]);
    `.trim();

    outputContent += mapContent + '\n\n';
  }

  fs.writeFileSync(outputFile, outputContent.trim());
  console.log(`Map generated and saved to ${outputFile}`);
}

function getMapEntries(holidays: Holiday[]): string[] {
  const mapEntries = holidays.map((h) => `  ["${h.date}", "${h.name}"]`);
  return mapEntries;
}

function isValidJurisdiction(jurisdiction: string): boolean {
  return JURISDICTIONS.has(jurisdiction);
}

function isValidAndInRange(date: string): boolean {
  // Regular expression to match the 'YYYYMMDD' format.
  const regex = /^\d{8}$/;

  if (!regex.test(date)) {
    return false;
  }

  const year = parseInt(date.substring(0, 4), 10);
  const month = parseInt(date.substring(4, 6), 10);
  const day = parseInt(date.substring(6, 8), 10);

  const dateInput = new Date(`${year}/${month}/${day}`);

  if (isNaN(dateInput.getTime())) {
    return false;
  }

  const currentYear = new Date().getFullYear();

  const start = new Date(currentYear - 1, 0, 1);
  const end = new Date(currentYear + 1, 11, 31);

  return dateInput >= start && dateInput <= end;
}

const inputCSV = path.resolve(__dirname, 'data.csv');
const outputTS = path.resolve(__dirname, 'data.ts');

generateMap(inputCSV, outputTS).catch(console.error);
