import React from 'react'
import Helmet from 'react-helmet'
import {injectIntl} from 'react-intl'
import Header from './Header'

const Layout = ({children, data, intl}) => (
    <div>
        <Helmet>
            <link rel="shortcut icon" href="/static/favicon.ico"/>
            <link rel="apple-touch-icon" href="/static/apple-touch-icon.png"/>
            <title>{intl.formatMessage({id: 'title'})}</title>
            <meta name="description" content={intl.formatMessage({id: 'welcome'})}/>
            <meta name="keywords" content="dexlize, bitcoin"/>
        </Helmet>
        <Header siteTitle={intl.formatMessage({id: 'title'})}/>
        <div>
            {children}
        </div>
    </div>
)

export default injectIntl(Layout)
