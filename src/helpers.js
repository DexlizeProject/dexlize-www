export default {
    changeChracterColor (str, charPostions, className) {
        if(!className){
            className = 'section-title-bright'
        }
        let characterArr = str.split('')
        charPostions.forEach(charPosition => {
            characterArr[charPosition] = '<span class=' + className +'>' + characterArr[charPosition] + '</span>'
        })
        return characterArr.join('')
    }
}