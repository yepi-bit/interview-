// 秒转换成day、hour、minutes、seconds
function formatSecond(second, number) {
    const days = Math.floor(second / 86400);
    const hours = Math.floor((second % 86400) / 3600);
    const minutes = Math.floor(((second % 86400) % 3600) / 60);
    const seconds = Math.floor(((second % 86400) % 3600) % 60);
    const forMatDate = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
    return forMatDate;
}

console.log(formatSecond(900));
