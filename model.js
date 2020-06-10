const model = {
    user: {firstName: '', lastName: '', fullName: function() { return this.firstName + " " + this.lastName}, contact: '',  answer: [], note: []},
    theme: ['Trygt og støttende læringsmiljø', 'Tydelige felles mål', 'Beste praksis er standard', 'Selvledelse og god daglig drift', 'Kontinuerlig forbedring. Litt bedre hver dag.', 'Deling av kunnskap'],
    survey: [
        {question: 'Vi har ydmyke og trygge ledere', positiveStatement: 'Min nærmeste leder er åpen om egne feil', negativeStatement: 'Min leder er litt for mye verdensmester'},
        {question: 'Vi anerkjenner og utnytter forskjellighet', positiveStatement: 'Hos oss er det lett komme med egne ideer', negativeStatement: 'Hos oss er det tryggest å holde kortene tett til brystet'},
        {question: 'Åpenhet for nye ideer (som ikke passer inn)', positiveStatement: 'I vår avdeling utfordrer vi ofte etablerte sannheter', negativeStatement: 'Hvis vi gjør feil her, blir det ofte brukt mot oss'},
        {question: 'Tid til refleksjon og læring', positiveStatement: 'Til tross for stor arbeidsmengde, tar vi oss tid til å evaluere', negativeStatement: 'Vi har rett og slett  ikke tid i hverdagen til å evaluere og lære'},

        {question: 'Vi har et konstant og langsiktig nyttig formål', positiveStatement: 'Jeg føler sterk tilknytning til virksomhetens visjon og samfunnsoppdrag', negativeStatement: 'De overordnede målene her hos oss er mye svada'},
        {question: 'Vårt team har egne mål knyttet til samfunnsoppdraget', positiveStatement: 'I vårt team deler vi felles krevende mål', negativeStatement: 'Vi blir målt på en måte som ikke samsvarer med godt arbeid'},
        {question: 'Vi samler systematisk inn data om vår kvalitet', positiveStatement: 'Vi har gode visuell tilbakemelding om våre leveranser', negativeStatement: 'Det er mye synsing om hva kundene/brukerne egentlig opplever'},
        {question: 'Brukerne/kundene er alltid i fokus', positiveStatement: 'Alle her brenner for å gi brukerne den beste service', negativeStatement: 'Vi mangler ennå  viktig kunnskap om brukernes behov'},

        {question: 'Den beste arbeidsmåten er vår standard', positiveStatement: 'Vi følger en felles beste arbeidsmetodikk', negativeStatement: 'Ulike kollegaer gjør arbeidsoppgavene på sin egen måte'},
        {question: 'Alle får opplæring i god praksis', positiveStatement: 'Alle får god opplæring i de beste arbeidsmetodikk', negativeStatement: 'Jeg skulle ønske jeg fikk bedre trening av de beste hos oss'},
        {question: 'Vi har kjøreregler alle følger', positiveStatement: 'Vi har egne teamregler som alle har eierskap til', negativeStatement: 'Team reglene henger der, men betyr lite i praksis'},
        {question: 'Vi evaluerer etterlevelse av god praksis', positiveStatement: 'Vi evaluerer etterlevelse av god arbeidspraksis', negativeStatement: undefined},

        {question: 'Vi styrer for god flyt mellom funksjoner', positiveStatement: 'Våre tavlemøter gir god oversikt i en hektisk hverdag', negativeStatement: 'Vi havner ofte på etterskudd fordi mange faktorer påvirker arbeidet'},
        {question: 'Årsaker til problemer kommer opp i dagen', positiveStatement: 'Risiko for problemer visualiseres slik at vi raskt kan ta aksjoner', negativeStatement: 'Vi havner ofte på etterskudd i en hektisk hverdag'},
        {question: 'Helse-miljø-og sikkerhet har alltid fokus først', positiveStatement: 'Vi starter alltid møtene våre med HMS evaluering', negativeStatement: 'HMS hos oss er mye prosedyrer men praksis er ikke like bra'},
        {question: 'Daglig registrerer vi ideer til forbedring', positiveStatement: 'Vi logger systematisk ideer for små og store forbedringer', negativeStatement: 'Forbedringsideer blir ofte liggende fordi de ikke tas tak i'},

        {question: 'Alle deltar med forbedringsideer', positiveStatement: 'Vi er veldig stolte over at alle bidrar med sine forbedringsideer', negativeStatement: 'Jeg har mange ideer til forbedringer men holder dem mest for meg selv'},
        {question: 'Vi evaluerer jobbene for å lære', positiveStatement: 'Vi sjekker ut hver jobb for å se om vi kan lære noe av den', negativeStatement: 'Når jobben er ferdig, haster vi til neste'},
        {question: 'Rask utprøving og gjennomføring', positiveStatement: 'Vi er kjappe til å prøve ut forbedringsideer ', negativeStatement: 'Forbedringsideer blir ofte liggende i kø og vente til vi har tid'},
        {question: 'Forbedringer følges opp systematisk', positiveStatement: 'Hele virksomheten har fokus på effektivt forbedringsarbeid', negativeStatement: 'Systemet her er litt byråkratisk med mye tungvinn dokumentasjon'},

        {question: 'Vi evaluerer systematisk læring', positiveStatement: 'Når forbedringer gjennomføres, oppsummerer vi hva vi lærte', negativeStatement: undefined},
        {question: 'Vi beskriver læring slik at det er lett å forstå', positiveStatement: 'Vi beskriver og deler det vi lærer', negativeStatement: 'Lærdommer går ofte i glemmeboka fordi det er for mye hast'},
        {question: 'Forum for deling av kunnskap', positiveStatement: 'Vi har forum for å dele kunnskap på tvers', negativeStatement: 'Når flinke folk slutter, forsvinner ofte verdifull kunnskap'},
        {question: 'Kontinuerlig opplæring og trening', positiveStatement: 'Hos oss driver vi systematisk videreopplæring', negativeStatement: undefined},
    ],
    page: 'surveyView',
    counter: 0,
    tempCounter: 0,
    date: '',
    selfAssessmentSessionName: '',
    progressBar: 0,
};
console.log(model.user)