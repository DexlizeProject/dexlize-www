import React from 'react'
import './style.less'

export default class Footer extends React.Component{
    render () {
        return (
            <div className="footer fp-auto-height">
                <footer className="container">
                    <span className="icon icon-logo-light"/>
                    <div className="footer-share-copyright">
                        <div className="footer-share">
                            <span className="icon icon-twitter"/>
                            <span className="icon icon-discord"/>
                            <span className="icon icon-wechat"/>
                            <span className="icon icon-telegram"/>
                            <span className="icon icon-github"/>
                            <span className="icon icon-weibo"/>
                            <span className="icon icon-facebook"/>
                        </div>
                        <div className="footer-copyright">
                            Copyright: 2018. All Rights Reserved By Dexlize Fondation PTE. LTD.
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}