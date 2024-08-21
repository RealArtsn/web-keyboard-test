
function init() {
    document.addEventListener('keydown', handleKeyDown)
    
    const SENTENCE_DIV = document.querySelector('#sentence');

    const SENTENCE = "The quick brown fox jumps over the lazy dog";

    SENTENCE.split('').forEach((char) => {
        // console.log(char)
        if (char == ' ') {
            char = '\xa0'
        }
        let letterDiv = document.createElement('div');
        letterDiv.class = 'sentence_letter';
        let letter = document.createElement('h2');
        letter.textContent = char;
        letter.style.backgroundColor = 'rgb(0,100,100)'
        if (char != '\xa0') {
            letter.classList.add(char)
        }
        letterDiv.append(letter)
        SENTENCE_DIV.append(letterDiv)
        
    })
}



function handleKeyDown(e) {
    let letters = document.querySelectorAll(`.${e.key}`);
    letters.forEach(addColor);
}

function addColor(element) {
    let oldColor = element.style.backgroundColor;
    let oldColorArr = oldColor.slice( 
        oldColor.indexOf("(") + 1,  
        oldColor.indexOf(")") 
    ).split(", "); 
    let newRed = oldColorArr[0] + 1
    element.style.backgroundColor = `rgb(${newRed},255,255)`;
}

init()