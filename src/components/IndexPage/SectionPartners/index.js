import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionPartners extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="section-title">
                    <FormattedMessage id="partners.title"/>
                </div>
                <div className="partners-wrap">
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-1"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-2"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-3"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-4"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-5"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-6"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-7"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="partner-item">
                            <span className="icon icon-partner-8"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}