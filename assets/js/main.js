const minutesToHoursConversion = (length) => {
    const minutes = length % 60;
    const hours = Math.floor(length / 60);
    return `${hours}h${string2Digits(minutes)}`;
}
const string2Digits = (number) => {
    return number.toString().padStart(2, '0');
}
