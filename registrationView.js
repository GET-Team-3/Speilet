function registrationView() {
    document.getElementById('content').innerHTML = `
    <div id="parent" class="mainDiv">
    <h3 class="regH3">Register</h3>
    <input id="nameInput1" type="text" class="regInput" placeholder="First name" oninput="model.user.name=this.value"/>
    <input id="nameInput2" type="text" class="regInput" placeholder="Last name" oninput="model.user.contact=this.value"/>
    <button class="regButton" onclick="registerNextPage()">➡</button>
    </div>
    `;
}

