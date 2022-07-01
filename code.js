document.body.onload = loadEtchASketch;

let containerDiv = document.getElementById("containerDiv");

function loadEtchASketch() {
  function addDivByJs(initialNumberOfDivs, holdSquares) {
    for (let i = 0; i < initialNumberOfDivs; i++) {
      let row = createRow();
      holdSquares.appendChild(row);
      for (let j = 0; j < initialNumberOfDivs; j++) {
        let cell = createCell();
        row.appendChild(cell);
      }
      highlightSquares();
    }

    /*
    let cell = document.createElement("div");
      cell.classList.add("small-square");
      holdSquares.appendChild(cell);
      cell.style.border = "1px solid black";
    */
  }

  function createRow() {
    let row = document.createElement("div");
    row.classList.add("row");
    return row;
  }

  function createCell() {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.border = "1px solid black";
    return cell;
  }

  function highlightSquares() {
    console.log("hey is this working");
    let allDivSquares = document.querySelectorAll(".cell");
    allDivSquares.forEach((cell) => {
      cell.addEventListener(
        "mouseenter",
        function changeBackgroundColor(event) {
          event.target.style.backgroundColor = "purple";
        }
      );
    });
  }

  function requestCustomGrid() {
    let btn = document.createElement("button");
    btn.textContent = "Create your own custom grid!";
    let h1 = document.getElementById("game-name");
    h1.appendChild(btn);

    btn.addEventListener("click", makingCustomGrid);
  }

  // Deletes all squares and creates a new container for other squares
  // returns the new container for other squares
  function replaceHoldSquares(containerDiv) {
    console.log(containerDiv);
    let holdSquares = containerDiv.children[0];
    holdSquares.remove();
    console.log("removing holds squares");
    let newHoldSquares = document.createElement("div");
    newHoldSquares.id = "holds-squares";
    containerDiv.appendChild(newHoldSquares);
    return newHoldSquares;
  }

  function makingCustomGrid() {
    let userInput = prompt("How many squares do you want your grid to be?");
    if (userInput > 100) {
      prompt("whoops! Please try again");
    } else {
      const newHoldSquares = replaceHoldSquares(containerDiv);
      addDivByJs(userInput, newHoldSquares);
    }
  }

  let initialNumberOfDivs = 16;
  addDivByJs(initialNumberOfDivs, containerDiv.children[0]);
  requestCustomGrid();
}

let grid = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

// add event listener to each div
// highlight each square div as it is hovered over
