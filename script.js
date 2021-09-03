// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })

   let form = document.querySelector("form");
   
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         let pilot = document.querySelector("input[name=pilotName]");
         let coPilot = document.querySelector("input[name=copilotName]");
         let fuelLevel= document.querySelector("input[name=fuelLevel]");
         let cargoLevel = document.querySelector("input[name=cargoMass]");
         let list = document.querySelector("#faultyItems");
         formSubmission(document, list, pilot.value, coPilot.value, fuelLevel.value, cargoLevel.value)

            
         });

});