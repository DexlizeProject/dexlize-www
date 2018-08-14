import React from 'react'
import {FormattedMessage} from 'react-intl'
import './style.less'

export default class Navigation extends React.Component {
    render() {
        return (
            <nav id="navigation">
                <ul className="navigation-list">
                    <div className="navigation-circle-bar"/>
                    <li data-menuanchor="whatis"><a href="#whatis">
                        <div className="navigation-circle">
                            <div className="navigation-circle-active"/>
                        </div>
                        <FormattedMessage id="nav.whatis"/>?</a></li>
                    <li data-menuanchor="features"><a href="#features">
                        <div className="navigation-circle">
                            <div className="navigation-circle-active"/>
                        </div>
                        <FormattedMessage id="nav.features"/></a></li>
                    <li data-menuanchor="structure"><a href="#structure">
                        <div className="navigation-circle">
                            <div className="navigation-circle-active"/>
                        </div>
                        <FormattedMessage id="nav.structure"/></a></li>
                    <li data-menuanchor="ecosystem"><a href="#ecosystem">
                        <div className="navigation-circle">
                            <div className="navigation-circle-active"/>
                        </div>
                        <FormattedMessage id="nav.ecosystem"/></a></li>
                    <li data-menuanchor="token"><a href="#token">
                        <div className="navigation-circle">
                            <div className="navigation-circle-active"/>
                        </div>
                        <FormattedMessage id="nav.token"/></a></li>
                    <li data-menuanchor="development"><a href="#development">
                        <div className="navigation-circle">
                            <div className="navigation-circle-active"/>
                        </div>
                        <FormattedMessage id="nav.nextSteps"/></a></li>
                    <li data-menuanchor="roadmap"><a href="#roadmap">
                        <div className="navigation-circle">
                            <div className="navigation-circle-active"/>
                        </div>
                        <FormattedMessage id="nav.roadmap"/></a></li>
                    {/*<li data-menuanchor="team"><a href="#team">*/}
                        {/*<div className="navigation-circle">*/}
                            {/*<div className="navigation-circle-active"/>*/}
                        {/*</div>*/}
                        {/*<FormattedMessage id="nav.team"/></a></li>*/}
                    {/*<li data-menuanchor="partners"><a href="#partners">*/}
                        {/*<div className="navigation-circle">*/}
                            {/*<div className="navigation-circle-active"/>*/}
                        {/*</div>*/}
                        {/*<FormattedMessage id="nav.partners"/></a></li>*/}
                </ul>
            </nav>
        )
    }
}