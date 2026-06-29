import { translations } from './translations';
export type { Lang, TranslationKey } from './translations';
import type { Lang, TranslationKey } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'tr';
}

export function t(key: TranslationKey, lang: Lang): string {
  return translations[lang][key] ?? translations['tr'][key] ?? key;
}

export function getLocalePath(path: string, lang: Lang): string {
  if (lang === 'tr') return path;
  
  const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  
  // Map TR paths to EN paths
  const pathMap: Record<string, string> = {
    '/': '/en/',
    '/hizmetler': '/en/services',
    '/lokalizasyon': '/en/rollout',
    '/urunler': '/en/products',
    '/referanslar': '/en/references',
    '/hakkimizda': '/en/about',
    '/iletisim': '/en/contact',
    '/sap-refx': '/en/sap-refx',
    '/sap-opentext': '/en/sap-opentext',
    '/sap-checkup': '/en/sap-checkup',
    '/danismanlik': '/en/consulting',
    '/s4hana': '/en/s4hana',
    '/sap-cash-management': '/en/sap-cash-management',
    '/sap-trm': '/en/sap-trm',
    '/kvkk': '/en/kvkk',
    '/gizlilik-politikasi': '/en/privacy-policy',
    '/cerez-politikasi': '/en/cookie-policy',
  };
  return pathMap[cleanPath] || `/en${path}`;
}

export function getAlternateLangPath(currentPath: string, currentLang: Lang): string {
  const cleanPath = currentPath.endsWith('/') && currentPath !== '/' ? currentPath.slice(0, -1) : currentPath;
  if (currentLang === 'tr') {
    // TR → EN
    const map: Record<string, string> = {
      '/': '/en/',
      '/hizmetler': '/en/services',
      '/lokalizasyon': '/en/rollout',
      '/urunler': '/en/products',
      '/referanslar': '/en/references',
      '/hakkimizda': '/en/about',
      '/iletisim': '/en/contact',
      '/sap-refx': '/en/sap-refx',
      '/sap-opentext': '/en/sap-opentext',
      '/sap-checkup': '/en/sap-checkup',
      '/danismanlik': '/en/consulting',
      '/s4hana': '/en/s4hana',
      '/sap-cash-management': '/en/sap-cash-management',
      '/sap-trm': '/en/sap-trm',
      '/kvkk': '/en/kvkk',
      '/gizlilik-politikasi': '/en/privacy-policy',
      '/cerez-politikasi': '/en/cookie-policy',
    };
    return map[cleanPath] || `/en${cleanPath}`;
  } else {
    // EN → TR
    const map: Record<string, string> = {
      '/en/': '/',
      '/en': '/',
      '/en/services': '/hizmetler',
      '/en/rollout': '/lokalizasyon',
      '/en/products': '/urunler',
      '/en/references': '/referanslar',
      '/en/about': '/hakkimizda',
      '/en/contact': '/iletisim',
      '/en/sap-refx': '/sap-refx',
      '/en/sap-opentext': '/sap-opentext',
      '/en/sap-checkup': '/sap-checkup',
      '/en/consulting': '/danismanlik',
      '/en/s4hana': '/s4hana',
      '/en/sap-cash-management': '/sap-cash-management',
      '/en/sap-trm': '/sap-trm',
      '/en/kvkk': '/kvkk',
      '/en/privacy-policy': '/gizlilik-politikasi',
      '/en/cookie-policy': '/cerez-politikasi',
    };
    return map[cleanPath] || cleanPath.replace('/en', '');
  }
}
