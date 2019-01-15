const hamburger = {
  name: 'Hamburger',
  type: 'beef',
  cooked: false,
}
const zucchini = {
  name: 'Zucchini',
  type: 'vegetable',
  cooked: false,
}
const chickenBreast = {
  name: 'Chicken Breast',
  type: 'chicken',
  cooked: false,
}
const corn = {
  name: 'Corn',
  type: 'vegetable',
  cooked: false,
}
const steak = {
  name: 'Steak',
  type: 'beef',
  cooked: false,
}

const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];


function grill(currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;
  // Put the cooked food into the appropriate array

  cookedFood.push(currentObject);
};
for (let i = 0; i < uncookedFood.length; i++) {
  grill(uncookedFood[i])

}
console.log(cookedFood)