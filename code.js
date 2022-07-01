document.body.onload = loadEtchASketch;

let containerDiv = document.getElementById("containerDiv");

function loadEtchASketch() {
  function addDivByJs(initialNumberOfDivs) {
    console.log("addDivByJs func just got called");
    let numberOfDivsToBeCreated = initialNumberOfDivs * initialNumberOfDivs;
    let childDiv = document.createDocumentFragment;
    for (let i = 0; i < numberOfDivsToBeCreated; i++) {
      let cell = document.createElement("div");
      cell.classList.add("small-square");

      containerDiv.appendChild(cell);
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

  function makingCustomGrid() {
    let userInput = prompt("How many squares do you want your grid to be?");
    if (userInput > 100) {
      prompt("whoops! Please try again");
    } else {
      containerDiv.remove();
      console.log("removing container div");
      addDivByJs(userInput);
    }
  }

  let initialNumberOfDivs = 16;
  addDivByJs(initialNumberOfDivs);
  highlightSquares();
  requestCustomGrid();
}

// add event listener to each div
// highlight each square div as it is hovered over
