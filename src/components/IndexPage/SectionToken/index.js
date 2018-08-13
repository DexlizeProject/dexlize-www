import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionToken extends React.Component{
    render () {
        const currentLanguage = typeof localStorage !== 'undefined' && localStorage.getItem('language')
        let TokenFigure = ''
        if(currentLanguage === 'en') {
            TokenFigure = <span className="icon icon-token-figure-en"/>
        }else{
            TokenFigure = <span className="icon icon-token-figure-zh"/>
        }
        return (
            <div className="container">
                <span className="icon icon-square-3"/>
                <div className="section-title">
                    <FormattedMessage id="token.title"/>
                    T<span className="section-title-bright">O</span>KEN
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="token-text">
                            <FormattedMessage id="token.text"/>
                        </div>
                        <div className="token-transform">
                            <ul>
                                <li>x  <FormattedMessage id="token.totalTokenIssued"/> = 100M DXL</li>
                                <li>1  <FormattedMessage id="token.sale"/>  (23%) = 23M DXL</li>
                                <li>2  <FormattedMessage id="token.team"/>  (20%) = 20M DXL</li>
                                <li>3  <FormattedMessage id="token.foundation"/>  (22%) = 22M DXL</li>
                                <li>4  <FormattedMessage id="token.systemIncentive"/>  (30%) = 30M DXL</li>
                                <li>5  <FormattedMessage id="token.communityReward"/>  (5%) = 5M DXL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 token-figure-wrap">
                        <div className="token-figure-title">
                            <FormattedMessage id="token.distribution"/>
                        </div>
                        <div className="token-figure-icon">
                            {TokenFigure}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}