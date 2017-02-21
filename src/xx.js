import {Map,List,fromJS} from 'immutable';

var map = Map({
        entries: List.of('Trainspotting', '28 Days Later')
      });
console.log(map);
var data = fromJS({ a: { b: { c: 10 } } });
console.log(data);
data = data.updateIn([ 'a','b','c'], val => val * 2);
console.log(data);