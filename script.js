
function init() {
    displayKey('-')
    document.typingPlace = 0;
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
    document.querySelector('body').style.backgroundColor = 'rgb(155,155,155)';
    generateSentence();

}


function handleKeyDown(e) {
    e.preventDefault();
    handleMiscKey(e.key.toUpperCase(), true);
    // console.log(e.keyCode);
    // let key = e.key;
    // e.preventDefault();
    // if (e.keyCode == 32) {
    //     displayKey('Space');
    // } else if (e.keyCode == 220) { // backslash
    //     key = encodeURI(e.key)
    // } else {
    //     displayKey(e.key);
    // }
    // let letters;
    // try {
    //     letters = document.querySelectorAll(`.${key}`);
    // } catch (error) {
    //     console.log(error);
    //     handleMiscKey(e.key, true);
    //     return;
    // }
    // letters.forEach(addColor);
    // let currentLetterElement = getLetterFromIndex(document.typingPlace);
    // if (currentLetterElement.textContent == e.key){
    //     currentLetterElement.style.color = 'black';
    //     document.typingPlace += 1;
    //     // skip space
    //     if (getLetterFromIndex(document.typingPlace).textContent == '\xa0') {
    //         document.typingPlace += 1;
    //     }
    // }
}

function handleKeyUp(e) {
    e.preventDefault();
    handleMiscKey(e.key.toUpperCase(), false);
    
}

function handleMiscKey(key, down) {
    console.log(`Handling misc key: ${key}`);
    const key_match = {
        '`': 'backtick',
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        ',': 'comma',
        '.': 'period',
        '/': 'fslash',
        '[': 'lbracket',
        ']': 'rbracket',
        ']': 'rbracket',
        '\\': 'bslash',
        '-': 'minus',
        '=': 'equals',
        ';': 'semicolon',
        '\'': 'apostrophe',
        'CAPSLOCK' : 'caps',
        'TAB': 'tab',
        'ENTER': 'enter',
        'ESCAPE': 'esc',
        'BACKSPACE': 'backspace'
    }

    if (key in key_match) {
        key = key_match[key];
    }
    
    
    element = document.querySelector(`#${key}`);
    animateKey(element, down);
}

function generateSentence() {
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
        letter.style.backgroundColor = document.querySelector('body').style.backgroundColor;
        if (char != '\xa0') {
            letter.classList.add(char)
        }
        letter.style.color = 'gray';
        letterDiv.append(letter)
        SENTENCE_DIV.append(letterDiv)
        
    })
}


function displayKey(key) {
    // Show key on the prominently on the page
    console.log(`Displaying ${key}`);
    document.querySelector('#lastPress').textContent = key
}

function getLetterFromIndex(index) {
    return document.querySelector('#sentence').children[index].querySelector('h2')
}

function addColor(element) {
    console.log(element);
    const COLOR_DIFFERENCE = 20; 
    // TODO: prevent same letter from repeatedly adding color
    let oldColor = element.style.backgroundColor;
    console.log(oldColor);
    // if (!oldColor) {
    //     oldColor = document.querySelector('body').style.backgroundColor;
    // }
    let oldColorArr = oldColor.slice( 
        oldColor.indexOf("(") + 1,  
        oldColor.indexOf(")") 
    ).split(", "); 
    newColor = `rgb(${oldColorArr[0]},${oldColorArr[1] - COLOR_DIFFERENCE},${oldColorArr[2] - COLOR_DIFFERENCE})`
    element.style.backgroundColor = newColor;
    console.log(newColor);
}

function animateKey(element, down) {
    element.classList.add(down ? 'pressed' : 'released');
    element.classList.remove(down ? 'released' : 'pressed');
}

function releaseKey(element) {
    element.classList.remove('pressed');
    element.classList.add('released');
}

init()