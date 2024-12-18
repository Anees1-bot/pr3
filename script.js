var temp = prompt("Enter temperature in degree celsius");
if (temp <= 0) {
    console.log("Freezing")
} else if (temp > 0 && temp <= 15) {
    console.log("Cold")
} else if (temp >= 15 && temp <= 30) {
    console.log("Warm")
} else if (temp >= 31) {
    console.log("Hot")
}
