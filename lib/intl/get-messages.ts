type Locale = 'en' | string | undefined

import langEn from '~/generated/intl/compiled-lang/en.json'

export function getMessages(locale: Locale) {
    switch (locale) {
        case 'en':
        default:
            return langEn
    }
}
