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
                            <div className="time-date">2017 Dec</div>
                        </div>
                        <div className="timeline-item-active">
                            <div className="timeline-upcoming-date">2017 Dec</div>
                            <div className="timeline-upcoming-event">去中心化交易解决方案研究</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2018 July</div>
                        </div>
                        <div className="timeline-item-active">
                            <div className="timeline-upcoming-date">2018 July</div>
                            <div className="timeline-upcoming-event">EOS钱包版本1.0发布，支持 EOS 资产转移</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2018 July</div>
                        </div>
                        <div className="timeline-item-active">
                            <div className="timeline-upcoming-date">2018 July</div>
                            <div className="timeline-upcoming-event">起草白皮书</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2018 Q3</div>
                        </div>
                        <div className="timeline-item-active">
                            <div className="timeline-upcoming-date">2018 Q3</div>
                            <div className="timeline-upcoming-event">去中心化交易协议(Dex) Alpha 版本发布</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            <div className="time-bar mr10"/>
                            <div className="time-date">2018 Q4</div>
                        </div>
                        <div className="timeline-item-active">
                            <div className="timeline-upcoming-date">2018 Q4</div>
                            <div className="timeline-upcoming-event">Dex 的 Beta 测试版发布，Beta 版测试周期，建设周边交易生态系统</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-normal">
                            <div className="time-dot mr10"/>
                            {/*<div className="time-bar mr10"/>*/}
                            <div className="time-date">2019 Jan</div>
                        </div>
                        <div className="timeline-item-active">
                            <div className="timeline-upcoming-date">2019 Jan</div>
                            <div className="timeline-upcoming-event">Dex 在 EOS 主网上运行，并完全集成到 BitPortal App 中</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}