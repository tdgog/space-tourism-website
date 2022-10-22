export function intAs2Char(number) {
    let string = number.toString();
    if(string.length === 1) string = '0' + string;
    return string;
}
