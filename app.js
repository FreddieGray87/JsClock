//JS Date Object Prac.

// let monNames = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
// let rightNow = new Date();
// let theMonth = rightNow.getMonth();
// let month = monNames[theMonth];
// console.log(month);

// let year = new Date();
// let currentYear = year.getFullYear();

// console.log(currentYear);

// let today = new Date();
// let doomsDay = new Date('June 30, 2035');

// let msToday = today.getTime();
// let msDoomsday = doomsDay.getTime();

// let msDiff = msDoomsday - msToday;
// let dDiff = msDiff / (1000 * 60 * 60 * 24);
// let daysTill = Math.floor(dDiff);

// console.log(daysTill);

// let years = daysTill / 365;

// console.log(Math.floor(years));

function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById('clock').textContent = `${hour}:${min}:${sec}`;
    let t = setTimeout(function () {
        currentTime();
    }, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return '0' + k;
    } else {
        return k;
    }

}

currentTime();