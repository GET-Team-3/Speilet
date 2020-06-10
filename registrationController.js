function firstNamePush(firstName) {
    model.user.firstName = firstName;
}
function lastNamePush(lastName) {
    model.user.lastName = lastName;
}
function nextPage() {
    model.page = "surveyView"
    updateView();
}