const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const team = array.find(team => team.result === "W");
  return (team ? team.year : undefined);
}