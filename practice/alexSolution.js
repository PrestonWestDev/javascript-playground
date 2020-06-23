function add(input, banned) {
const countObj = input.replace(/^[.!?'":;,.]$/, "")
.split(" ")
.filter(word => !banned.includes(word))
.reduce((accum, word) => {
    if (Object.keys(accum).includes(word)) {
    accum[word]++
    }
    else {
    accum[word] = 1 
    }
return accum
},{})

const result = Object.keys(countObj).sort((a,b) => countObj[a]-countObj[b])
return result[result.length-1];
}

console.log(add("at at at at be be be too too ole gin"), ["at", "be"]);
