import en from '@translations/en'
import tr from '@translations/tr'
import type { Locale } from '@types'

const i18n = (
  key: keyof typeof tr | keyof typeof en,
  locale: Locale = 'tr'
): string => {
  if (locale === 'en') {
    return en[key]
  }

  return tr[key]
}

export default i18n
