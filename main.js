
//Retrieve the div that contains the grid
let grid = document.querySelector(`.grid`);

//The variable that controls the height and width of the grid
let gridSize = 20;


//A for loop that add the individual divs to the grid
for (let i = 0; i < 400; i++) {
    let temp = document.createElement(`div`);
    temp.id = `grid-box`;
    grid.appendChild(temp);   
}

//Adding a style to the grid element that allows it to dynamically change its dimensions
grid.style = `grid-template-columns: repeat(${gridSize}, 1fr);`;


//Retrieving the div elements with the class grod-box and setting a event listener for mouse enter
//that add a class to the grid element chaning its background color
let gridBoxes = document.querySelectorAll("#grid-box").forEach(box => {
    box.addEventListener("mouseenter", () => {box.classList.add("blue")});
});



