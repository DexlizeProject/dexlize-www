import React from 'react'
import {FormattedMessage} from 'react-intl'
import helper from '../../../helpers'
import './style.less'

export default class SectionFeatures extends React.Component{
    render () {
        return (
            <div className="container">
                <div className="section-title">
                    <FormattedMessage id="features.title" values={{a: (<span className="section-title-bright">A</span>), d: (<span className="section-title-bright">点</span>)}}/>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="features-item">
                            <div className="feature-icon">
                                <span className="icon icon-chart"/>
                            </div>
                            <div className="feature-title">
                                <FormattedMessage id="features.1.title"/>
                            </div>
                            <div className="feature-desc">
                                <FormattedMessage id="features.1.text"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="features-item">
                            <div className="feature-icon">
                                <span className="icon icon-database"/>
                            </div>
                            <div className="feature-title">
                                <FormattedMessage id="features.2.title"/>
                            </div>
                            <div className="feature-desc">
                                <FormattedMessage id="features.2.text"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="features-item">
                            <div className="feature-icon">
                                <span className="icon icon-pie"/>
                            </div>
                            <div className="feature-title">
                                <FormattedMessage id="features.3.title"/>
                            </div>
                            <div className="feature-desc">
                                <FormattedMessage id="features.3.text"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}