// https://github.com/Tanveer87/Assignment3-PH-



//--> PROBLEM 1
function kilometerToMeter(kilometer){
    if(kilometer>=0){
        var meter = kilometer*1000;
        return meter; 
    }
    else{
        console.log("distance can't be negative");
    }
}
var result = kilometerToMeter(5);
console.log(result);


//--> PROBLEM 2
function budgetCalculator(noOfWatch,noOfMobile,noOfLaptop){
    if (noOfWatch>=0 &&  (noOfMobile>=0 && noOfLaptop>=0)) {
        var watchPrice = noOfWatch*50;
        var mobilePrice = noOfMobile*100;
        var laptopPrice = noOfLaptop*500;
        var totalPrice = watchPrice+mobilePrice+laptopPrice;

        return totalPrice;
    }
    else {
        console.log("Input can,t be negative,Please enter valid input");
    }
}
var result = budgetCalculator(2,2,5);
console.log(result);


//--> PROBLEM 3
function hotelCost(day){
    var totalCost = 0;
    if (day>0) {
        if(day<=10){
            totalCost = day*100;
        }
        else if(day<=20){
            var first10Days = 10*100;
            var remaining = day-10;
            var second10Days = remaining*80;
            totalCost = first10Days+second10Days;
        }
        else{
            var first10Days = 10*100;
            var second10Days = 10*80;
            var remaining = day -20;
            var moreThan20days = remaining*50;
            var totalCost = first10Days+second10Days+moreThan20days;
        }
        return totalCost;
    } else {
        console.log("Please enter a valid input");
    }   
}
var result = hotelCost(21);
console.log(result);


//--> PROBLEM 4
function megaFriend(friends){
    var length=0;
    var maxLengthName = 0;
    if (friends && friends.length) {
        for (var i = 0; i<friends.length; i++){
            if(friends[i].length > length){
            var length = friends[i].length;
            var maxLengthName = friends[i];
            }
        }
        return maxLengthName;
    }
    else{
        console.log("!!!Array is empty,Please put input in  your array");
    }   
}
var friends = ['Kamal','tanveer','rima','jamal','kuddos'];
var result = megaFriend(friends);
console.log(result);