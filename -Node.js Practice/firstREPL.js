function hehe(){
console.log("What the")
}
// hehe()

// console.log(__filename)
// console.log(__dirname)

let buf = new Buffer("helo")
console.log(buf.write("abcdefg",0, 2))
console.log(buf.toString())
console.log(buf)
console.log(buf[0]);