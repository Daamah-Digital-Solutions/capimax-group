// Shared company logo registry.
// Convention (project-wide): "dark" assets are dark-on-transparent (use on LIGHT
// backgrounds); "light" assets are light-on-transparent (use on DARK backgrounds).
// Companies with no dedicated, correct asset are omitted -> callers fall back to an icon.
//
// V2 note: the approved company structure introduced new entities that do not yet
// have brand logos. We reuse the closest existing marks (holding / virtual-assets /
// fintech) and fall back to the group icon for the rest until the client supplies
// dedicated logos for: Real Estate Technologies, Asset Structure, Fractional
// Ownership, Real Estate (UK), and Nova Digital Finance.

// Dark variants (for light backgrounds)
import holdingDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max holding  uk dark  .svg'
import virtualAssetsDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max  Virtual Asset uk dark .svg'
import fintechDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max  Fintech and Blockchain uk dark  copy.svg'

// Light variants (for dark backgrounds)
import holdingLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max holding  uk light   .svg'
import virtualAssetsLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max  Virtual Asset uk light .svg'
import fintechLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max  Fintech and Blockchain uk light  copy.svg'

// icon mark (light/dark) for the group
import iconLight from '@/assets/capimax logos svg/light/icon_capi max icon light.svg'
import iconDark from '@/assets/capimax logos svg/dark/icon_capi max icon darl.svg'

const LOGOS = {
  'capimax-group-holding': { dark: holdingDark, light: holdingLight },
  'digital-assets': { dark: virtualAssetsDark, light: virtualAssetsLight },
  'technologies-uk': { dark: fintechDark, light: fintechLight },
  // Pending dedicated logos (fall back to the group icon):
  //   real-estate-technologies, asset-structure, fractional-ownership,
  //   real-estate-uk, nova-digital-finance.
}

export const groupIcon = { light: iconLight, dark: iconDark }

/**
 * Returns the company logo for the given background, or null to fall back to an icon.
 * @param {string} id - company id
 * @param {'light'|'dark'} onBackground - 'dark' => use the light asset; 'light' => use the dark asset
 */
export function getCompanyLogo(id, onBackground = 'light') {
  const entry = LOGOS[id]
  if (!entry) return null
  return onBackground === 'dark' ? entry.light : entry.dark
}
