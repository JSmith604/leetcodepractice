const numbers = [2,7,11,15,21]
const target = 9

const twoSumBruteForce = (numbers, target) => {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target && numbers[i] !== numbers[j]) {
        return [i,j]
      }
      else {
        return [];
      }
    }
  }
};

twoSumBruteForce(numbers, target);