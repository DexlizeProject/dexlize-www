import React from 'react'
import {FormattedMessage} from 'react-intl'
import Email from '../../Email'
import './style.less'

export default class SectionSubscribe extends React.Component{
    render () {
        return (
            <div className="container">
                <span className="icon icon-square-5"/>
                <div className="section-title">
                    <FormattedMessage id="subscribe.title" values={{b:(<span className="section-title-bright">b</span>), y:(<span className="section-title-bright">阅</span>)}}/>
                </div>
                <div className="section-subscribe-email">
                    <Email/>
                </div>
            </div>
        )
    }
}