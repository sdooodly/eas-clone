document.addEventListener("DOMContentLoaded", function () {
    //const slider = document.getElementById("slider");
    const container = document.querySelector(".container");
    let isMouseDown = false;
    let coloredSquares = [];




    const colorPicker = document.getElementById("color-picker");
    const warmButton = document.querySelector(".warm");
    const coolButton = document.querySelector(".cold");
    const noirButton = document.querySelector(".noir");
    const b_one = document.querySelector(".grid-10 diamond");
    const b_two = document.querySelector(".grid-20");
    const b_three = document.querySelector(".grid-30");

    const warmColors = [
        "#FF5733"

    ];
    const coolColors = [
        "#85C1E9"
       
    ];
    const noirColors = [
        "#424949"
        
    ];


    function getRandomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    warmButton.addEventListener("click", function () {
        const selectedColor = getRandomColor(warmColors);
        colorPicker.value = selectedColor;
        document.body.style.backgroundColor = selectedColor;
    });

    coolButton.addEventListener("click", function () {
        const selectedColor = getRandomColor(coolColors);
        colorPicker.value = selectedColor;
        document.body.style.backgroundColor = selectedColor;
    });

    noirButton.addEventListener("click", function () {
        const selectedColor = getRandomColor(noirColors);
        colorPicker.value = selectedColor;
        document.body.style.backgroundColor = selectedColor;
    });

    colorPicker.addEventListener("change", function () {
        const selectedColor = colorPicker.value;
        document.body.style.backgroundColor = selectedColor;
    });

    b_one.addEventListener("click", function () {
        console.log("here")
        const selectedValue = 10 * 10;
        const squareRoot = 10;
        const squaresPerRow = 10;
        const squaresPerColumn = 10;
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
                square.style.backgroundColor = colorPicker.value;

                isMouseDown = true;
                coloredSquares.push(square);
            });

            square.addEventListener("mousemove", () => {
                if (isMouseDown && !coloredSquares.includes(square)) {

                    square.style.backgroundColor = colorPicker.value;

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

    })

    

});
