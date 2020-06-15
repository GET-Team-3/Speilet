function speilView() {
    document.getElementById('content').innerHTML = `
    <div class="page">
            <p onclick="tempBackwardButton()" class="bV" style="${model.counter == 0 ? 'color:lightgray;cursor: not-allowed;' : ''}">◀</p>
        
        <div class="survey">
            <img class="mockDiagram" src="diagramBilde.png"/>
            <button class="popbutton" onclick="showHideDiv()">Show/hide div</button>
        </div>
        <div class="page2">
            <p onclick="tempForwardButton()" class="bH">▶</p>
        </div>
    </div>
    `;
}