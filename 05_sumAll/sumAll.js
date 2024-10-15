const sumAll = function(start,end) {
    let counted=0;
    if(Number.isInteger(start) || Number.isInteger(end)){
        return 'ERROR';
    }
    else if(start<0 || end<0){
        return 'ERROR';
    }else if(start<end){
      for(i=start;i<=end;i++){
        counted=counted+i;
    }  
    }else if(start>end){
        for(i=start;i>=end;i--){
            counted=counted+i;
        } 
    }
    return counted;
};

// Do not edit below this line
module.exports = sumAll;
