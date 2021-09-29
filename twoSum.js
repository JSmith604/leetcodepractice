let numbers = [2,7,11,15]
let target = 9
let result = []

function twoSum(numbers, target)  {
    const compliment = new Map();
    const length = numbers.length
    
    for (let i = 0; i < length; i++) {
        if(compliment[numbers[i]] >=0){
           return [compliment[numbers[i]], i]
           }
        compliment[target - numbers[i]] = i;
    }
  
 return [];
}

twoSum(numbers, target)


