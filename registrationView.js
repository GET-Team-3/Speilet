function registrationView() {
    document.getElementById('content').innerHTML = `
        <div id="parent" class="regMainDiv">
        <h3 class="regH3">Register</h3>
        <input class="regInputs" id="nameInput1" type="text" placeholder="First name" />
        <input class="regInputs" id="nameInput2" type="text" placeholder="Last name" />
        <label for="session">Choose session:</label>
        <select id="session" name="session">
          <option value="session01">Session-01</option>
          <option value="session02">Session-02</option>
          <option value="session03">Session-03</option>
        </select>
        <button class="regButton" onclick="registerNextPage()" id="registerForward">➡</button>
        </div>
    `;
}