let isStared: boolean = true;
let isEnded: boolean = false;

// function which is return a boolen value
// which take numbar as parameter and return boolean value
function isEven(a: number): boolean {
  return a % 2 === 0;
}

console.log(isEven(7));

function isDiviedBy4and8(a: number): boolean {
    if (a/8 && a/4) {
      return true
    }else{
      return false
    }
  }

  console.log(isDiviedBy4and8(16));
  