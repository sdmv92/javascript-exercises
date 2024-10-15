const removeFromArray = function(array,...toRemove) {
  for(index=0;index<array.length;index++){
    for(toRemoveIndex=0;toRemoveIndex<toRemove.length;toRemoveIndex++){
      while(array[index]===toRemove[toRemoveIndex]){
      array.splice(index,1);
      if(array.splice){
        toRemoveIndex=0;
      }
    }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
