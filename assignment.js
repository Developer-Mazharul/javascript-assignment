// https://github.com/Developer-Mazharul/javascript-assignment


// kilometerToMeter Start
function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer < 0) {}
    else {
        meter = kilometer + 10;
    }
    return meter;
}
var result = kilometerToMeter(2);
console.log(result);
// KilometerToMeter End


// budgetCalculator Start
function budgetCalculator(watch,phone,laptop) {
    var allprice = 0;
    if (watch < 0) {}
    else if (phone < 0) {}
    else if (laptop < 0) {}
    else {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        allprice = watch + phone + laptop;
    }
    return allprice;
}
var result = budgetCalculator(30,20,10);
console.log(result);
// budgetCalculator End


// hotelCost Start

//hotelCost End


// megaFriend Start
var names = ['Bashar', 'Habib', 'Somrat', 'Sabbir', 'Naim'];
function megaFrind(friendsName) {
    var biggestName = friendsName [0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName [i];
        var highLength = element.length;
        if (biggestName.length < highLength) {
            biggestName = element
        }
    }
    return biggestName;
}
var result = megaFrind(names);
console.log(result);
// megaFriend End
