// Shared logo registry (company + partner).
// Convention: "dark" = dark-ink logo (use on LIGHT backgrounds);
//             "light" = light logo (use on DARK backgrounds).
// getCompanyLogo(id, onBackground): 'dark' background -> returns the light asset,
// 'light' background -> returns the dark asset. Missing id -> null (caller falls back to a lucide icon).
//
// Partner logos are rendered on a light/white plate in the UI, so single-variant
// logos (and JPG logos served from /public/partners) reuse one asset for both keys.
// A value may be an imported SVG (bundled) or a "/public"-relative string path.

// ---- Company logos (client-provided, dark + light variants) ----
import groupHoldingDark from '@/assets/logos/group-holding-dark.svg'
import groupHoldingLight from '@/assets/logos/group-holding-light.svg'
import reTechDark from '@/assets/logos/real-estate-technologies-dark.svg'
import reTechLight from '@/assets/logos/real-estate-technologies-light.svg'
import assetStructureDark from '@/assets/logos/asset-structure-dark.svg'
import assetStructureLight from '@/assets/logos/asset-structure-light.svg'
import fractionalDark from '@/assets/logos/fractional-ownership-dark.svg'
import fractionalLight from '@/assets/logos/fractional-ownership-light.svg'
import realEstateDark from '@/assets/logos/real-estate-dark.svg'
import realEstateLight from '@/assets/logos/real-estate-light.svg'
import technologiesDark from '@/assets/logos/technologies-dark.svg'
import technologiesLight from '@/assets/logos/technologies-light.svg'

// ---- Partner logos (SVG) ----
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
  'fractional-ownership': { dark: fractionalDark, light: fractionalLight },
  'property-holding-uk': { dark: realEstateDark, light: realEstateLight },
  'technologies-uk': { dark: technologiesDark, light: technologiesLight },
}

// Partner logos keyed by the ids used in Partners.jsx.
// JPG logos served from /public/partners are stored as string paths.
const PARTNER_LOGOS = {
  // Real Estate
  'elite-gate': { dark: eliteGateLogo, light: eliteGateLogo },
  'prim-inn': { dark: primInnDark, light: primInnLight },
  'nova-asset-management': { dark: novaAmLogo, light: novaAmLogo },
  // Financial
  'cim-global-financial': { dark: '/partners/cim-global-financial.jpg', light: '/partners/cim-global-financial.jpg' },
  'cim-finance-group': { dark: cimLogo, light: cimLogo },
  // Insurance
  'hcc': { dark: hccLogo, light: hccLogo },
  'assurax': { dark: assuraxLogo, light: assuraxLogo },
  // Smart Contract & Blockchain Security
  'proof-anchor': { dark: '/partners/proof-anchor.jpg', light: '/partners/proof-anchor.jpg' },
  // Legal
  'lexcrest': { dark: '/partners/lexcrest.jpg', light: '/partners/lexcrest.jpg' },
  // covertech, solidproof, nova-facility-management, crown-fm: no logo asset yet -> icon fallback
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
