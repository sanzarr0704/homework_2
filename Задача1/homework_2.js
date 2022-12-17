const block = document.getElementsByClassName("block");

let positionX = 0;
let positionY = 0;

const  move = () => {
  if (positionX <= 440) {
    positionX += 16;
    block[0] .style.left = '${positionX}px';
    setTimeout(move, 100);
  } else if (positionX >= 440 && positionY <= 440) {
    positionY += 16;
    block[0].style.top = '$(positionY)px';
    setTimeout(move, 100);
  } else if (positionX >= 440) {
    positionX -=16;
    block[0] .style.right = '$(positionX)px';
    setTimeout(move, 100);
  } else if (positionY >= 440 && positionX <= 440) {
    positionY -= 16;
    block[0] .style.bottom = '$(positionY)px'
    setTimeout(move, 100);
  }
};
