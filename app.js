//Nested arrays are useful, but so are nested objects. Let’s give Robin a companion to travel with – a furry friend they call “Leo.”
 
    //Add a “companion” sub-object to “Leo” with the following properties:
//The companion’s name is “Frank.”
//The companion’s type is “Flea.”
//The companion has its own belongings, which includes a small hat and sunglasses.

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    }
  };


  for (let i = 0; i < adventurer.companion.companion.belongings.length; i++) {
    console.log(adventurer.companion.companion.belongings[i]);
  }