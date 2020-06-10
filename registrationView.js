function registrationView() {
    document.getElementById('content').innerHTML = `
    <div id="parent" class="mainDiv">
    <h3>Register</h3>
    <input id="nameInput1" type="text" placeholder="First name" />
    <input id="nameInput2" type="text" placeholder="Last name" />
    <button onclick="registerNextPage()" id="registerForward">➡</button>
  </div>
    `;
}