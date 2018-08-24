import React from 'react'
import Layout from '../components/layout'
import {withIntl, Link} from '../i18n'

import Footer from '../components/Footer'

import SectionHome from '../components/IndexPage/SectionHome'
import SectionWhatIs from '../components/IndexPage/SectionWhatIs'
import SectionFeatures from '../components/IndexPage/SectionFeatures'
import SectionArchitecture from '../components/IndexPage/SectionArchitecture'
import SectionEcosystem from '../components/IndexPage/SectionEcosystem'
import SectionToken from '../components/IndexPage/SectionToken'
import SectionDevelopment from '../components/IndexPage/SectionDevelopment'
import SectionRoadmap from '../components/IndexPage/SectionRoadmap'
import SectionTeam from '../components/IndexPage/SectionTeam'
import SectionPartners from '../components/IndexPage/SectionPartners'
import SectionSubscribe from '../components/IndexPage/SectionSubscribe'
import $ from 'jquery'
import helper from "../helpers";

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: (typeof localStorage !== 'undefined' && localStorage.getItem('language')) || 'en'
        }
    }

    componentDidMount() {
        //Change character color in section title
        if (this.state.language === 'en') {
            $('.section-features .section-tile').html(helper.changeChracterColor($('.section-features .section-title span').text(), [2]))
            $('.section-architecture .section-tile').html(helper.changeChracterColor($('.section-architecture .section-title span').text(), [2, 11]))
            $('.section-ecosystem .section-tile').html(helper.changeChracterColor($('.section-ecosystem .section-title span').text(), [2,11]))
            $('.section-token .section-tile').html(helper.changeChracterColor($('.section-token .section-title span').text(), [3]))
            $('.section-development .section-tile').html(helper.changeChracterColor($('.section-development .section-title span').text(), [2]))
            $('.section-roadmap .section-tile').html(helper.changeChracterColor($('.section-roadmap .section-title span').text(), [2], 'roadmap-title-active'))
            $('.section-team .section-tile').html(helper.changeChracterColor($('.section-team .section-title span').text(), [2, 7]))
            $('.section-partners .section-tile').html(helper.changeChracterColor($('.section-partners .section-title span').text(), [2, 13]))
            $('.section-subscribe .section-tile').html(helper.changeChracterColor($('.section-subscribe .section-title span').text(), [2, 5]))
        } else {
            // document.getElementsByClassName('section-features')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-features')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 10])
            // document.getElementsByClassName('section-architecture')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-architecture')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 10])
            // document.getElementsByClassName('section-ecosystem')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-ecosystem')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 10])
            // document.getElementsByClassName('section-token')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-token')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [3, 7])
            // document.getElementsByClassName('section-development')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-development')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1])
            // document.getElementsByClassName('section-roadmap')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-roadmap')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1], 'roadmap-title-active')
            // document.getElementsByClassName('section-team')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-team')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1])
            // document.getElementsByClassName('section-partners')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-partners')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1, 8])
            // document.getElementsByClassName('section-subscribe')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-subscribe')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1])
        }

        new fullpage('#fullpage', {
            licenseKey: '887B9707-133D4802-8542264F-8795D5AA',
            anchors: ['home', 'whatis', 'features', 'architecture', 'ecosystem', 'token', 'development', 'roadmap', 'team', 'partners', 'subscribe'],
            menu: '#header-nav',
            scrollOverflow: true,
            onLeave: function (origin, destination, direction) {
                if (destination.anchor === 'home') {
                    document.getElementsByClassName('header')[0].className = 'header'
                } else {
                    document.getElementsByClassName('header')[0].className = 'header header-bg-white';
                }
            }
        })
    }

    render() {
        return (
            <Layout>
                <div id="fullpage">
                    <div className="section section-home fp-no-scroll">
                        <SectionHome/>
                    </div>
                    <div className="section section-whatis fp-no-scroll">
                        <SectionWhatIs/>
                    </div>
                    <div className="section section-features fp-no-scroll">
                        <SectionFeatures/>
                    </div>
                    <div className="section section-architecture fp-no-scroll">
                        <SectionArchitecture/>
                    </div>
                    <div className="section section-ecosystem fp-no-scroll">
                        <SectionEcosystem/>
                    </div>
                    <div className="section section-token fp-noscroll">
                        <SectionToken/>
                    </div>
                    <div className="section section-development fp-no-scroll">
                        <SectionDevelopment/>
                    </div>
                    <div className="section section-roadmap fp-no-scroll">
                        <SectionRoadmap/>
                    </div>
                    <div className="section section-team fp-no-scroll">
                        <SectionTeam/>
                    </div>
                    <div className="section section-partners fp-no-scroll">
                        <SectionPartners/>
                    </div>
                    <div className="section section-subscribe fp-no-scroll">
                        <SectionSubscribe/>
                    </div>
                    <Footer/>
                </div>
            </Layout>
        )
    }
}

export default withIntl(IndexPage)