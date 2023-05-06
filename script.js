document.addEventListener("DOMContentLoaded", function () {
    
const container = document.querySelector(".container");
const colorPicker = document.getElementById("color-picker");
const warmButton = document.getElementsByClassName("warm");
const coolButton = document.getElementsByClassName("cold");
const noirButton = document.getElementsByClassName("noir");

let isMouseDown = false;
let coloredSquares = [];

const generateRandomColor = (string) => {
    const hue = string === 'warm'
      ? Math.floor(Math.random() * 41) + 10 // 10-50 (red to orange)
      : string === 'cool'
        ? Math.floor(Math.random() * 121) + 200 // 200-320 (blue to green)
        : Math.floor(Math.random() * 361); // 0-360 (all hues)
    const saturation = Math.floor(Math.random() * 31) + 70; // 70-100
    const lightness = Math.floor(Math.random() * 31) + 50; // 50-80
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
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

 //refer eas code


  slider.addEventListener("input", function () {
    const selectedValue = slider.value * slider.value;
    const squareRoot = Math.sqrt(selectedValue);
    const squaresPerRow = Math.floor(squareRoot);
    const squaresPerColumn = Math.ceil(squareRoot);

    // Clear the container before adding new squares
    container.innerHTML = "";
    coloredSquares = [];

    // Calculate the size of each square
    const squareWidth = 500 / squaresPerRow;
    const squareHeight = 500 / squaresPerColumn;

    // Add new squares to the container
    for (let i = 0; i < selectedValue; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareHeight}px`;
      container.appendChild(square);

      // Add event listeners to each square
      square.addEventListener("mousedown", () => {
        if (!document.getElementById("hover-checkbox").checked) {
          square.style.backgroundColor = colorPicker.value;
        }
        isMouseDown = true;
        coloredSquares.push(square);
      });

      square.addEventListener("mousemove", () => {
        if (isMouseDown && !coloredSquares.includes(square)) {
          if (document.getElementById("hover-checkbox").checked) {
            square.style.backgroundColor = colorPicker.value;
          }
          coloredSquares.push(square);
        }
      });

      square.addEventListener("mouseup", () => {
        isMouseDown = false;
      });

      square.addEventListener("mouseleave", () => {
        isMouseDown = false;
      });
    }
  });
});
