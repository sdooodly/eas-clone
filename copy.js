
    
const container = document.querySelector(".container");
const colorPicker = document.getElementById("color-picker");
const warmButton = document.querySelector(".warm");
const coolButton = document.querySelector(".cold");
const noirButton = document.getElementsByClassName(".noir");

let isMouseDown = false;
let coloredSquares = [];
const generateRandomColor = (string) => {
    if (string === 'warm') {
      // Generate a warm color
    } else if (string === 'cool') {
      // Generate a cool color
    } else if (string === 'noir') {
      // Generate a random gray color
      const shade = Math.floor(Math.random() * 81) + 10; // 10-90 (light to dark)
      return `rgb(${shade}, ${shade}, ${shade})`;
    } else {
      // Default to black
      return '#000000';
    }
  }
  


  warmButton.addEventListener("click", function () {
    const selectedColor = generateRandomColor('warm');
    colorPicker.value = selectedColor;
    document.body.style.backgroundColor = selectedColor;
  });

  coolButton.addEventListener("click", function () {
    const selectedColor = generateRandomColor('cool');
    colorPicker.value = selectedColor;
    document.body.style.backgroundColor = selectedColor;
  });

  noirButton.addEventListener("click", function () {
    const selectedColor = generateRandomColor('noir');
    colorPicker.value = selectedColor;
    document.body.style.backgroundColor = selectedColor;
  });

  colorPicker.addEventListener("change", function () {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
  });


function createGrid(num) {
    console.log("createGrid() called");
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.innerHTML = '';
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

const gridButtons = document.querySelectorAll('.grid-buttons button');
gridButtons.forEach(button => {
    console.log("gridbutton() called");
  button.addEventListener('click', () => {
    const num = parseInt(button.textContent);
    createGrid(num);
  });
});

console.log("hijhkjkjhj() called");