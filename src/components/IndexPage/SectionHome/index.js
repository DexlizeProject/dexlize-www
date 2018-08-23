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

            $('.block-5').addClass('icon-block-eos').animate({top: '-=24px'}, 400, function () {
                $('.block-5').animate({top: '+=24px'}, 400, function () {
                    $(this).removeClass('icon-block-eos');
                    $('.block-4').addClass('icon-block-bitcoin').animate({top: '-=24px'}, 400, function () {
                        $('.block-4').animate({top: '+=24px'}, 400, function () {
                            $(this).removeClass('icon-block-bitcoin');
                            $('.block-3').addClass('icon-block-bitcoin').animate({top: '-=24px'}, 400, function () {
                                $('.block-3').animate({top: '+=24px'}, 400, function () {
                                    $(this).removeClass('icon-block-bitcoin');
                                    $('.block-2').addClass('icon-block-bitcoin').animate({top: '-=24px'}, 400, function () {
                                        $('.block-2').animate({top: '+=24px'}, 400, function () {
                                            $(this).removeClass('icon-block-bitcoin');
                                            $('.block-1').addClass('icon-block-bitcoin').animate({top: '-=24px'}, 400, function () {
                                                $('.block-1').animate({top: '+=24px'}, 400, function(){
                                                    $(this).removeClass('icon-block-bitcoin');
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
                        <span className="icon icon-banner-block-1"/>
                    </div>
                    <div className="block-2">
                        <span className="icon icon-banner-block-2"/>
                    </div>
                    <div className="block-3">
                        <span className="icon icon-banner-block-3"/>
                    </div>
                    <div className="block-4">
                        <span className="icon icon-banner-block-4"/>
                    </div>
                    <div className="block-5">
                        <span className="icon icon-banner-block-5"/>
                    </div>
                    <span className="icon icon-banner-block-group-2"/>
                </div>
            </div>
        )
    }
}