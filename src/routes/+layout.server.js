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
    const filterItems = generateFilterItems(pr)
    // Return the properties as a JSON response
    // return json({ properties });

    // const portfolieee = (() => ({
    //   isOfficeExist: filterItems.types.includes('Office'),
    //   isCondoExist: filterItems.types.includes('Condo'),
    //   isApartmentExist: filterItems.types.includes('Apartment'),
    //   isHouseExist: filterItems.types.includes('House'),
    //   isOrchardsExist: filterItems.types.includes('Orchards'),
    //   isAgricalturalExist: filterItems.types.includes('Agricultural'),
    //   isYourAssetExist: filterItems.types.includes('YourAsset')
    // }));

    const portfolioStatus = ({
      isOfficeExist: filterItems.types.includes('Office'),
      isCondoExist: false,
      isApartmentExist: false,
      isHouseExist: false,
      isOrchardsExist: false,
      isAgricalturalExist: false,
      isYourAssetExist: false
  })

    // PortfolioStatus.set({
    //   isOfficeExist: filterItems.types.includes('Office'),
    //   isCondoExist: filterItems.types.includes('Condo'),
    //   isApartmentExist: filterItems.types.includes('Apartment'),
    //   isHouseExist: filterItems.types.includes('House'),
    //   isOrchardsExist: filterItems.types.includes('Orchards'),
    //   isAgricalturalExist: filterItems.types.includes('Agricultural'),
    //   isYourAssetExist: filterItems.types.includes('YourAsset')
    // });
    // console.log("PortfolioStatus_layout_server",get(PortfolioStatus))
    console.log("portfolioStatus_layout_server",portfolioStatus)

    // PortfolioStatus.update(status => {
    //   const updatedStatus = {
    //     isOfficeExist: filterItems.types.includes('Office'),
    //     isCondoExist: filterItems.types.includes('Condo'),
    //     isApartmentExist: filterItems.types.includes('Apartment'),
    //     isHouseExist: filterItems.types.includes('House'),
    //     isOrchardsExist: filterItems.types.includes('Orchards'),
    //     isAgricalturalExist: filterItems.types.includes('Agricultural'),
    //     isYourAssetExist: filterItems.types.includes('YourAsset')
    //   };
   
    //   console.log('PortfolioStatus Updated:', updatedStatus);
   
    //   return updatedStatus;
    // });


    return {
      properties: pr,
      filterOptions: filterItems,
      portfolioStatus: portfolioStatus
    }
  } catch (error) {
    console.log('Error loading properties:', error);
    return json({ error: 'Unable to load properties' }, { status: 500 });
  }
}

function generateFilterItems(listings) {
  
  const locations = [...new Set(listings.map(listing => listing.address.city))];
  const types = [...new Set(listings.map(listing => listing.type))];
  const statuses = [...new Set(listings.map(listing => listing.status))];

  const prices = listings.map(listing => listing.pricing.price);
  const areas = listings.map(listing => listing.features.squareFeet);

  return {
    locations, // Unique city names
    types,     // Unique types (e.g., Office, Apartment)
    statuses,  // Unique statuses (e.g., For Rent, For Sale)
    priceRange: {
      min: Math.min(...prices),
      max: Math.max(...prices),
    },
    areaRange: {
      min: Math.min(...areas),
      max: Math.max(...areas),
    },
  };
}

