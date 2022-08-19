const luhn10 = (cardNumber) => {

    //this cunk of code to check if result of multypalying is more han 9 then will spreate that number and add them
    const resultIsTowFiled = (number) => {        
        let sum = 0
        if (number.length > 1) {
            sum = Number(number[0]) + Number(number[1])
        } else
            sum = Number(number)
        return sum
    }

//this chunk of code to convert number to array and start multypliy to 2 or 1 depend on the position
    const CardNumberArray = Array.from(cardNumber, Number)
    if(16>CardNumberArray>19)
    return false
    const mulitArray = [];
    CardNumberArray.forEach((ele, index) => {
        if (index % 2 == 0) {
            const temp = ele * 2
            mulitArray.push(resultIsTowFiled(temp.toString()))

        } else {
            const temp = ele * 1
            mulitArray.push(resultIsTowFiled(temp.toString()))
        }
    })
   
 //this chunk of code to sum the final array and check if the the last filed of the number is zero will return true other than that will return false   
    const finalSum = mulitArray.reduce((accumulator, curr) => accumulator + curr);
    if (finalSum > 0) {
        const result = finalSum.toString();
        return (Number(result[result.length - 1]) == 0)
    } else
        return false


}
module.exports = luhn10;