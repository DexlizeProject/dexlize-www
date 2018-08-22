import React from 'react'
import Layout from '../components/layout'
import {withIntl, Link} from '../i18n'

import Footer from '../components/Footer'

// import Navigation from '../components/IndexPage/Navigation'
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
import helper from "../helpers";

class IndexPage extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            language: (typeof localStorage !== 'undefined' && localStorage.getItem('language')) || 'en'
        }
    }
    componentDidMount() {
        //Change character color in section title
        if(this.state.language === 'en'){
            document.getElementsByClassName('section-features')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-features')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2])
            document.getElementsByClassName('section-architecture')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-architecture')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 11])
            document.getElementsByClassName('section-ecosystem')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-ecosystem')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 11])
            document.getElementsByClassName('section-token')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-token')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [3])
            document.getElementsByClassName('section-development')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-development')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2])
            document.getElementsByClassName('section-roadmap')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-roadmap')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2], 'roadmap-title-active')
            document.getElementsByClassName('section-team')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-team')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 7])
            document.getElementsByClassName('section-partners')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-partners')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 13])
            document.getElementsByClassName('section-subscribe')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-subscribe')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 5])

        }else{
            document.getElementsByClassName('section-features')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-features')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 10])
            document.getElementsByClassName('section-architecture')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-architecture')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 10])
            document.getElementsByClassName('section-ecosystem')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-ecosystem')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [2, 10])
            document.getElementsByClassName('section-token')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-token')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [3, 7])
            document.getElementsByClassName('section-development')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-development')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1])
            document.getElementsByClassName('section-roadmap')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-roadmap')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1], 'roadmap-title-active')
            document.getElementsByClassName('section-team')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-team')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1])
            document.getElementsByClassName('section-partners')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-partners')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1, 8])
            document.getElementsByClassName('section-subscribe')[0].getElementsByClassName('section-title')[0].innerHTML = helper.changeChracterColor(document.getElementsByClassName('section-subscribe')[0].getElementsByClassName('section-title')[0].getElementsByTagName('span')[0].innerText, [1])
        }

        new fullpage('#fullpage', {
            licenseKey: '887B9707-133D4802-8542264F-8795D5AA',
            anchors: ['home', 'whatis', 'features', 'architecture', 'ecosystem', 'token', 'development','roadmap', 'team', 'partners'],
            menu: '#header-nav',
            scrollOverflow: true,
            onLeave: function (origin, destination, direction){
                if(destination.anchor === 'home'){
                    document.getElementsByClassName('header')[0].className = 'header'
                    // document.getElementsByClassName('navigation-list')[0].style.display = 'none';
                }else{
                    document.getElementsByClassName('header')[0].className = 'header bg-white';
                    // document.getElementsByClassName('header')[0].style.display = 'none';
                    // document.getElementsByClassName('navigation-list')[0].style.display = 'block';
                }
                //以下代码在出设计稿后，与以上段落合并
                // if(destination.anchor === 'team'){
                //     document.getElementsByClassName('navigation-list')[0].style.display = 'none';
                // }else{
                //     document.getElementsByClassName('navigation-list')[0].style.display = 'block';
                // }
            }
        })
    }
    render() {
        return (
            <Layout>
               {/*<Navigation/>*/}
                <div id="fullpage">
                    <div className="section section-home">
                        <SectionHome/>
                    </div>
                    <div className="section section-whatis">
                        <SectionWhatIs/>
                    </div>
                    <div className="section section-features">
                        <SectionFeatures/>
                    </div>
                    <div className="section section-architecture">
                        <SectionArchitecture/>
                    </div>
                    <div className="section section-ecosystem">
                        <SectionEcosystem/>
                    </div>
                    <div className="section section-token fp-noscroll">
                        <SectionToken/>
                    </div>
                    <div className="section section-development">
                        <SectionDevelopment/>
                    </div>
                    <div className="section section-roadmap">
                        <SectionRoadmap/>
                    </div>
                    <div className="section fp-auto-height">
                        <div className="section-team">
                            <SectionTeam/>
                        </div>
                        <div className="section-partners">
                            <SectionPartners/>
                        </div>
                        <div className="section-subscribe">
                            <SectionSubscribe/>
                        </div>
                        <Footer/>
                    </div>

                </div>
            </Layout>
        )
    }
}

export default withIntl(IndexPage)