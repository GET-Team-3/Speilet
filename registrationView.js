function registrationView() {
    document.getElementById('content').innerHTML = `
        <div id="parent" class="mainDiv">
        <h3 class="regH3">Register</h3>
        <input id="nameInput" type="text" class="regInput" placeholder="First name" oninput="model.user.name=this.value"/>
        <input id="nameInput" type="text" class="regInput" placeholder="Last name" oninput="model.user.contact=this.value"/>
        <button class="regButton">➡</button>
        </div>
    `;
}