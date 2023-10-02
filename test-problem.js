function findLongestWord(str) {
  if(!str || typeof str !== 'string' || !str.match(/[a-z]+/gi) ) {
    return "not a valid input"
  }
  
  let strArr = str.match(/[a-z]+/gi)
    .map(it => it.toLowerCase())
    .sort((a,b) => b.length - a.length)
  
  if(strArr[0].length === strArr[1].length){
    strArr = strArr.filter(it => it.length === strArr[0].length)
    return checkVowels(strArr)
  }else{ 
    return strArr[0]
  }
  
  function checkVowels(arry){
    arry = arry.sort()
    let curr = arry[0];
    for(let i = 0; i < arry.length; i++){
    let currVowels = (curr.match(/[aeiou]/gi) || []).length;
    let checkVowels = (arry[i].match(/[aeiou]/gi) || []).length;
      checkVowels > currVowels ? curr = arry[i] : curr
    }
    return (curr)
  }
}




let tests = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            '"Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers" (Socrates)', "583058", 5387403, "#@$ %@*%&#*% @$%#", "$#*%&@%(", 
             "$#*hfey8t4hU*R# $*3oetu49j UR$905i4ae (U4i5oiute9", "wqsxc nmhkl", true, false]

let answers = [];

for(let i = 0; i < tests.length; i++){
  let ans = findLongestWord(tests[i])
  answers.push(ans)
}

console.log(answers)
