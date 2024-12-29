import { createThirdwebClient } from "thirdweb";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpenReader,
  faNotesMedical,
  faSeedling,
  faVirusSlash,
  faWheatAwnCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export const client = createThirdwebClient({
  clientId: "192f35bed07f84beca88ff583b0522f7",
});
export const clientForBsc = createThirdwebClient({
  clientId: "ba78c323af9fbe80b9c82040f382037a",
});

export const startupCategories = [
  "Health",
  "Education",
  "Environment",
  "Food Security",
  "Counterfeiting",
];

export const startupCategoryIcon = {
  health: faNotesMedical,
  environment: faSeedling,
  education: faBookOpenReader,
  "food Security": faWheatAwnCircleExclamation,
  counterfeiting: faVirusSlash,
};

export const propositionCategories = [
  "Distribution of dividends",
  "Liquidation of our participation in a project",
  "Disbursement of funds",
  "Other",
];

export const forumTabItems = ["All", "Posts", "Comments", "Proposition"];

export const sectorsAndIndustries = new Map<string, string[]>([
  [
    "Technology",
    [
      "Software Development",
      "Hardware Engineering",
      "Information Technology (IT)",
      "Telecommunications",
      "E-commerce",
      "Cyber Security",
    ],
  ],
  [
    "Healthcare",
    [
      "Healthcare Services",
      "Pharmaceutical Industry",
      "Biotechnology",
      "Medical Device Manufacturing",
    ],
  ],
  [
    "Finance",
    ["Banking", "Insurance", "Investment Banking", "Asset Management"],
  ],
  [
    "Manufacturing",
    [
      "Automotive",
      "Aerospace",
      "Electronics Manufacturing",
      "Chemical Manufacturing",
    ],
  ],
  [
    "Retail",
    [
      "Department Stores",
      "Specialty Stores",
      "Grocery Stores",
      "E-commerce Retail",
    ],
  ],
  [
    "Construction",
    [
      "Residential Construction",
      "Commercial Construction",
      "Civil Engineering",
    ],
  ],
  [
    "Energy",
    ["Renewable Energy", "Oil and Gas", "Utilities", "Nuclear Energy"],
  ],
  [
    "Transportation",
    [
      "Logistics",
      "Airlines",
      "Shipping and Maritime",
      "Public Transit",
      "Automotive Transport",
    ],
  ],
  [
    "Entertainment",
    [
      "Film Production",
      "Music Industry",
      "Gaming",
      "Television Broadcasting",
      "Live Events",
    ],
  ],
  [
    "Education",
    [
      "Primary Education",
      "Secondary Education",
      "Higher Education",
      "Online Learning Platforms",
    ],
  ],
  [
    "Agriculture",
    [
      "Crop Production",
      "Livestock Farming",
      "Agricultural Technology",
      "Agri-Business",
    ],
  ],
  [
    "Hospitality",
    ["Hotels and Resorts", "Food and Beverage Services", "Travel and Tourism"],
  ],
  [
    "Real Estate",
    [
      "Residential Real Estate",
      "Commercial Real Estate",
      "Property Management",
      "Real Estate Investment",
    ],
  ],
  [
    "Media",
    ["Publishing", "Advertising", "Digital Media", "News and Journalism"],
  ],
]);

export const africanCountries = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "British Indian Ocean Territory",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Comoros",
  "DR Congo",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Ivory Coast",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Republic of the Congo",
  "Rwanda",
  "Réunion",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "São Tomé and Príncipe",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Western Sahara",
  "Zambia",
  "Zimbabwe",
];
