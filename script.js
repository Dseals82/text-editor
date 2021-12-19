let getInput = (elem)=>{
    let setOutput = document.getElementById('output-text')
    setOutput.innerText = elem.value
}


let boldButton = (elem) => {
    elem.classList.toggle('active');
    let outputVal = document.getElementById('output-text')
    outputVal.classList.toggle('bold')

    
}

let italicButton = (elem) => {
    elem.classList.toggle('active');
    let outputVal = document.getElementById('output-text');
    outputVal.classList.toggle('italic')
    
}

let underlineButton = (elem) => {
    // elem.classList.toggle('active');
    // let outputVal = document.getElementById('output-text');
    // outputVal.classList.toggle('underline')
    elem.classList.toggle('active');
    let outputVal = document.getElementById('output-text');
    if(outputVal.classList.contains('underline')){
        outputVal.classList.remove('underline')
    }else{
        outputVal.classList.add('underline')
    } 
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */

let alignText = (elem, activeType) => {
    elem.classList.toggle('active')
    let outputVal = document.getElementById('output-text');
    outputVal.style.textAlign = activeType;
    let buttonsList = document.getElementsByClassName('btn-align')
    
    for(let i = 0; i < buttonsList.length; i++){
            buttonsList[i].classList.remove('active')
    }
    elem.classList.add('active')
    
    
}