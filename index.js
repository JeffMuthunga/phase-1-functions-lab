// Code your solution in this file!
const distanceFromHqInBlocks = (pickupLocation) => Math.abs(pickupLocation-42)


const distanceFromHqInFeet = (destination) => Math.abs(destination-42) * 264
 
const distanceTravelledInFeet = (start =42, destination) => Math.abs(destination- start) * 264

function calculatesFarePrice(start, destination) {
    const distanceTravelledInFeet = Math.abs(destination- start) * 264
    if (distanceTravelledInFeet <= 400){        
        return 0
    }
    else if (distanceTravelledInFeet > 2500){
        return 'cannot travel that far'

    }
    else if (distanceTravelledInFeet <= 2000){
        return ((distanceTravelledInFeet - 400) * 2)/100
    }
    else {
        return 25
    }

}