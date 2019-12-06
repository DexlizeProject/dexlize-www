import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class SectionRoadmap extends React.Component{
    render () {
        return (
            <div className="container">
                <span className="icon icon-square-4"/>
                <div className="section-title">
                    <FormattedMessage id="roadmap.title" values={{a:(<span className="roadmap-title-active">a</span>), x:(<span className="roadmap-title-active">线</span>)}}/>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2017 Dec</div>
                        </div>
                        <div className="timeline-item-active">
                            <span className="icon icon-triangle"/>
                            <div className="timeline-upcoming-date">2017 Dec</div>
                            <div className="timeline-upcoming-event"><FormattedMessage id="roadmap.item1"/></div>
                        </div>
                    </div>
                    <div className="timeline-item timeline-item-second">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2018 July</div>
                        </div>
                        <div className="timeline-item-active">
                            <span className="icon icon-triangle"/>
                            <div className="timeline-upcoming-date">2018 July</div>
                            <div className="timeline-upcoming-event"><FormattedMessage id="roadmap.item2"/></div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2018 July</div>
                        </div>
                        <div className="timeline-item-active">
                            <span className="icon icon-triangle"/>
                            <div className="timeline-upcoming-date">2018 July</div>
                            <div className="timeline-upcoming-event"><FormattedMessage id="roadmap.item3"/></div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2019 Q1</div>
                        </div>
                        <div className="timeline-item-active">
                            <span className="icon icon-triangle"/>
                            <div className="timeline-upcoming-date">2019 Q1</div>
                            <div className="timeline-upcoming-event"><FormattedMessage id="roadmap.item4"/></div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2019 Q3</div>
                        </div>
                        <div className="timeline-item-active">
                            <span className="icon icon-triangle"/>
                            <div className="timeline-upcoming-date">2019 Q3</div>
                            <div className="timeline-upcoming-event" style={{fontSize: '14px'}}><FormattedMessage id="roadmap.item5"/></div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-date">2020 Q1</div>
                        </div>
                        <div className="timeline-item-active">
                            <span className="icon icon-triangle"/>
                            <div className="timeline-upcoming-date">2020 Q1</div>
                            <div className="timeline-upcoming-event"><FormattedMessage id="roadmap.item6"/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}