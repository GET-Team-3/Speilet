function registerNextPage() {
    let firstNameValue = document.getElementById("nameInput1").value;
    let lastNameValue = document.getElementById("nameInput2").value;
    if (firstNameValue.match(/^[A-Za-z ]+$/) && lastNameValue.match(/^[A-Za-z ]+$/)) {
        db.collection('user').add({
            firstName: firstNameValue.charAt(0).toUpperCase() + firstNameValue.slice(1).toLocaleLowerCase(),
            lastName: lastNameValue.charAt(0).toUpperCase() + lastNameValue.slice(1).toLocaleLowerCase(),
            date: new Date().toISOString().substr(0, 10),
            answer: [],
            note: [],
        })
        .then((outline) => {
            db.collection('user').doc(outline.id).get().then(doc => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    model.page = "surveyView";
                    updateView();
                } else {
                    console.log("No such document!");
                }
            })
        })
    } else {
        alert("Please enter letters from the alphabetic alphabet");
    }
};