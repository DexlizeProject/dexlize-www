import React from 'react'
import {Link} from '../../i18n/index'
import {FormattedMessage} from 'react-intl'
import Language from './components/language'
import './style.less'

export default class Header extends React.Component {
    render() {
        return (
            <header className="container header">
                <span className="icon icon-logo"/>
                <div className="header-nav-wrap">
                    <ul className="header-nav">
                        <li><a href="#whatis"><FormattedMessage id="nav.whatis"/>?</a></li>
                        <li><a href="#features"><FormattedMessage id="nav.features"/></a></li>
                        <li><a href="#architecture"><FormattedMessage id="nav.architecture"/></a></li>
                        <li><a href="#ecosystem"><FormattedMessage id="nav.ecosystem"/></a></li>
                        <li><a href="#token"><FormattedMessage id="nav.token"/></a></li>
                        <li><a href="#development"><FormattedMessage id="nav.nextSteps"/></a></li>
                        <li><a href="#roadmap"><FormattedMessage id="nav.roadmap"/></a></li>
                        <li><a href="#team"><FormattedMessage id="nav.team"/></a></li>
                        <li><a href="#partners"><FormattedMessage id="nav.partners"/></a></li>
                        <li><a href="#subscribe"><FormattedMessage id="nav.subscribe"/></a></li>
                    </ul>
                </div>
                <div className="language-nav">
                    <Language/>
                </div>
            </header>
        )
    }
}