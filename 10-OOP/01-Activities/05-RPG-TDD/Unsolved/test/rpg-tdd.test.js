const Character = require("../rpg-tdd")

test('creates a character object'), () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  const yogi = new Character("Dhalsim", 20, 65);

  // create a test that checks if the name is a string
  expect(yogi.name).toEqual(expect.any(String))
};//
  //
  // Create a test that checks if the `name` is a `string`
  test('check if name is string'), () => {
    const yogi = new Character("Dhalsim", 20, 65);

    expect(this.name).toBe(expect.any(String));
  };
  //
  // Create a test that checks if the `strength` and `hitpoints` are `numbers`
  test('check if strength and hitpoints are numbers'), () => {
    const yogi = new Character("Dhalsim", 20, 65);


    expect(this.strength).toEqual(expect.any(Number));
    expect(this.hitpoints).toEqual(expect.any(Number));
  }
  //
  // Create a test that checks if the `hitpoints` is greater than the `strength`
  test('if hitpoints are greater than strength'), () => {
    const yogi = new Character("Dhalsim", 20, 65);

  
   expect(yogi.hitpoints).toBeGreaterThan(yogi.strength); 
  }
};

// Bonus: write a test that will check if the character is alive or not
