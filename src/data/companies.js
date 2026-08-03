// Factual company registry for the Capimax Group.
// V2 identity (client "Final Client Edits"): Capimax Group Holding is a
// Delaware-registered holding company owning specialized companies and platforms
// in the USA & UK, focused on real estate technology, fractional ownership,
// asset tokenization, blockchain, and digital real-estate solutions — globally.
//
// This registry lists ONLY the companies wholly owned by Capimax Group (the
// subsidiaries shown on the Companies page). Partners and platforms live elsewhere
// (Partners.jsx / content.js). Pairs with companyContent in content.js.
// Keyed by the same ids used in routes (/company/:id) and Companies.jsx.
//
// NOTE: companyNumber / incorporated are null where the client has not yet supplied
// official Delaware / Wyoming / UK registration numbers. `address` is null where the
// official registered address is still pending. Components hide empty fields.
import {
  Landmark,
  Building2,
  Layers,
  Cpu,
  Building,
  PieChart,
} from 'lucide-react'

// The group's UK registered office (shared by the UK-registered entities).
const UK_OFFICE = '128 City Road, London, EC1V 2NX, United Kingdom'

const GROUP_CONTACT = {
  phone: '+44 7577 370309',
  email: 'info@capimaxgroup.com',
  website: 'https://capimaxgroup.com',
}

export const companyRegistry = {
  'capimax-group-holding': {
    id: 'capimax-group-holding',
    legalName: 'CapiMax Group Holding LLC',
    sector: 'Holding Company',
    icon: Landmark,
    color: 'bg-primary',
    companyNumber: null,
    incorporated: null,
    location: 'Delaware, United States',
    address: null, // official Delaware registered address pending
    country: 'USA',
    countryFlag: '🇺🇸',
    parentCompany: null,
    activities: ['Group Strategy', 'Governance', 'Ownership Structuring', 'Risk & Compliance', 'Ecosystem Oversight'],
    ...GROUP_CONTACT,
    email: 'holding@capimaxgroup.com',
  },
  'real-estate-technologies': {
    id: 'real-estate-technologies',
    legalName: 'CapiMax Real Estate Technologies LLC',
    sector: 'Real Estate Technology',
    icon: Building2,
    color: 'bg-primary',
    companyNumber: null,
    incorporated: null,
    location: 'Delaware, United States',
    address: null, // official Delaware registered address pending
    country: 'USA',
    countryFlag: '🇺🇸',
    parentCompany: 'CapiMax Group Holding LLC',
    activities: ['Real Estate Technology', 'Digital Property Infrastructure', 'Real Estate Marketplaces', 'Multi-party Platforms'],
    ...GROUP_CONTACT,
    email: 'retech@capimaxgroup.com',
  },
  'asset-structure': {
    id: 'asset-structure',
    legalName: 'CapiMax Asset Structure LLC',
    sector: 'Asset Structuring & SPVs',
    icon: Layers,
    color: 'bg-info',
    companyNumber: null,
    incorporated: null,
    location: 'Wyoming, United States',
    address: null, // official Wyoming registered address pending
    country: 'USA',
    countryFlag: '🇺🇸',
    parentCompany: 'CapiMax Group Holding LLC',
    activities: ['SPV Structuring', 'Asset-Backed Frameworks', 'Ownership Records', 'Legal Structuring'],
    ...GROUP_CONTACT,
    email: 'structure@capimaxgroup.com',
  },
  'technologies-uk': {
    id: 'technologies-uk',
    legalName: 'CapiMax Technologies Ltd',
    sector: 'Technology & Blockchain',
    icon: Cpu,
    color: 'bg-primary',
    companyNumber: null,
    incorporated: null,
    location: 'United Kingdom',
    address: UK_OFFICE,
    country: 'UK',
    countryFlag: '🇬🇧',
    parentCompany: 'CapiMax Group Holding LLC',
    activities: ['Blockchain Infrastructure', 'Smart Contracts', 'Tokenization Systems', 'Security & Audit'],
    ...GROUP_CONTACT,
    email: 'tech@capimaxgroup.com',
  },
  'property-holding-uk': {
    id: 'property-holding-uk',
    legalName: 'CapiMax Property Holding Ltd',
    sector: 'Real Estate',
    icon: Building,
    color: 'bg-success',
    companyNumber: null,
    incorporated: null,
    location: 'United Kingdom',
    address: UK_OFFICE,
    country: 'UK',
    countryFlag: '🇬🇧',
    parentCompany: 'CapiMax Group Holding LLC',
    activities: ['Real Estate Sourcing', 'Asset Onboarding', 'Property Structuring', 'Market Operations'],
    ...GROUP_CONTACT,
    email: 'property@capimaxgroup.com',
  },
  'fractional-ownership': {
    id: 'fractional-ownership',
    legalName: 'CapiMax Fractional Ownership LLC',
    sector: 'Fractional Ownership',
    icon: PieChart,
    color: 'bg-primary',
    companyNumber: null,
    incorporated: null,
    location: 'Wyoming, United States',
    address: null, // official Wyoming registered address pending
    country: 'USA',
    countryFlag: '🇺🇸',
    parentCompany: 'CapiMax Group Holding LLC',
    activities: ['Fractional Ownership', 'Ownership Management', 'Investor Onboarding', 'Secondary Transfers'],
    ...GROUP_CONTACT,
    email: 'ownership@capimaxgroup.com',
  },
}

export const companyIds = Object.keys(companyRegistry)
