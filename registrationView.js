function registrationView() {
    document.getElementById('content').innerHTML = `
        <div id="parent" class="regMainDiv">
        <h3 class="regH3">Register</h3>
        <input class="regInputs" id="nameInput1" type="text" placeholder="First name" />
        <input class="regInputs" id="nameInput2" type="text" placeholder="Last name" />
        <button class="regButton" onclick="registerNextPage()" id="registerForward">➡</button>
        </div>
    `;
}

