let input = 0
let input1 = 0
let ans = 0
let counter = 0
document.getElementById('button').addEventListener('click', click)

function click () {
  input = document.getElementById('input').value
  input1 = document.getElementById('input1').value
  input = parseInt(input)
  input1 = parseInt(input1)
  for (counter = 0; counter < input; counter = counter + 1) {
    ans = ans + input1
    ans = parseInt(ans)
  }
  document.getElementById('paragraph1').innerHTML = ans
}