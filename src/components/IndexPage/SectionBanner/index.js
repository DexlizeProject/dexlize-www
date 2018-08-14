import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionBanner extends React.Component {
    render() {
        let whitePaperLink = ''
        if(typeof localStorage !== 'undefined' && localStorage.getItem('language') == 'en'){
            whitePaperLink = 'https://cdn.dexlize.org/static/WhitePaper-EN-compressed-2018-08-14.pdf'
        }else{
            whitePaperLink = 'https://cdn.dexlize.org/static/WhitePaper-ZH-compressed-2018-08-14.pdf'
        }
        return (
            <div className="container">
                <div className="banner-title">
                    <FormattedMessage id="banner.text1"/><span className="section-title-bright">,</span> <br/>
                    <FormattedMessage id="banner.text2"/><span className="section-title-bright">.</span>
                </div>
                <a href={whitePaperLink} target="_blank">
                    <button className="banner-btn"><FormattedMessage id="banner.viewWhitepaper"/></button>
                </a>
                <div className="banner-blocks">
                    <span className="icon icon-banner-block-1"/>
                    <span className="icon icon-banner-block"/>
                    <span className="icon icon-banner-block-2"/>

                </div>
            </div>
        )
    }
}