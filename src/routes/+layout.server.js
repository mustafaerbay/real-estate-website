import { json } from '@sveltejs/kit';
import { listingsData } from '../listingDatabase';
// import fs from 'fs/promises';
// import path from 'path';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  // Define the path to your properties JSON file
  // const filePath = path.resolve('static/data/properties.json');
  // console.log("filepath:",filePath)
  try {
    // Read and parse the JSON file
    // const data = await fs.readFile(filePath, 'utf-8');
    // const response = await fetch("https://www.paradoksgayrimenkul.com/data/properties.json")
    // const properties = JSON.parse(data);
    // const properties = await response.json()
    const pr = listingsData
    // Return the properties as a JSON response
    // return json({ properties });
    return {
        properties: pr
    }
  } catch (error) {
    console.log('Error loading properties:', error);
    return json({ error: 'Unable to load properties' }, { status: 500 });
  }
}
