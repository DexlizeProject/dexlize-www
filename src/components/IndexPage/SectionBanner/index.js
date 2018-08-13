import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionBanner extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="banner-title">
                    <FormattedMessage id="banner.text1"/><span className="section-title-bright">,</span> <br/>
                    <FormattedMessage id="banner.text2"/><span className="section-title-bright">.</span>
                </div>
                <button className="banner-btn"><FormattedMessage id="banner.viewWhitepaper"/></button>
            </div>
        )
    }
}