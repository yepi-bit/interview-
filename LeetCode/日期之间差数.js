
var daysBetweenDates = function(date1, date2) {
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    return Math.abs(date1-date2) / 1000/ 60 /60 / 24   // 时间戳
};
var days = daysBetweenDates("2003-04-09","2021-06-19")
console.log(days);
