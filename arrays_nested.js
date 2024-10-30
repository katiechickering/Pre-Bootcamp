// Construct an algorithm that takes an array of coordinates
// and returns an optimal taco truck location

function tacotruck(arr) {
    var sumx = 0;
    var sumy = 0;
    for (var i = 0; i < arr.length; i++) {
        // add every x coordinate and y coordinate
        sumx += arr[i][0];
        sumy += arr[i][1];
    }
    // find the average x coordinate and y coordinate
    avgx = Math.round(sumx / arr.length);
    avgy = Math.round(sumy / arr.length);
    truck_location = [avgx, avgy]
    // return the average coordinates
    return truck_location;
}

// test with multiple examples
var customer_locations1 = [[0, 3], [27, 42], [-91, 17], [44, -2], [-79, -62]];
var customer_locations2 = [[17, 59], [-43, 69], [20, -60], [1, 0]];
var truck_location = tacotruck(customer_locations2);
// log results
console.log(truck_location);