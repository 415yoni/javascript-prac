const sumAll = function(num1,num2) {
    let newSum=0;
    if(num1<num2){
    for(let i=num1;i<=num2;i++){
        newSum+=i;

    }
    
}
    else{
        for(let i=num2;i<=num1;i++){
            numSem+=i;
        }
    }
    return newSum;
};
