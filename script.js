// function moveBallUp(target) {
//   target.style.
// }


function randColor() {
  let color = '#'
  for (i = 0; i<6; i++)
    {
      let values = '0123456789ABCDEF'
      color += values[(Math.floor(Math.random() *16))]
    }
  return color
}



let testBoxColor = document.getElementById('test_box')

function changeColor() {
  testBoxColor.style.backgroundColor = randColor()
}

testBoxColor.addEventListener('click', changeColor)