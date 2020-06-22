

function theTheme() {
    i=0; i<model.theme.length; i++;
    return model.theme[i];
 }   


function theScore() {
    for(i=0; i<model.user.answer.length; i++)
    return model.user.answer[i];
}

function questionHeader() {
    for(i=0; i<model.survey.length; i++)
    return model.survey[i].question;
}
