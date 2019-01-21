let showSecret = false;
updateSecretParagraph();
// create a function to hide the secret paragraph
secretBTN.addEventListener("click", function() {
  showSecret = !showSecret;
  updateSecretParagraph();
  showSecretBtn();
});
function updateSecretParagraph() {
  if (showSecret) {
    secretParagraph.style.display = "block";
  } else {
    secretParagraph.style.display = "none";
  }
}
// create a function to update the button from 'show the secret' to 'hide the secret'
function updateSecretBtn() {
  if (showSecret) {
    secretBTN.innertext = "Hide the secret";
  } else {
    secretBTN.innertext = "show the secret";
  }
}
