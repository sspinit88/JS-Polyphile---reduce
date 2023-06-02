import { initReducePolyphile } from './my-reduce.js';
initReducePolyphile();

/// test 1
const res1 = [1, 2, 3].myReduce((acc, value, index, arr) => {
  // console.log(acc, value, index, arr);
  return acc + value;
});
console.log('res1:', res1);

/// test 2
const res2 = Array.prototype.myReduce.call(
  'test',
  (acc, value, index) => {
    acc[value] = value + 1;
    return acc;
  },
  {}
);
console.log('res2:', res2);

/// test 3
const res3 = [1,2,3,4].myReduce((acc, value, index, arr) => {
  acc.push([value, index, arr]);
  return acc;
}, [])
console.log('res3:', res3);

/// test 4
const res4 = [1, 2, 3, 4].myReduce();