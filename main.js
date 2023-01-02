
//Retrieve the div that contains the grid
let grid = document.querySelector(`.grid`);


//Retrieve the that controls the grid size from the HTML
//Add an event listener to the button that prompts the user to enter
//a new grid size, With a limit of 100
document.getElementById('sizeButton').addEventListener("click", () => {
    let newSize = prompt("Enter a new grid size, Max size allowed: 100");
    newSize <= 100 ? generateGrid(newSize) : generateGrid(100);
    console.log(newSize);
});


//A function that generates a new grid using the provided size
const generateGrid = (gridSize) => {

    clearGrid();
  //A for loop that add the individual divs to the grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    let temp = document.createElement(`div`);
    temp.id = `grid-box`;
    grid.appendChild(temp);
  }

  //Adding a style to the grid element that allows it to dynamically change its dimensions
  grid.style = `grid-template-columns: repeat(${gridSize}, 1fr);`;

  //Retrieving the div elements with the class grod-box and setting a event listener for mouse enter
  //that add a class to the grid element chaning its background color
  let gridBoxes = document.querySelectorAll("#grid-box").forEach((box) => {
    box.addEventListener("mouseenter", () => {
        if(box.style.background == ''){
            box.style.background = randomRgbaString(1);
        } 
    });
  });
};


//A function that clears the grid element of all its children
const clearGrid = () => {
  grid.replaceChildren();
}

//Function that generates a random HSLA color
function randomRgbaString(alpha) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = alpha;
  return `rgba(${r},${g},${b},${a})`;
}