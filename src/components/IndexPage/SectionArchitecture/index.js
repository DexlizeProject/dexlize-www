import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionArchitecture extends React.Component {
    render() {
        return (
            <div className="container">
                <span className="icon icon-square-2"/>
                <div className="section-title">
                    <FormattedMessage id="architecture.title" values={{o:(<span className="section-title-bright">O</span>), r:(<span className="section-title-bright">R</span>), g:(<span className="section-title-bright">构</span>)}}/>
                </div>
                <div className="architecture-wrap">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="architecture-item">
                                <span className="icon icon-user"/> <FormattedMessage id="architecture.user"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <div className="architecture-item">
                                <span className="icon icon-wallet"/> <FormattedMessage id="architecture.wallet"/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="architecture-item">
                                <span className="icon icon-website"/> <FormattedMessage id="architecture.website"/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="architecture-item">
                                <span className="icon icon-robot"/> <FormattedMessage id="architecture.robot"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="architecture-item architecture-item-core">
                                <img src="/static/icon/dexlize-text-dark.png"/>
                                <span className="architecture-item-core-text"><FormattedMessage id="architecture.dexlizeProtocol"/></span>
                            </div>
                        </div>
                    </div>
                    <div className="row architecture-basis">
                        <div className="col-xs-2">
                            <div className="architecture-item architecture-item-basis">
                                Dex1
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="architecture-item architecture-item-basis">
                                Dex2
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="architecture-item architecture-item-basis">
                                Dex2
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="architecture-item architecture-item-basis">
                                ...
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="architecture-item architecture-item-basis">
                                Bancor
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <div className="architecture-item architecture-item-basis">
                                {/*TODO 需要去掉一个单词*/}
                                <FormattedMessage id="architecture.other"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}