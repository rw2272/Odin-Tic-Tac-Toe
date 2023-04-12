turn = 0;

const boxes = document.querySelectorAll('.box');

const whoseturn = document.querySelector('h3');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    console.log(box.id + ' clicked');
    if(turn%2 == 0 && box.innerHTML == ""){
        box.innerHTML = 'X'
        turn++
        whoseturn.innerHTML = "0's turn"
    }
    else if(turn%2 == 1 && box.innerHTML == ""){
        box.innerHTML = '0'
        turn++
        whoseturn.innerHTML = "X's turn"
    }
    else{
        console.log("No go")
    }
  });
});