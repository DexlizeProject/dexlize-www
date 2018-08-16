import React from 'react'
import {FormattedMessage} from 'react-intl'
import $ from 'jquery'
import './style.less'

export default class SectionTeam extends React.Component {
    constructor(props){
        super(props)
        this.slideToggle = this.slideToggle.bind(this)

    }
    slideToggle () {
        const currentGroup = $('.group-1').css('display') === 'block' ? '1' : '2'
        const nextGroup = currentGroup === '1' ? '2' : '1'
        $('.group-' + currentGroup).fadeOut(function(){
            $('.group-' + nextGroup).fadeIn();
        });
    }
    render() {
        return (
            <div className="container">
                <div className="section-title">
                    <FormattedMessage id="team.title"/>
                </div>
                <div className="row">
                    <div className="icon-left-wrap" onClick={this.slideToggle}>
                        <span className="icon icon-left"/>
                    </div>
                    <div className="groups">
                        <div className="group-1">
                            <div className="col-md-2 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-1.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.1.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.1.title"/>
                                        <br/>
                                        <FormattedMessage id="team.1.title2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-2.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.2.name"/>

                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.2.title"/>
                                        <br/> <FormattedMessage id="team.2.title2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-3.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.3.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.3.title"/>
                                        <br/> <FormattedMessage id="team.3.title2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-4.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.4.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.4.title"/>
                                        <br/> <FormattedMessage id="team.4.title2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-5.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.5.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.5.title"/>
                                        <br/> <FormattedMessage id="team.5.title2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-6.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.6.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.6.title"/>
                                        <br/>
                                        <FormattedMessage id="team.6.title2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group-2">
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-7.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.7.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.7.title"/>
                                        <br/>
                                        <FormattedMessage id="team.7.title2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-8.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.8.name"/>

                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.8.title"/>
                                        <br/> <FormattedMessage id="team.8.title2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-9.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.9.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.9.title"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-10.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.10.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.10.title"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-xs-4">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src="/static/icon/team/team-11.png"/>
                                    </div>
                                    <div className="team-item-name">
                                        <FormattedMessage id="team.11.name"/>
                                    </div>
                                    <div className="team-item-title">
                                        <FormattedMessage id="team.11.title"/>
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
                    <div className="icon-right-wrap" onClick={this.slideToggle}>
                        <span className="icon icon-right"/>
                    </div>
                </div>
            </div>
        )
    }
}
