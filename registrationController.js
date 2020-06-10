function registerNextPage() {
    let firstNameValue = document.getElementById("nameInput1").value
    let lastNameValue = document.getElementById("nameInput2").value
    if (firstNameValue.match(/^[A-Za-z ]+$/) && lastNameValue.match(/^[A-Za-z ]+$/)) {
        model.user.firstName = firstNameValue;
        model.user.lastName = lastNameValue;
        model.page = "surveyView";
        updateView();
    } else {
        alert("Please enter letters from the alphabetic alphabet");
    }
};