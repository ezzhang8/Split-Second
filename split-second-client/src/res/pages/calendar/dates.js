const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const shortenedMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function isLeapYear(year) {
    if (year % 100 == 0 && year % 400 != 0) {
        return false;
    }
    else if (year % 4) {
        return true
    }

    return false;
}

function daysInMonth(num, year) {
    if (num == 1) {
        return isLeapYear(year) ? 29 : 28;
    }
    else if (num == 3 || num == 5 || num == 8 || num == 10) {
        return 30;
    }
    else {
        return 31;
    }
}

export {
    months,
    shortenedMonths,
    daysInMonth
}