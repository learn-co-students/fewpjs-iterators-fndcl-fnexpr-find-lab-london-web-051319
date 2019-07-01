const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

const superbowlWin = (record) => {
  let winner = record.find(function (element) {return element.result === 'W'})
  return winner ? winner.year : undefined
}
