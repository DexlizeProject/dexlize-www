import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionRoadmap extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div className="container">
                <span className="icon icon-square-4"/>
                <div className="section-title">
                    <FormattedMessage id="roadmap.title"/>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date text-left">2017 Dec</div>
                        </div>
                        <div className="timeline-item-active">
                            <div className="timeline-upcoming-date">2018 July</div>
                            <div className="timeline-upcoming-event"><FormattedMessage id="roadmap.upcomingEvent"/></div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="time-dot mr10"/>
                        <div className="time-bar mr10"/>
                        <div className="time-date text-left">2018 July</div>
                    </div>
                    <div className="timeline-item">
                        <div className="time-bar ml10"/>
                        <div className="time-dot ml10"/>
                        <div className="time-date text-right">2018 Q3</div>
                    </div>
                    <div className="timeline-item">
                        <div className="time-bar ml10"/>
                        <div className="time-dot ml10"/>
                        <div className="time-date text-right">2018 Q4</div>
                    </div>
                    <div className="timeline-item">
                        <div className="time-bar ml10"/>
                        <div className="time-dot ml10"/>
                        <div className="time-date text-right">2019 Jan</div>
                    </div>
                </div>
            </div>
        )
    }
}