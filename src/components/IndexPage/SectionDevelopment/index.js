import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionDevelopment extends React.Component{
    render () {
        return (
            <div className="container">
                <div className="section-subtitle">
                    <FormattedMessage id="development.subtitle"/>
                </div>
                <div className="section-title">
                    <FormattedMessage id="development.title"/>
                </div>
                <div className="development-text">
                    <FormattedMessage id="development.text.1"/><br/> <FormattedMessage id="development.text.2"/>
                </div>
                <div className="development-list-wrap">
                    <ul className="development-list">
                        <li><FormattedMessage id="development.1.text"/></li>
                        <li><FormattedMessage id="development.2.text"/></li>
                        <li><FormattedMessage id="development.3.text"/></li>
                        <li><FormattedMessage id="development.4.text"/></li>
                        <li><FormattedMessage id="development.5.text"/></li>
                    </ul>
                </div>
            </div>
        )
    }
}