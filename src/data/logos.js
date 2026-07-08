// Shared logo registry (company + partner).
// Convention: "dark" = dark-ink logo (use on LIGHT backgrounds);
//             "light" = light logo (use on DARK backgrounds).
// getCompanyLogo(id, onBackground): 'dark' background -> returns the light asset,
// 'light' background -> returns the dark asset. Missing id -> null (caller falls back to a lucide icon).

// ---- Company logos (client-provided, dark + light variants) ----
import groupHoldingDark from '@/assets/logos/group-holding-dark.svg'
import groupHoldingLight from '@/assets/logos/group-holding-light.svg'
import reTechDark from '@/assets/logos/real-estate-technologies-dark.svg'
import reTechLight from '@/assets/logos/real-estate-technologies-light.svg'
import assetStructureDark from '@/assets/logos/asset-structure-dark.svg'
import assetStructureLight from '@/assets/logos/asset-structure-light.svg'
import digitalAssetsDark from '@/assets/logos/digital-assets-dark.svg'
import digitalAssetsLight from '@/assets/logos/digital-assets-light.svg'
import fractionalDark from '@/assets/logos/fractional-ownership-dark.svg'
import fractionalLight from '@/assets/logos/fractional-ownership-light.svg'
import realEstateDark from '@/assets/logos/real-estate-dark.svg'
import realEstateLight from '@/assets/logos/real-estate-light.svg'
import technologiesDark from '@/assets/logos/technologies-dark.svg'
import technologiesLight from '@/assets/logos/technologies-light.svg'
import novaDfLogo from '@/assets/logos/nova-digital-finance.svg'

// ---- Partner logos ----
import eliteGateLogo from '@/assets/logos/partners/elite-gate.svg'
import primInnDark from '@/assets/logos/partners/prim-inn-dark.svg'
import primInnLight from '@/assets/logos/partners/prim-inn-light.svg'
import novaAmLogo from '@/assets/logos/partners/nova-asset-management.svg'
import hccLogo from '@/assets/logos/partners/hcc.svg'
import assuraxLogo from '@/assets/logos/partners/assurax.svg'
import cimLogo from '@/assets/logos/partners/cim.svg'

// ---- Group icon mark (fallback / brand) ----
import iconLight from '@/assets/capimax logos svg/light/icon_capi max icon light.svg'
import iconDark from '@/assets/capimax logos svg/dark/icon_capi max icon darl.svg'

const LOGOS = {
  'capimax-group-holding': { dark: groupHoldingDark, light: groupHoldingLight },
  'real-estate-technologies': { dark: reTechDark, light: reTechLight },
  'asset-structure': { dark: assetStructureDark, light: assetStructureLight },
  'digital-assets': { dark: digitalAssetsDark, light: digitalAssetsLight },
  'fractional-ownership': { dark: fractionalDark, light: fractionalLight },
  'real-estate-uk': { dark: realEstateDark, light: realEstateLight },
  'technologies-uk': { dark: technologiesDark, light: technologiesLight },
  'nova-digital-finance': { dark: novaDfLogo, light: novaDfLogo },
}

// Partner logos keyed by the ids used in Partners.jsx. Single-variant logos reuse
// the same asset for both backgrounds (rendered on a light plate in the UI).
const PARTNER_LOGOS = {
  'elite-gate': { dark: eliteGateLogo, light: eliteGateLogo },
  'prim-inn': { dark: primInnDark, light: primInnLight },
  'nova-asset-management': { dark: novaAmLogo, light: novaAmLogo },
  'hcc': { dark: hccLogo, light: hccLogo },
  'assurx-insurance': { dark: assuraxLogo, light: assuraxLogo },
  'cim-financial-group': { dark: cimLogo, light: cimLogo },
}

export const groupIcon = { light: iconLight, dark: iconDark }

/**
 * Company logo for the given background, or null to fall back to an icon.
 * @param {string} id
 * @param {'light'|'dark'} onBackground - 'dark' => light asset; 'light' => dark asset
 */
export function getCompanyLogo(id, onBackground = 'light') {
  const entry = LOGOS[id]
  if (!entry) return null
  return onBackground === 'dark' ? entry.light : entry.dark
}

/**
 * Partner logo for the given background, or null if none.
 * @param {string} id
 * @param {'light'|'dark'} onBackground
 */
export function getPartnerLogo(id, onBackground = 'light') {
  const entry = PARTNER_LOGOS[id]
  if (!entry) return null
  return onBackground === 'dark' ? entry.light : entry.dark
}
