// types/realEstate.ts

// Address type for detailed location information
export type Address = {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  
  // Enum for property types
  export enum PropertyType {
    Apartment = "Apartment",
    House = "House",
    Condo = "Condo",
    Townhouse = "Townhouse",
    Land = "Land",
  }
  
  // Enum for listing status
  export enum ListingStatus {
    ForSale = "For Sale",
    ForRent = "For Rent",
    Sold = "Sold",
    Rented = "Rented",
  }
  
  // Features of a property
  export type Features = {
    bedrooms: number;
    bathrooms: number;
    squareFeet?: number; // Optional for land or non-residential properties
    garage?: boolean; // Optional
    pool?: boolean; // Optional
    [key: string]: string | number | boolean | undefined; // Allow dynamic custom features
  };
  
  // Pricing structure
  export type Pricing = {
    price: number;
    currency: string; // e.g., "USD", "EUR"
    isNegotiable: boolean;
  };
  
  // Agent details
  export type Agent = {
    name: string;
    email: string;
    phone: string;
    profilePictureUrl?: string; // Optional
  };
  
  // Media assets for the property
  export type Media = {
    images: Image[]; // URLs to image resources
    videos?: string[]; // Optional, URLs to video resources
    virtualTourUrl?: string; // Optional
  };

  export type Image = {
    alt: string;
    title: string;
    src: string;
  }
  
  // Main property type
  export type Property = {
    id: string; // Unique identifier
    title: string;
    description: string;
    address: Address;
    type: PropertyType;
    status: ListingStatus;
    features: Features;
    pricing: Pricing;
    agent: Agent;
    media: Media;
    listedDate: string; // ISO 8601 Date format
    lastUpdated?: string; // Optional, ISO 8601 Date format
  };
  
  // JSON data type for a collection of properties
  export type PropertyCollection = Property[];
  