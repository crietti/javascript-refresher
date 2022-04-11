console.log(bobTalk("Hi my name is crissy"));

function bobTalk(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        //str[i]
        if (vowels.indexOf(str[i]) > -1) { // found a vowel
            newStr = str + "op";
            // console.log(i);
            // console.log(newStr);
            //return newStr;
        } else { // did not find a vowel
            newStr = str.substring(vowels) + str.substring(0, vowels) + "op";
            //return newStr;
        }
    }
}

// newStr -> "" -> "hop i mop yop nop..."
console.log(newStr)
return newStr;