# p-gen

A customizable javascript password generator.

# How to use

## In the browser

### Insert the p-gen.js file in the html

Download the p-gen.js file from [HERE](https://raw.githubusercontent.com/AM-77/p-gen/master/p-gen.js) 

```html
<script src="./p-gen.js"></script>
```

**or**

Insert it directly from gtihub

```html
<script defer src="https://raw.githubusercontent.com/AM-77/p-gen/master/p-gen.js"></script>
```


### Use it

```javascript
// create an instance of pGen Class
let pgen = new pGen()

// use the instance to access the pGen methods
let password = pgen.generatePassword(true, true, true, true, 12)
```

## In node

### Install the p-gen module

```bash
npm i p-gen
```

**or**

```bash
yarn add p-gen
```

###  Use it

```javascript
const pGen = require("p-gen")
let pgen = new pGen()

let password = pgen.generatePassword(true, true, true, true, 12)
```

## Available Methods

- `generatePassword(lowercase:optional = true, uppercase:optional = true, numbers:optional = true, symbols:optional = true, length:optional = 12)`
    - lowercase : set it to `true` if the password should contains lowercase or `false` otherwise, `true` by default.
    - uppercase : set it to `true` if the password should contains uppercase or `false` otherwise, `true` by default.
    - numbers : set it to `true` if the password should contains numbers or `false` otherwise, `true` by default.
    - symbols : set it to `true` if the password should contains symbols or `false` otherwise, `true` by default.
    - length : the length of the password equals 12 by default 
    
- `generatePasswordWithChars(chars, length:optional = 12)`
    - chars : a string of the characters that must be used to generate the password.
    - length : the length of the password equals 12 by default 

- `generateLowercase(length)`
- `generateUppercase(length)`
- `generateNumbers(length)`
- `generateSymbols(length)`


## Demo

You can check the live demo here : [pGen Demo](https://demo.medamine.now.sh)

## Contribution

Feel free to raise an [issue](https://github.com/AM-77/p-gen/issues) or submit a [pull request](https://github.com/AM-77/p-gen/pulls).

## Copyright and license

Code copyright 2019 AM-77. Code released under [the MIT license](https://github.com/AM-77/p-gen/blob/master/LICENSE).