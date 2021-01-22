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
function hotelCost(hotelDayNight) {
    var cost = 0;
    if(hotelDayNight <= 10) {
        var first = hotelDayNight * 100;
    }
    else if (hotelDayNight <= 20) {
        var first = 10 * 100;
        var remainCount = hotelDayNight - 10;
        var second = remainCount * 80;
        cost = first + second;
    }
    else {
        var first = 10 * 100;
        var second = 10 * 80;
        var remainCount = hotelDayNight - 20;
        var third = remainCount * 50;
        cost = first + second + third;
    }
    return cost;
}
var result = hotelCost(50);
console.log(result);
//hotelCost End


// megaFriend Start
var friendsName = ['William', 'Steaven', 'Pikasho', 'Davidson', 'Human'];
function megaFrind(allName) {
    var biggestName = allName [0];
    for (var i = 0; i < allName.length; i++) {
        var element = allName [i];
        var highLength = element.length;
        if (biggestName.length < highLength) {
            biggestName = element
        }
    }
    return biggestName;
}
var result = megaFrind(friendsName);
console.log(result);
// megaFriend End
