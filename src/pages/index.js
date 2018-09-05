import React from 'react'
import Layout from '../components/layout'
import {withIntl} from '../i18n'

import Footer from '../components/Footer'

import SectionHome from '../components/IndexPage/SectionHome'
import SectionWhatIs from '../components/IndexPage/SectionWhatIs'
import SectionFeatures from '../components/IndexPage/SectionFeatures'
import SectionArchitecture from '../components/IndexPage/SectionArchitecture'
import SectionEcosystem from '../components/IndexPage/SectionEcosystem'
import SectionToken from '../components/IndexPage/SectionToken'
import SectionDevelopment from '../components/IndexPage/SectionDevelopment'
import SectionRoadmap from '../components/IndexPage/SectionRoadmap'
// import SectionTeam from '../components/IndexPage/SectionTeam'
import SectionPartners from '../components/IndexPage/SectionPartners'
import SectionSubscribe from '../components/IndexPage/SectionSubscribe'

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: (typeof localStorage !== 'undefined' && localStorage.getItem('language')) || 'en'
        }
    }

    componentDidMount() {
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
                    {/*<div className="section section-team fp-no-scroll">*/}
                        {/*<SectionTeam/>*/}
                    {/*</div>*/}
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