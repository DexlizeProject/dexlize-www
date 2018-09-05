import React from 'react'
import {Link} from '../../i18n/index'
import {FormattedMessage} from 'react-intl'
import Language from './components/language'
import $ from 'jquery'
import './style.less'

export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    toggleHeaderNav() {
        if(typeof window !== 'undefined' && window.screen.width <=1200){
            $('.header-nav-wrap').slideToggle()
        }
    }

    hideHeaderNav() {
        if(typeof window !== 'undefined' && window.screen.width <=1200){
            $('.header-nav-wrap').hide();
        }
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <a href="#home">
                        <span className="icon icon-logo"/>
                    </a>
                    <div className="header-nav-wrap" onClick={this.hideHeaderNav.bind(this)}>
                        <ul className="header-nav" id="header-nav">
                            <li data-menuanchor="whatis"><a href="#whatis"><FormattedMessage id="nav.whatis"/>?</a></li>
                            <li data-menuanchor="features"><a href="#features"><FormattedMessage id="nav.features"/></a></li>
                            <li data-menuanchor="architecture"><a href="#architecture"><FormattedMessage id="nav.architecture"/></a></li>
                            <li data-menuanchor="ecosystem"><a href="#ecosystem"><FormattedMessage id="nav.ecosystem"/></a></li>
                            <li data-menuanchor="token"><a href="#token"><FormattedMessage id="nav.token"/></a></li>
                            <li data-menuanchor="development"><a href="#development"><FormattedMessage id="nav.nextSteps"/></a></li>
                            <li data-menuanchor="roadmap"><a href="#roadmap"><FormattedMessage id="nav.roadmap"/></a></li>
                            {/*<li data-menuanchor="team"><a href="#team"><FormattedMessage id="nav.team"/></a></li>*/}
                            <li data-menuanchor="partners"><a href="#partners"><FormattedMessage id="nav.partners"/></a></li>
                            <li data-menuanchor="subscribe"><a href="#subscribe"><FormattedMessage id="nav.subscribe"/></a></li>
                            <li className="language-nav-mobile">
                                <Language/>
                            </li>
                        </ul>
                    </div>
                    <div className="language-nav">
                        <Language/>
                    </div>
                    <span onClick={this.toggleHeaderNav.bind(this)} className='glyphicon glyphicon-menu-hamburger'/>
                </div>
            </header>
        )
    }
}