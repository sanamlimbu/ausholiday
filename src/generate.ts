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
      throw new Error(`Invalid jurisdiction: ${data.jurisdiction}`);
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

const inputCSV = path.resolve(__dirname, 'data.csv');
const outputTS = path.resolve(__dirname, 'data.ts');

generateMap(inputCSV, outputTS).catch(console.error);
