function registrationView() {
    document.getElementById('content').innerHTML = `
    <div id="parent" class="mainDiv">
    <h3>Register</h3>
    <input oninput="firstNamePush(this)" id="nameInput1" type="text" placeholder="First name" />
    <input oninput="lastNamePush(this)" id="nameInput2" type="text" placeholder="Last name" />
    <button onclick="nextPage()" id="registerForward">➡</button>
  </div>
    `;
}