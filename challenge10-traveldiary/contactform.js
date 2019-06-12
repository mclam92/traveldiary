var messageInput = document.getElementById("message-input");
messageInput.addEventListener("input", updateOutput);

function updateOutput(event) {
  // Locate the element with id = message output
  var output = document.getElementById("message-output");
  // update element text with messageInput.value
  output.textContent = event.target.value;
}

var nameInput = document.getElementById("name-input");
nameInput.addEventListener("input", updateNameOutput);

function updateNameOutput(event) {
  var nameOutput = document.getElementById("name-output");
  nameOutput.textContent = event.target.value;
}

var emailInput = document.getElementById("email-input");
emailInput.addEventListener("input", updateEmailOutput);

function updateEmailOutput(event) {
  var emailOutput = document.getElementById("email-output");
  emailOutput.textContent = event.target.value;
}
