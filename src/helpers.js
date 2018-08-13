export default {
    changeChracterColor (str, charPostions, className) {
        if(!className){
            className = 'section-title-bright'
        }
        let characterArr = str.split('')
        console.log(characterArr)
        charPostions.forEach(charPosition => {
            characterArr[charPosition] = '<span class=' + className +'>' + characterArr[charPosition] + '</span>'
        })
        return characterArr.join('')
    }
}