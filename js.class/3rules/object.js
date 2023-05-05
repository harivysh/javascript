let user = {}
let emp = { id: 101, name: "Rahul", sal: 445000, loc: "Wayanad" }
/* 
let props = Object.keys(emp)
console.log(props.length) */
/*if (Object.keys(emp).length > 0) {
    console.log("Not Empty")
}
else {
    console.log("Empty")
}*/

Object.keys(emp).length > 0 ? console.log( " not empty Object") : console.log ( " an empty")