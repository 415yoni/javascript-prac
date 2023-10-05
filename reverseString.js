const reverseString = function(word) {
    let stack = [];

    for(let i=0;i<word.length;i++){
        stack.push(word.charAt(i));
    }
    let newword=""; 
    let i=0
    while(stack.length !=0){
        newword+= stack.pop()
        
    }
    return newword;
};

// Do not edit below this line
module.exports = reverseString;
