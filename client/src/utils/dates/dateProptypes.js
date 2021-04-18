Date.prototype.getWeekOfMonth = function (exact) {
    var month = this.getMonth()
        , year = this.getFullYear()
        , firstWeekday = new Date(year, month, 1).getDay()
        , lastDateOfMonth = new Date(year, month + 1, 0).getDate()
        , offsetDate = this.getDate() + firstWeekday - 1
        , index = 0 // start index at 0 or 1, your choice
        , weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7)
        , week = index + Math.floor(offsetDate / 7)
        ;
    if (exact || week < 2 + index) return week;
    return week === weeksInMonth ? index + 5 : week;
};

Date.prototype.toYYMMdd = function() {
    let month = '' + (this.getMonth() + 1);
    let day = '' + this.getDate();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [this.getFullYear(), month, day].join('-');
}