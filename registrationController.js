function registerNextPage() {
    let firstNameValue = document.getElementById("nameInput1").value;
    let lastNameValue = document.getElementById("nameInput2").value;
    if (firstNameValue.match(/^[A-Za-z ]+$/) && lastNameValue.match(/^[A-Za-z ]+$/)) {
        model.user.firstName = firstNameValue.charAt(0).toUpperCase() + firstNameValue.slice(1).toLocaleLowerCase();
        model.user.lastName = lastNameValue.charAt(0).toUpperCase() + lastNameValue.slice(1).toLocaleLowerCase();
        model.session = document.getElementById('session').value
        model.page = "surveyView";
        model.user.date = new Date().toISOString().substr(0, 10);
        updateView();
    } else {
        alert("Bruk bare bokstaver fra alfabetet");
    }
    };