function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    const playGround = document.getElementById('playScreen');
    playGround.classList.remove('hidden');
    continueGame();
}

function getRandomAlpha(){
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaString.split('');
    // console.log(alpha);
    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);
    // console.log(index);
    const alphabet = alpha[index];
    // console.log(index, alphabet)
    return alphabet;
}

function setBgColor(elementId){
    const bgColor = document.getElementById(elementId);
    bgColor.classList.add('bg-orange-400');
}


function continueGame(){
    //random alphabet
    const alphaRandom = getRandomAlpha();
    console.log('Random Alpha is:', alphaRandom);  
    const showAlphatoUi = document.getElementById('currentAlpha');
    showAlphatoUi.innerText = alphaRandom;
    setBgColor(alphaRandom);
}

