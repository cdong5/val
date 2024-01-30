function showMessage(response) {
  
  if (response === "No1") {
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("no-button1").remove();
    document.getElementById("yesButton").remove();
    document.getElementById("q1img").remove();
    document.getElementById("name").remove();
  }
}

function showPasswordInput() {
  // Show the password input by changing its display style
  document.getElementById("passwordInputContainer").style.display = "block";
  document.getElementById("name").remove();
  document.getElementById("no-button1").remove();
  document.getElementById("yesButton").remove();
  document.getElementById("q1img").remove();


}

function showHint(){
  document.getElementById("hintMessage").style.display = "block";
}

var incorrectAttempts = 0;
function checkPassword() {
  // Get the value entered in the password input field
  var passwordInput = document.getElementById("password").value;

  // Add your logic to check the password
  // For example, you might want to compare it with a predefined password
  if (passwordInput === "barrie" || passwordInput === "Barrie") {
      showValentineResponse();
  } else {
      incorrectAttempts++;
      displayErrorMessage();
  }
}

function displayErrorMessage() {
  // Display different alert messages based on the number of incorrect attempts
  switch (incorrectAttempts) {
      case 1:
          alert("Are you sure you're my girlfriend?");
          break;
      case 2:
          alert("my becca boo would never get this wrong");
          break;
      case 3:
          alert("i knew she didnt love me :(");
          break;
      default:
          alert("Go away hoe >:(");
          document.getElementById("errorMessage").style.display = "block";
          // document.getElementById("valentineResponse").remove();
          document.getElementById("passwordInputContainer").remove();
          document.getElementById("hintMessage").style.remove();
  }}

  function showValentineResponse() {
    // Show the valentine response
    document.getElementById("valentineResponse").style.display = "block";
    document.getElementById("q2").style.display = "block";
    // Hide the password input and hint message
    document.getElementById("passwordInputContainer").style.display = "none";
    document.getElementById("hintMessage").style.display = "none";
    // document.getElementById("name").remove();
    // document.getElementById("no-button1").remove();
    // document.getElementById("yesButton").style.display = "block";
}

function handleValentineResponse(response) {
    // Handle the user's response (true for 'Yes', false for 'No')
    if (response) {
      document.getElementById("bonk1").remove();
      showCelebration();
    } else {
      console.log("hit")
      moveNoButton();
    }
}

function moveNoButton() {
  const noButton = document.getElementById("noButton");
  
  const container = document.querySelector(".container");
  const maxWidth = window.innerWidth - noButton.offsetWidth;
  const maxHeight = window.innerHeight - noButton.offsetHeight;
  yesButton.style.position = "absolute";

  // Set button position to absolute
  noButton.style.position = "absolute";


  // Change image source to "bonk.gif"
  // document.getElementById("bonk").style.display = "block";

  // Generate random coordinates within the visible container
  const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
  const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

  // Apply new coordinates to the button
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
  console.log(noButton.style.left )

  // document.getElementById("q2").style.display = "none";
  document.getElementById("moveAwayButton").style.display = "block";

}

function showCelebration() {
  // Show the celebration message and image
  document.getElementById("celebration").style.display = "block";
  // document.getElementById("noButton").style.display = "block";
  document.getElementById("yesButton").remove();
  document.getElementById("valentineResponse").remove();
  document.getElementById("q2").remove();
  document.getElementById("moveAwayButton").style.display = "block";

}
var button = document.getElementById('moveAwayButton');

function moveToRandomPosition() {
  // Set the size of the random movement area
  var moveAreaSize = 350;

  // Calculate random coordinates within the specified area
  var maxX = Math.min(window.innerWidth - button.offsetWidth, moveAreaSize);
  var maxY = Math.min(window.innerHeight - button.offsetHeight, moveAreaSize);

  var randomX = Math.floor(Math.random() * (maxX * 2 + 1) - maxX);
  var randomY = Math.floor(Math.random() * (maxY * 2 + 1) - maxY);

  // Move the button to the random position
  button.style.transform = `translate(${randomX}px, ${randomY+150}px)`;
}
