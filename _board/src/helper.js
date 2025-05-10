export function zeroFill(num, digit) {
    let numStr = num.toString();
    while (numStr.length < digit) {
        numStr = "0" + numStr;
    }
    return numStr;
}
