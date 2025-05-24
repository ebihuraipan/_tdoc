export function zero_fill(num, max) {
    let num_str = num.toString();
    while (num_str.length < max) {
        num_str = "0" + num_str;
    }
    return num_str;
}
export function convert_yyyymmdd(a) {
    let date = new Date();
    if (a.toString().match(/^\d+$/)) {
        date.setTime(a);
        let year = date.getFullYear();
        let month = zero_fill(date.getMonth() + 1, 2);
        let day = zero_fill(date.getDay(), 2);
        //let hour = zero_fill(date.getHours(), 2);
        //let minute = zero_fill(date.getMinutes(), 2);
        //let second = zero_fill(date.getSeconds(), 2);
        let date1 = year + "/" + month + "/" + day;
        //let date2 = " ";
        //let date3 = hour + ":" + minute + ":" + second;
        return date1; // + date2 + date3;
    } else if (a.toString().match(/^(\d+)\-(\d+)-(\d+)$/)) {
        let date1 = a
            .toString()
            .replace(/^(\d+)\-(\d+)-(\d+)$/, (a, b1, b2, b3) => {
                let year = b1;
                let month = zero_fill(b2, 2);
                let day = zero_fill(b3, 2);
                return year + "/" + month + "/" + day;
            });
        return date1; // + date2 + date3;
    }
}
