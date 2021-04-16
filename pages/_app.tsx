import { useMemo } from 'react'
import { AppProps } from 'next'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'

import { getLayout as getSiteLayout } from '~/layouts/site'
import { getMessages } from '~/lib/intl'
import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
    const { locale, defaultLocale = 'en' } = useRouter()
    const getLayout = Component.getLayout || getSiteLayout
    const messages = useMemo(() => getMessages(locale), [locale])
    return (
        <IntlProvider
            key={locale}
            locale={locale ?? defaultLocale}
            messages={messages}
        >
            {getLayout(<Component {...pageProps} />)}
        </IntlProvider>
    )
}

export default App
