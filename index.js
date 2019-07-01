const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const whoWon = array.find(aRecord => aRecord.result === 'W');
  return (whoWon ? whoWon.year : undefined)
}
