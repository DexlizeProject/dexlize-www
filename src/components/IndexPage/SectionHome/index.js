import React from 'react'
import {FormattedMessage} from 'react-intl'
import $ from 'jquery'
import './style.less'

export default class SectionHome extends React.Component {
    componentDidMount() {
        this.bannerBlockAnimation();
    }

    bannerBlockAnimation() {
        var me = this;
        //电脑端才展示动画
        if (typeof window !== 'undefined' && window.screen.width > 768) {
            $('.block-5').animate({top: '-=24px'}).find('.icon-top').animate({'opacity': 1}, function(){
                $('.block-5').animate({top: '+=24px'}).find('.icon-top').animate({'opacity': 0}, function(){
                    $('.block-4').animate({top: '-=24px'}).find('.icon-top').animate({'opacity': 1}, function(){
                        $('.block-4').animate({top: '+=24px'}).find('.icon-top').animate({'opacity': 0}, function(){
                            $('.block-3').animate({top: '-=24px'}).find('.icon-top').animate({'opacity': 1}, function(){
                                $('.block-3').animate({top: '+=24px'}).find('.icon-top').animate({'opacity': 0}, function(){
                                    $('.block-2').animate({top: '-=24px'}).find('.icon-top').animate({'opacity': 1}, function(){
                                        $('.block-2').animate({top: '+=24px'}).find('.icon-top').animate({'opacity': 0}, function(){
                                            $('.block-1').animate({top: '-=24px'}).find('.icon-top').animate({'opacity': 1}, function(){
                                                $('.block-1').animate({top: '+=24px'}).find('.icon-top').animate({'opacity': 0}, function(){
                                                    me.bannerBlockAnimation()
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    }

    render() {
        let whitePaperLink = ''
        if (typeof localStorage !== 'undefined' && localStorage.getItem('language') === 'en') {
            whitePaperLink = 'https://cdn.dexlize.org/static/WhitePaper-EN-compressed-2018-08-14.pdf'
        } else {
            whitePaperLink = 'https://cdn.dexlize.org/static/WhitePaper-ZH-compressed-2018-08-14.pdf'
        }
        return (
            <div className="container">
                <div className="banner-title">
                    <FormattedMessage id="banner.text1"/><span className="section-title-bright">,</span> <br/>
                    <FormattedMessage id="banner.text2"/><span className="section-title-bright">.</span>
                </div>
                <a href={whitePaperLink} target="_blank">
                    <button className="banner-btn"><FormattedMessage id="banner.viewWhitepaper"/></button>
                </a>
                <div className="banner-blocks">
                    <span className="icon icon-banner-block-group-1"/>
                    <div className="block-1">
                        <span className="icon icon-top icon-block-eos"/>
                        <span className="icon icon-banner-block"/>
                    </div>
                    <div className="block-2">
                        <span className="icon icon-top icon-block-eos"/>
                        <span className="icon icon-banner-block"/>
                    </div>
                    <div className="block-3">
                        <span className="icon icon-top icon-block-eos"/>
                        <span className="icon icon-banner-block"/>
                    </div>
                    <div className="block-4">
                        <span className="icon icon-top icon-block-eos"/>
                        <span className="icon icon-banner-block"/>
                    </div>
                    <div className="block-5">
                        <span className="icon icon-top icon-block-eos"/>
                        <span className="icon icon-banner-block"/>
                    </div>
                    <span className="icon icon-banner-block-group-2"/>
                </div>
            </div>
        )
    }
}