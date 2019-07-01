const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const win = arr.find(obj => {return obj.result === 'W'})
  if (win) {
    return win.year
  } else {
    return win
  }
}