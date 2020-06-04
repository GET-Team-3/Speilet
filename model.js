const model = {
    user: null, //{name: '', contact: '',  answer: [], note: []},
    theme: ['Trygt og støttende læringsmiljø', 'Tydelige felles mål', 'Beste praksis er standard', 'Selvledelse og god daglig drift', 'Kontinuerlig forbedring. Litt bedre hver dag.', 'Deling av kunnskap'],
    question: [
        {quest1: 'Vi har ydmyke og trygge ledere', quest2: 'Vi anerkjenner og utnytter forskjellighet', quest3: 'Åpenhet for nye ideer (som ikke passer inn)', quest4: 'Tid til refleksjon og læring'},
        {quest1: 'Vi har et konstant og langsiktig nyttig formål', quest2: 'Vårt team har egne mål knyttet til samfunnsoppdraget', quest3: 'Vi samler systematisk inn data om vår kvalitet', quest4: 'Brukerne/kundene er alltid i fokus'},
        {quest1: 'Den beste arbeidsmåten er vår standard', quest2: 'Alle får opplæring i god praksis', quest3: 'Vi har kjøreregler alle følger', quest4: 'Vi evaluerer etterlevelse av god praksis'},
        {quest1: 'Vi styrer for god flyt mellom funksjoner', quest2: 'Årsaaker til problemer kommer opp i dagen', quest3: 'Helse-miljø-og sikkerhet har alltid fokus først  ', quest4: 'Daglig registrerer vi ideer til forbedring'},
        {quest1: 'Alle deltar med forbedringsideer', quest2: 'Vi evaluerer jobbene for å lære', quest3: 'Rask utprøving og gjennomføring', quest4: 'Forbedringer følges opp systematisk'},
        {quest1: 'Vi evaluerer systematisk læring', quest2: 'Vi beskriver læring slik at det er lett å forstå', quest3: 'Forum for deling av kunnskap', quest4: 'Kontinuerlig opplæring og trening'},
    ],
    positiveStatement: [
        {positive1: 'Min nærmeste leder er åpen om egne feil', positive2: 'Hos oss er det lett komme med egne ideer', positive3: 'I vår avdeling utfordrer vi ofte etablerte sannheter', positive4: 'Til tross for stor arbeidsmengde, tar vi oss tid til å evaluere'},
        {positive1: 'Jeg føler sterk tilknytning til virksomhetens visjon og samfunnsoppdrag', positive2: 'I vårt team deler vi felles krevende mål', positive3: 'Vi har gode visuell tilbakemelding om våre leveranser', positive4: 'Alle her brenner for å gi brukerne den beste service'},
        {positive1: 'Vi følger en felles beste arbeidsmetodikk', positive2: 'Alle får god opplæring i de beste arbeidsmetodikk', positive3: 'Vi har egne teamregler som alle har eierskap til', positive4: 'Vi evaluerer etterlevelse av god arbeidspraksis'},
        {positive1: 'Våre tavlemøter gir god oversikt i en hektisk hverdag', positive2: 'Risiko for problemer visualiseres slik at vi raskt kan ta aksjoner', positive3: 'Vi starter alltid møtene våre med HMS evaluering', positive4: 'Vi logger systematisk ideer for små og store forbedringer'},
        {positive1: 'Vi er veldig stolte over at alle bidrar med sine forbedringsideer', positive2: 'Vi sjekker ut hver jobb for å se om vi kan lære noe av den', positive3: 'Vi er kjappe til å prøve ut forbedringsideer ', positive4: 'Hele virksomheten har fokus på effektivt forbedringsarbeid'},
        {positive1: 'Når forbedringer gjennomføres, oppsummerer vi hva vi lærte', positive2: 'Vi beskriver og deler det vi lærer', positive3: 'Vi har forum for å dele kunnskap på tvers', positive4: 'Hos oss driver vi systematisk videreopplæring'},
    ],
    negativeStatement: [
        {negative1: 'Min leder er litt for mye verdensmester', negative2: 'Hos oss er det tryggest å holde kortene tett til brystet', negative3: 'Hvis vi gjør feil her, blir det ofte brukt mot oss', negative4: 'Vi har rett og slett  ikke tid i hverdagen til å evaluere og lære'},
        {negative1: 'De overordnede målene her hos oss er mye svada', negative2: 'Vi blir målt på en måte som ikke samsvarer med godt arbeid', negative3: 'Det er mye synsing om hva kundene/brukerne egentlig opplever', negative4: 'Vi mangler ennå  viktig kunnskap om brukernes behov'},
        {negative1: 'Ulike kollegaer gjør arbeidsoppgavene på sin egen måte', negative2: 'Jeg skulle ønske jeg fikk bedre trening av de beste hos oss', negative3: 'Team reglene henger der, men betyr lite i praksis', negative4: ''},
        {negative1: 'Vi havner ofte på etterskudd fordi mange faktorer påvirker arbeidet', negative2: 'Vi havner ofte på etterskudd i en hektisk hverdag', negative3: 'HMS hos oss er mye prosedyrer men praksis er ikke like bra', negative4: 'Forbedringsideer blir ofte liggende fordi de ikke tas tak i'},
        {negative1: 'Jeg har mange ideer til forbedringer men holder dem mest for meg selv', negative2: 'Når jobben er ferdig, haster vi til neste', negative3: 'Forbedringsideer blir ofte liggende i kø og vente til vi har tid', negative4: 'Systemet her er litt byråkratisk med mye tungvinn dokumentasjon'},
        {negative1: '', negative2: 'Lærdommer går ofte i glemmeboka fordi det er for mye hast', negative3: 'Når flinke folk slutter, forsvinner ofte verdifull kunnskap', negative4: ''},
    ],
    page: 'surveyView',
    date: '',
    selfAssessmentSessionName: '',
    progressBar: '',
};

// let temp = {answ1: [7,5,4,3], answ2: [7,5,4,3], answ3: [7,5,4,3], answ4: [7,5,4,3],answ5: [7,5,4,3],answ6: [7,5,4,3],}

// if side1 { 
// 1.1 = model.user.answer.theme1[0]
// model.user.answer[0].answ1
