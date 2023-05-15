function outer() {
    console.log("sun")
    function inner() {
        console.log("earth")
    }
    inner()
}
outer()