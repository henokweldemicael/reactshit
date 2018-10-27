//import RNLanguages from 'react-native-languages'
import i18n from 'i18n-js'

import en from './translations/en.json'
import am from './translations/am.json'
import ti from './translations/ti.json'

i18n.locale = "ti"
i18n.fallbacks = true //fallback to English if something goes wrong bruh
i18n.translations = {en, am, ti}

export default i18n