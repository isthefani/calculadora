document.addEventListener("keyup", function(event) {
    if (event.key === "c") {
        document.calc.txt.value =' '
    } if (event.key === "/") {
        document.calc.txt.value +='/'
    } if (event.key === "*") {
        document.calc.txt.value +='*'
    } if (event.key === "7") {
        document.calc.txt.value +='7'
    } if (event.key === "8") {
        document.calc.txt.value +='8'
    } if (event.key === "9") {
        document.calc.txt.value +='9'
    } if (event.key === "-") {
        document.calc.txt.value +='-'
    } if (event.key === "4") {
        document.calc.txt.value +='4'
    } if (event.key === "5") {
        document.calc.txt.value +='5'
    } if (event.key === "6") {
        document.calc.txt.value +='6'
    } if (event.key === "+") {
        document.calc.txt.value +='+'
    } if (event.key === "1") {
        document.calc.txt.value +='1'
    } if (event.key === "2") {
        document.calc.txt.value +='2'
    } if (event.key === "3") {
        document.calc.txt.value +='3'
    } if (event.key === "0") {
        document.calc.txt.value +='0'
    } if (event.key === "00") {
        document.calc.txt.value +='00'
    } if (event.key === ".") {
        document.calc.txt.value +='.'
    } if (event.key === "=") {
        document.calc.txt.value = eval(calc.txt.value)
    } if (event.key === "Enter") {
        document.calc.txt.value = eval(calc.txt.value)
    }
})