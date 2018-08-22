import React from 'react'
import {Link} from '../../i18n/index'
import {FormattedMessage} from 'react-intl'
import Language from './components/language'
import './style.less'

export default class Header extends React.Component {
    constructor(props){
        super(props);
    }
    what(e){
        console.log(e)
    }
    render() {
        return (
            <header className="header">
                <div className="container">
                    <a href="#home">
                        <span className="icon icon-logo"/>
                    </a>
                    <div className="header-nav-wrap">
                        <ul className="header-nav" id="header-nav" onClick={this.what.bind(this,event)}>
                            <li data-menuanchor="whatis"><a href="#whatis"><FormattedMessage id="nav.whatis"/>?</a></li>
                            <li data-menuanchor="features"><a href="#features"><FormattedMessage id="nav.features"/></a></li>
                            <li data-menuanchor="architecture"><a href="#architecture"><FormattedMessage id="nav.architecture"/></a></li>
                            <li data-menuanchor="ecosystem"><a href="#ecosystem"><FormattedMessage id="nav.ecosystem"/></a></li>
                            <li data-menuanchor="token"><a href="#token"><FormattedMessage id="nav.token"/></a></li>
                            <li data-menuanchor="development"><a href="#development"><FormattedMessage id="nav.nextSteps"/></a></li>
                            <li data-menuanchor="roadmap"><a href="#roadmap"><FormattedMessage id="nav.roadmap"/></a></li>
                            <li data-menuanchor="team"><a href="#team"><FormattedMessage id="nav.team"/></a></li>
                            <li data-menuanchor="partners"><a href="#partners"><FormattedMessage id="nav.partners"/></a></li>
                            <li data-menuanchor="subscribe"><a href="#subscribe"><FormattedMessage id="nav.subscribe"/></a></li>
                        </ul>
                    </div>
                    <div className="language-nav">
                        <Language/>
                    </div>
                    <span className='glyphicon glyphicon-menu-hamburger'/>
                </div>
            </header>
        )
    }
}