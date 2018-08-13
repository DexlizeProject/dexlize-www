import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionStructure extends React.Component {
    render() {
        return (
            <div className="container">
                <span className="icon icon-square-2"/>
                <div className="section-title">
                    <FormattedMessage id="structure.title"/>
                </div>
                <div className="structure-wrap">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="structure-item">
                                <span className="icon icon-user"/> <FormattedMessage id="structure.user"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <div className="structure-item">
                                <span className="icon icon-wallet"/> <FormattedMessage id="structure.wallet"/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="structure-item">
                                <span className="icon icon-website"/> <FormattedMessage id="structure.website"/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="structure-item">
                                <span className="icon icon-robot"/> <FormattedMessage id="structure.robot"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="structure-item structure-item-core">
                                <img src="/static/icon/dexlize-text-dark.png"/>
                                <span className="structure-item-core-text"><FormattedMessage id="structure.dexlizeProtocol"/></span>
                            </div>
                        </div>
                    </div>
                    <div className="row structure-basis">
                        <div className="col-xs-2">
                            <div className="structure-item structure-item-basis">
                                Dex1
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="structure-item structure-item-basis">
                                Dex2
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="structure-item structure-item-basis">
                                Dex2
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="structure-item structure-item-basis">
                                ...
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="structure-item structure-item-basis">
                                Bancor
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="structure-item structure-item-basis">
                                {/*TODO 需要去掉一个单词*/}
                                <FormattedMessage id="structure.other"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}