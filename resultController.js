function median() {
    var length = model.user.answer.length;
    var sum = model.user.answer.reduce(function(a, b){return a + b;});
    
    return (sum/length); 
}
    

