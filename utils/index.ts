import type { Currency, InternalLink, Locale } from '@types'

export const routeMap = {
  'certificate-verification': 'sertifika-sorgulama',
  instructors: 'egitmenler',
  'online-courses': 'online-egitimler',
  'online-course': 'online-egitim',
  certificate: 'sertifika',
  'about-institute': 'enstitu-hakkinda',
  contact: 'iletisim',
  sitemap: 'site-haritasi',
  contract: 'sozlesmeler',
  blog: 'blog',
  comments: 'yorumlar',
}

export const getPath = (
  path: keyof typeof routeMap,
  locale?: Locale
): string => {
  if (locale === 'en') {
    return path
  } else {
    return routeMap[path] ?? path
  }
}

export const getISO4217CurrencyCode = (currency: Currency): string => {
  return {
    TRY: 'TRY',
    USD: 'USD',
    EUR: 'EUR',
  }[currency]
}

export const getLocalePath = (locale: Locale) =>
  locale === 'en' ? `/${locale}` : ''

export const getSlug = (url: InternalLink['url'], locale: Locale) => {
  const { _modelApiKey, slug } = url

  switch (_modelApiKey) {
    case 'certificate_verification':
    case 'about_page':
    case 'all_courses_page':
    case 'blog_page':
    case 'certificate_page':
    case 'contact_page':
    case 'instructors_page':
    case 'statics_page':
    case 'iframe_page':
    case 'sitemap_page':
      return `/${slug}`
    case 'blog':
      return `/blog/${slug}`
    case 'course':
      return `/${getPath('online-course', locale)}/${slug}`
    case 'contract':
      return `/${getPath('contract', locale)}/${slug}`
    case 'online_courses_category':
      return `/${getPath('online-courses', locale)}/${slug}`
    case 'instructor':
      return `/${getPath('instructors', locale)}/${slug}`
    default:
      return '/'
  }
}

export const getQueryString = (options: { [key: string]: string | number }) =>
  Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
