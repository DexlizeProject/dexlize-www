import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionEcosystem extends React.Component{
    render () {
        return (
            <div className="container">
                <div className="section-title">
                    <FormattedMessage id="ecosystem.title"/>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="dexlize-atom-wrap">
                            <span className="icon icon-dexlize-atom"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="section-text">
                            <FormattedMessage id="ecosystem.text"/>
                        </div>
                        <div className="ecosystem-item">
                            <div className="ecosystem-item-title">
                                <FormattedMessage id="ecosystem.1.title"/>
                            </div>
                            <div className="ecosystem-item-text">
                                <FormattedMessage id="ecosystem.1.text"/>
                            </div>
                        </div>
                        <div className="ecosystem-item">
                            <div className="ecosystem-item-title">
                                <FormattedMessage id="ecosystem.2.title"/>
                            </div>
                            <div className="ecosystem-item-text">
                                <FormattedMessage id="ecosystem.2.text"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}