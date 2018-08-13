import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './language.less'

class Language extends Component {
    static contextTypes = {
        language: PropTypes.object
    }
    constructor(props) {
        super(props)
        this.toggleLanguageList = this.toggleLanguageList.bind(this)
        this.setLanguage = this.setLanguage.bind(this)

        let initLanguage = ''
        if (typeof localStorage !== 'undefined' && localStorage.getItem('language') !== ''){
            initLanguage = localStorage.getItem('language')
        }else if (typeof window !== 'undefined') {
            initLanguage = (navigator.language || navigator.browserLanguage).slice(0, 2)
        }else {
            initLanguage = 'en'
        }
        this.state = {
            showLanguageList: false,
            currentLanguage: initLanguage
        }
    }

    toggleLanguageList() {
        this.setState({
            showLanguageList: !this.state.showLanguageList
        })
    }

    setLanguage (target) {
        const {language} = this.context
        console.log(this.context)
        const {originalPath} = language
        localStorage.setItem('language', target)
        window.location.href = `/${target}${originalPath}`
    }

    render() {
        const CurrentLangEn = <span><span className="icon icon-lang-en"/> English</span>
        const CurrentLangZh = <span><span className="icon icon-lang-zh"/> 简体中文</span>
        const AvailableLangEn =  <span onClick={this.setLanguage.bind(this, 'en')}>English</span>
        const AvailableLangZh =  <span onClick={this.setLanguage.bind(this, 'zh')}>简体中文</span>

        return (
            <div className="language-switch">
                <div className="current-lang" onClick={this.toggleLanguageList}>
                    {this.state.currentLanguage == 'en' ? CurrentLangEn : CurrentLangZh}
                    <span className="glyphicon glyphicon-chevron-down"/>
                </div>
                {this.state.showLanguageList && <div className='language-list'>
                    {this.state.currentLanguage == 'en' ? AvailableLangZh : AvailableLangEn}
                </div>}
            </div>
        )
    }
}

export default Language
