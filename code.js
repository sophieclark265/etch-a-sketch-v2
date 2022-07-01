document.body.onload = loadEtchASketch;

let containerDiv = document.getElementById("containerDiv");

function loadEtchASketch() {
  function addDivByJs(initialNumberOfDivs, holdSquares) {
    console.log("addDivByJs func just got called");
    console.log(containerDiv.innerHTML);

    let numberOfDivsToBeCreated = initialNumberOfDivs * initialNumberOfDivs;
    let childDiv = document.createDocumentFragment;

    for (let i = 0; i < numberOfDivsToBeCreated; i++) {
      let cell = document.createElement("div");
      cell.classList.add("small-square");
      holdSquares.appendChild(cell);
      cell.style.border = "1px solid black";
    }
  }

  function highlightSquares() {
    console.log("hey is this working");
    let allDivSquares = document.querySelectorAll(".small-square");
    allDivSquares.forEach((square) => {
      square.addEventListener(
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
  function replaceSquares(containerDiv) {
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
    let holdSquares = containerDiv.children[0];
    if (userInput > 100) {
      prompt("whoops! Please try again");
    } else {
      const newHoldSquares = replaceSquares(containerDiv);
      addDivByJs(userInput, newHoldSquares);
    }
  }

  let initialNumberOfDivs = 16;
  addDivByJs(initialNumberOfDivs, containerDiv.children[0]);
  highlightSquares();
  requestCustomGrid();
}

// add event listener to each div
// highlight each square div as it is hovered over
