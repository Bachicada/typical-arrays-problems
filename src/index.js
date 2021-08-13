
exports.min = function min (array) {
  if ((array===undefined)||(array.length===0)){ return 0;}
    const compare = (a, b)=> {
    return a-b;
    }
    array.sort(compare);
    return array[0]
  }

exports.max = function max (array) {
  if ((array===undefined)||(array.length===0)){ return 0;}
    const compare = (a, b)=> {
    return b-a;
    }
    array.sort(compare);
    return array[0]
  }

exports.avg = function avg (array) {
  if ((array===undefined)||(array.length===0)){ return 0;}
    let sum=0;
    for (let i=0;i<array.length;i++) {
                    sum +=array[i];
                        }
     return sum/array.length
     }     
