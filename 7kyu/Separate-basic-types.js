// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

function separateTypes(input) {
  result = {};
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === 'string') {
        if (result.string) {
            result.string.push(input[i]) 
        } else {
            result.string = [input[i]]
        }
    }
    if (typeof input[i] === 'number') {
        if (result.number) {
            result.number.push(input[i]) 
        } else {
            result.number = [input[i]]
        }
    }
    if (typeof input[i] === 'boolean') {
        if (result.boolean) {
            result.boolean.push(input[i]) 
        } else {
            result.boolean = [input[i]]
        }
    }
  }
  return result;
}

function separateTypes2(input) {
    return input.reduce((types, value) => {
      const valueType = typeof value
      const type = types[valueType]
      types[valueType] = type ? [...type, value] : [value]
      return types
    }, {})
  }

console.log(separateTypes(['a', 1, 2, false, 'b']));
console.log(separateTypes(['a', 1, 2 ]));
console.log(separateTypes2(['a', 1, 2, false, 'b']));
console.log(separateTypes2(['a', 1, 2 ]));
