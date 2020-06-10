function registrationView() {
    document.getElementById('content').innerHTML = `
        <div id="parent" class="mainDiv">
        <h3 class="regH3">Register</h3>
        <input id="nameInput" type="text" class="regInput" placeholder="First name"/>
        <input id="nameInput" type="text" class="regInput" placeholder="Last name"/>
        <button class="regButton">➡</button>
        </div>
    `;
}