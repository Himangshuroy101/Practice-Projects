function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  let intervalRefId;
  const changeBgColor = function(){
    function changeBg(){
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    }
    if (!intervalRefId){
    intervalRefId = setInterval(changeBg, 500);
    }
  
  }
  const stopChangeBgColor = function(){
    clearInterval(intervalRefId);
    intervalRefId = null;
  
  }
  
  
  document.querySelector('#start').addEventListener('click', changeBgColor);
  document.querySelector('#stop').addEventListener('click', stopChangeBgColor)