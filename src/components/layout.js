import React from 'react'
import Helmet from 'react-helmet'
import {injectIntl} from 'react-intl'
import Header from './Header'

const Layout = ({children, data, intl}) => (
    <div>
        <Helmet
            title={intl.formatMessage({id: 'title'})}
            meta={[
                {name: 'description', content: intl.formatMessage({id: 'welcome'})},
                {
                    name: 'keywords',
                    content: 'gatsby, i18n, react-intl, multi language, localization',
                },
            ]}
        />
        <Header siteTitle={intl.formatMessage({id: 'title'})}/>
        <div>
            {children}
        </div>
    </div>
)

export default injectIntl(Layout)
