export function zeroFill(num, digit) {
    let numStr = num.toString();
    while (numStr.length < digit) {
        numStr = "0" + numStr;
    }
    return numStr;
}

export function getYmdHis() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let i = date.getMinutes();
    let s = date.getSeconds();

    m = zeroFill(m, 2);
    d = zeroFill(d, 2);
    h = zeroFill(h, 2);
    i = zeroFill(i, 2);
    s = zeroFill(s, 2);

    let ymdhis = y + "/" + m + "/" + d + " " + h + ":" + i + ":" + s;
    return ymdhis;
}
