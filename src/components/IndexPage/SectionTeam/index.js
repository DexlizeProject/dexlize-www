import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionTeam extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="section-title">
                    <FormattedMessage id="team.title"/>
                    {/*TE<span className="section-title-bright">A</span>M IN<span className="section-title-bright">T</span>RODUCTION*/}
                </div>
                <div className="row">
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-1.png"/>
                                {/*<span className="icon icon-team-1"/>*/}
                            </div>
                            <div className="team-item-name">Jamie Cheng</div>
                            <div className="team-item-title">
                                CEO & Founder <br/>
                                Blockchain / Backend Architecture
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-2.png"/>

                            </div>
                            <div className="team-item-name">Harry Hong</div>
                            <div className="team-item-title">
                                CTO <br/>
                                Blockchain / Software Engineer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-3.png"/>
                            </div>
                            <div className="team-item-name">Terrence Ge</div>
                            <div className="team-item-title">
                                Co-Founder <br/>
                                React / React Native Engineer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-4.png"/>
                            </div>
                            <div className="team-item-name">Errance Liu</div>
                            <div className="team-item-title">
                                Co-Founder <br/>
                                Head of Product
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-5.png"/>
                            </div>
                            <div className="team-item-name">Thomas Yu</div>
                            <div className="team-item-title">
                                COO & Co-Founder <br/>
                                Growth Strategy & Operation
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-6.png"/>
                            </div>
                            <div className="team-item-name">Meon Wu</div>
                            <div className="team-item-title">
                                Branding Magt. <br/>
                                Designer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-7.png"/>
                            </div>
                            <div className="team-item-name">Leo Liu</div>
                            <div className="team-item-title">
                                Full-stack Developer<br/>
                                iOS / React Native
                                Engineer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-8.png"/>

                            </div>
                            <div className="team-item-name">Neil Joseph</div>
                            <div className="team-item-title">
                                React Native Engineer<br/>
                                Partnership Manager
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-9.png"/>

                            </div>
                            <div className="team-item-name">Union Rhee</div>
                            <div className="team-item-title">
                                Global Business <br/>
                                Developer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-10.png"/>
                            </div>
                            <div className="team-item-name">Ellen Le</div>
                            <div className="team-item-title">
                                Business Growth Manager
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img">
                                <img src="/static/team/team-11.png"/>
                            </div>
                            <div className="team-item-name">Catherine Lu</div>
                            <div className="team-item-title">
                                Administrative Assistant
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <div className="team-item">
                            <div className="team-item-img-empty">
                            </div>
                            <div className="team-item-name">Waiting for you</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}