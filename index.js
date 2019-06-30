const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (array) {
  let winYear = array.find(record => {
    return record.result === "W"
  })
  return winYear ? winYear.year : undefined
}