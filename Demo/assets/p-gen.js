(()=>{

    class pGen {

        /**
         * Generate passwords that contains different types of chars .
         * 
         * @param {Boolean} lowercase do the generated password contains lowercase.
         * @param {Boolean} uppercase do the generated password contains uppercase.
         * @param {Boolean} numbers do the generated password contains numbers.
         * @param {Boolean} symbols do the generated password contains symbols.
         * @param {Integer} length the length of the generated password.
         * 
         * @return {String} a string contains the selected with the specific length .
         * */
        generatePassword(lowercase = true, uppercase = true, numbers = true, symbols = true, length = 12){
            // init the generated password
            let generated = ""

            // list of the type of chars selected
            let generatingFunctions = []
        
            // if the lowercase type has been selected 
            if ( lowercase ){
                generatingFunctions.push(this.generateLowercase)
            }  

            // if the uppercase type has been selected 
            if ( uppercase ){
                generatingFunctions.push(this.generateUppercase)
            }  

            // if the numbers type has been selected 
            if ( numbers ){
                generatingFunctions.push(this.generateNumbers)
            }  

            // if the symbols type has been selected 
            if ( symbols ){
                generatingFunctions.push(this.generateSymbols)
            }  

            // if any type of char has been selected
            if(generatingFunctions.length > 0){

                // if only one type of char has been selected
                if(generatingFunctions.length == 1){
                    // generate the full password with that type
                    return generatingFunctions[0](length)
                }else{
                    // which type of chars should start with in the password
                    let type = Math.floor(Math.random() * (generatingFunctions.length - 1))
                    // init i
                    let i = 0
                    while(i < length){

                        // how many chars of each type should add to the password 
                        let nbrChars = Math.floor(Math.random() * 2) 
                        
                        // add chars based on the type and the nbr of chars of that type
                        generated += generatingFunctions[type](nbrChars)

                        // switch between types
                        if(type < (generatingFunctions.length -1) ) 
                            type += 1 
                        else
                            type = 0
                        
                        // count the password length to break the loop when i >= the password's length 
                        i += nbrChars                        
                    }

                    // the final generated password
                    return generated.slice(0, length)
                }
                
            }else{
                // if non of the type chars has been selected
                return null
            }            
        }

        /**
         * Generate words contains only the given chars.
         * 
         * @param {Strgin} chars the only chars to be used.
         * @param {Integer} length the length of the generated word.
         * 
         * @return {String} a string contains only chars with the specific length .
         * */
        generatePasswordWithChars(chars, length = 12){
            if(chars){
                let generated = ""
                let availChars = chars.split('').filter((item, pos, self) => self.indexOf(item) == pos )

                console.log(availChars);
                
                for(let i=0; i<length; i++){
                    generated += availChars[Math.floor(Math.random() * availChars.length)]
                }
                return generated
            }else{
                return null
            }
            
        }
                
        /**
         * Generate words contains only lowercase.
         * 
         * @param {Integer} length the length of the generated word.
         * 
         * @return {String} a string contains only lowercase with the specific length .
         * */
        generateLowercase(length = 1){
            let generated = ""
            for(let i=0; i<length; i++){
                generated += ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"][Math.floor(Math.random() * 26)]
            }
            return generated
        }

        /**
         * Generate words contains only uppercase.
         * 
         * @param {Integer} length the length of the generated word.
         * 
         * @return {String} a string contains only uppercase with the specific length .
         * */
        generateUppercase(length = 1){
            let generated = ""
            for(let i=0; i<length; i++){
                generated += ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"][Math.floor(Math.random() * 26)]
            }
            return generated
        }
        
        /**
         * Generate words contains only numbers.
         * 
         * @param {Integer} length the length of the generated word.
         * 
         * @return {String} a string contains only numbers with the specific length .
         * */
        generateNumbers(length = 1){
            let generated = ""
            for(let i=0; i<length; i++){
                generated += Math.floor(Math.random() * 9).toString()
            }
            return generated
        }
        
        /**
         * Generate words contains only symbols.
         * 
         * @param {Integer} length the length of the generated word.
         * 
         * @return {String} a string contains only symbols with the specific length .
         * */
        generateSymbols(length = 1){
            let generated = ""
            for(let i=0; i<length; i++){
                generated += ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"][Math.floor(Math.random() * 26)]
            }
            return generated
        }
    }

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = pGen;
    else
        window.pGen = pGen;

})();
