// Shared company logo registry.
// Convention (project-wide): "dark" assets are dark-on-transparent (use on LIGHT
// backgrounds); "light" assets are light-on-transparent (use on DARK backgrounds).
// Companies with no dedicated, correct asset are omitted -> callers fall back to an icon.

// Dark variants (for light backgrounds)
import investmentsUKDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max investments uk dark.svg'
import financialMgmtDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max financial management uk dark -11.svg'
import preciousMetalsDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max Investment in precious metals  uk dark  .svg'
import holdingDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max holding  uk dark  .svg'
import virtualAssetsDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max  Virtual Asset uk dark .svg'
import fintechDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max  Fintech and Blockchain uk dark  copy.svg'
import investmentsUSADark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max investments usa dark.svg'
import generalTradingDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max general trading usa dark.svg'
import investmentsUAEDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max investments uae dark.svg'

// Light variants (for dark backgrounds)
import investmentsUKLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max investments uk light.svg'
import financialMgmtLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max financial management uk light  .svg'
import preciousMetalsLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max Investment in precious metals  uk light  .svg'
import holdingLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max holding  uk light   .svg'
import virtualAssetsLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max  Virtual Asset uk light .svg'
import fintechLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max  Fintech and Blockchain uk light  copy.svg'
import developmentLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max development uk light .svg'
import investmentsUSALight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max investments usa light.svg'
import generalTradingLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max general trading usa light.svg'
import investmentsUAELight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max investments uae light.svg'

// icon mark (light/dark) for the group
import iconLight from '@/assets/capimax logos svg/light/icon_capi max icon light.svg'
import iconDark from '@/assets/capimax logos svg/dark/icon_capi max icon darl.svg'

const LOGOS = {
  'capimax-investments-uk': { dark: investmentsUKDark, light: investmentsUKLight },
  'capimax-financial-management': { dark: financialMgmtDark, light: financialMgmtLight },
  'capimax-precious-metals': { dark: preciousMetalsDark, light: preciousMetalsLight },
  'capimax-holding': { dark: holdingDark, light: holdingLight },
  'capimax-virtual-assets': { dark: virtualAssetsDark, light: virtualAssetsLight },
  'capimax-fintech-blockchain': { dark: fintechDark, light: fintechLight },
  'capimax-development-llp': { dark: null, light: developmentLight },
  'capimax-investments-usa': { dark: investmentsUSADark, light: investmentsUSALight },
  'capimax-general-trading-usa': { dark: generalTradingDark, light: generalTradingLight },
  'capimax-investments-uae': { dark: investmentsUAEDark, light: investmentsUAELight },
  // No dedicated asset for: hcc-international, cim-financial-group, nova-digital-finance.
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
