import { NextPageWithLayout } from 'next'
import Head from 'next/head'
import { useIntl } from 'react-intl'

import { getLayout } from '~/layouts/site'

const Page: NextPageWithLayout = () => {
    const intl = useIntl()
    return (
        <>
            <Head>
                <title>
                    {intl.formatMessage({
                        defaultMessage: 'Hello World',
                        description: 'Page title',
                    })}
                </title>
            </Head>

            <main>
                <h1 className="font-bold font-sans text-2xl text-green-800 bg-green-50 p-24 text-center">
                    Hello World
                </h1>
            </main>
        </>
    )
}

Page.getLayout = getLayout

export default Page
