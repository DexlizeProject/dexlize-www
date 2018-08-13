import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionWhatIs extends React.Component{
    render () {
        return (
            <div className="container">
                <span className="icon icon-square-1"/>
                <div className="section-title">
                    <FormattedMessage id="whatis.title"/> <span className="icon icon-dexlize-text"/> ?
                </div>
                <div className="whatis-text">
                    <FormattedMessage id="whatis.text"/>
                </div>
                <div className="dexlize-text-big">
                    <img src="/static/icon/dexlize-text-big.png"/>
                </div>
            </div>
        )
    }
}