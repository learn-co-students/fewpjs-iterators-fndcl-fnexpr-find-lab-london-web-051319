const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winner = arr.find(game => game.result === 'W');

  return (winner ? winner.year : undefined);
}
