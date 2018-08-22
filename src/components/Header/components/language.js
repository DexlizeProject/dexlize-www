import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'
import './language.less'

class Language extends Component {
    static contextTypes = {
        language: PropTypes.object
    }
    constructor(props) {
        super(props)
        let initLanguage = ''
        if (typeof localStorage !== 'undefined' && localStorage.getItem('language') !== ''){
            initLanguage = localStorage.getItem('language')
        }else if (typeof window !== 'undefined') {
            initLanguage = (navigator.language || navigator.browserLanguage).slice(0, 2)
        }else {
            initLanguage = 'en'
        }
        this.state = {
            currentLanguage: initLanguage
        }
        this.setLanguage = this.setLanguage.bind(this)
    }

    setLanguage (target) {
        const {language} = this.context
        console.log(this.context)
        const {originalPath} = language
        localStorage.setItem('language', target)
        window.location.href = `/${target}${originalPath}`
    }

    render() {
        const CurrentLangEn = <span onClick={this.setLanguage.bind(this, 'en')}><span className="icon icon-lang-en"/> <FormattedMessage id="nav.switchLang"/></span>
        const CurrentLangZh = <span onClick={this.setLanguage.bind(this, 'zh')}><span className="icon icon-lang-zh"/> <FormattedMessage id="nav.switchLang"/></span>
        return (
            <div className="language-switch">
                <div className="current-lang" onClick={this.toggleLanguageList}>
                    {this.state.currentLanguage == 'en' ? CurrentLangZh : CurrentLangEn}
                </div>
            </div>
        )
    }
}

export default Language
