const repeatString = function(string,num) {
    let counter=0;
    let word="";
    while(counter<num){
        word += string;
        counter++;
    }
    if(string==''){
      return '';
    }else {
      return word;
    }
    
  };
// Do not edit below this line
module.exports = repeatString;
