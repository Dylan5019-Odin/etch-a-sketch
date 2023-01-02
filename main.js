let grid = document.querySelector(`.grid`);

for (let i = 0; i < 500; i++) {
    let temp = document.createElement(`div`);
    temp.id = `grid-box`;
    grid.appendChild(temp);   
}



let gridBoxes = document.querySelectorAll("#grid-box").forEach(box => {
    box.addEventListener("mouseenter", () => {box.classList.add("blue")});
});

console.log(gridBoxes);

