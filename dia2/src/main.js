import { immutable } from "./immutable"
import { calculadora, sum, sub, mult, div } from "./calculator"

immutable();
console.log('1 + 2 = ', calculadora(sum, 1, 2));

