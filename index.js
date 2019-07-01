const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = arr => {
  const result = arr.find(({result}) => result === "W");
  return result && result.year
};
