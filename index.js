const testVar = {}

function testFunc() {
  return "hi"
};


let superbowlWin = (record) => {
   let obj;
   let object = record.find(key => key.result === 'W');
   if (object) {
      return object.year;
   } else {
      return undefined;
   }   
};
