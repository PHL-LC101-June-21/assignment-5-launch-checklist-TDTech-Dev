// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
        <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}>
        `;
}

function validateInput(testInput) {
   if (testInput === "") {
        return "Empty"
   } else if (isNaN(testInput)) {
        return "Not a Number"
   } else {
        return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotData = validateInput(pilot);
    let copilotData = validateInput(copilot);
    let fuelLevelData = validateInput(fuelLevel);
    let cargoLevelData = validateInput(cargoLevel);

    if (pilotData === 'Empty' || copilotData === 'Empty'
    ||  fuelLevelData === 'Empty' || cargoLevelData === 'Empty'
    ){
        window.alert("All fields are required")
    }
    else if (cargoLevelData === "Not a Number" || fuelLevelData === "Not a Number") {
        window.alert("Must enter a valid input")
    }
    
    list.style.visibility = 'hidden';
    list.style.visibility = "visible";
    
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is Ready for Launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is Ready for Launch`;


    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel Level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";

    if (cargoLevel > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo Level too High for Launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not Ready for Launch";
        document.getElementById("launchStatus").style.color = "rbg(156, 28, 37)";
    }  
    
    if (fuelLevel > 10000 && cargoLevelData < 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo Level Low enough for Launch"
        document.getElementById("fuelStatus").innerHTML = "Fuel Level High enough for Launch"
        document.getElementById("launchStatus").style.color = "rgb(74, 117, 49)";
    }
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    let planet = planets[index];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
