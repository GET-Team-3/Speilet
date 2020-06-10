function registerNextPage() {
    let firstNameValue = document.getElementById("nameInput1").value
    let lastNameValue = document.getElementById("nameInput2").value
    let letters = /^[A-Za-z ]+$/;
    if (firstNameValue.match(letters) && lastNameValue.match(letters)) {
    model.user.firstName = firstNameValue;
    model.user.lastName = lastNameValue;
    model.page = "surveyView";
    updateView();
    } else {
        alert("Please enter letters from the alphabetic alphabet");
    }
};