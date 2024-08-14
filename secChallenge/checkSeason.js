// Challenge 6: Season Checker
// Write a function called checkSeason that takes a month as an argument (from 1-12 where 1 is January and 12 is December) 
// and checks which season it is based on meteorological seasons. The function should return "Winter" for December (12), 
// January (1), and February (2), "Spring" for March (3), April (4), and May (5), "Summer" for June (6), July (7), 
// and August (8), and "Autumn" for September (9), October (10), and November (11).
function checkSeason(string){
switch (string) {
    case January = 1:
        return "Winter"
        break;
        case February = 2:
        return "Winter"
        break;
        case March = 3:
        return "Spring"
        break;
        case April = 4:
        return "Spring"
        break;
        case May = 5:
        return "Spring"
        break;
        case June = 6:
        return "Summer"
        break;
        case July = 7:
        return "Summer"
        break;
        case August = 8:
        return "Summer"
        break;
        case September = 9:
        return "Autumn"
        break;
        case October = 10:
        return "Autumn"
        break;
        case November = 11:
        return "Autumn"
        break;
        case December = 12:
        return "Winter"
        break;
}
}
// Usage examples:
console.log(checkSeason(1)); // "Winter"
console.log(checkSeason(4)); // "Spring"
console.log(checkSeason(7)); // "Summer"
console.log(checkSeason(10)); // "Autumn"
