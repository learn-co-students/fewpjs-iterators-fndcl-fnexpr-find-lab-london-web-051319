const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  const result = records.find(recordData => {
   return recordData["result"] === "W"
  })
  return result ? result.year : undefined
}
