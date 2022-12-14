function createGroup(group, teams) {
    return `
    <div class="grupo">
    <h1>${group}</h1>
    <ul>
        ${teams}
    </ul>
</div>
    `
}

function createNames(flag1, flag2, flag3, flag4, nome1, nome2, nome3, nome4){
    return `
    <li>
    <img src="assets/icon-${flag1}.svg" alt="icon-${flag1}"> 
    <h2><span> ${nome1}</span></h2>
    </li>
    <li>
    <img src="assets/icon-${flag2}.svg" alt="icon-${flag2}"> 
    <h2><span> ${nome2}</span></h2>
    </li>
    <li>
    <img src="assets/icon-${flag3}.svg" alt="icon-${flag3}"> 
    <h2><span> ${nome3}</span></h2>
    </li>
    <li>
    <img src="assets/icon-${flag4}.svg" alt="icon-${flag4}"> 
    <h2><span> ${nome4}</span></h2>
    </li>
`
}

document.querySelector('#grupos').innerHTML =

    createGroup("GRUPO A", 
        createNames("Qatar", "Ecuador", "Senegal", "Netherlands", "QATAR", "EQUADOR", "SENEGAL", "HOLANDA" )) +

    createGroup("GRUPO B", 
        createNames("England", "Iran", "USA", "Wales", "INGLATERRA", "IRÃ", "ESTADOS UNIDOS", "PAÍS DE GALES")) +

    createGroup("GRUPO C", 
        createNames("Argentina", "SaudiArabia", "Mexico", "Poland", "ARGENTINA", "ARÁBIA SAUDITA", "MÉXICO", "POLÔNIA")) +

    createGroup("GRUPO D",  
        createNames("France", "Australia", "Denmark", "Tunisia", "FRANÇA", "AUSTRALIA", "DINAMARCA", "TUNISIA")) +

    createGroup("GRUPO E", 
        createNames("Spain", "CostaRica", "Germany", "Japan", "ESPANHA", "COSTA RICA", "ALEMANHA", "JAPÃO")) +

    createGroup("GRUPO F", 
        createNames("Belgium", "Canada", "Morocco", "Croatia", "BÉLGICA", "CANADÁ", "MARROCOS", "CROÁCIA")) +

    createGroup("GRUPO G", 
        createNames("Brazil", "Serbia", "Switzerland", "Cameroon", "BRASIL", "SÉRVIA", "SUÍÇA", "CAMARÕES")) +

    createGroup("GRUPO H",
        createNames("Portugal", "Ghana", "Uruguay", "SouthKorea", "PORTUGAL", "GANA", "URUGUAI", "CORÉIA DO SUL"))

function createGame(country1, hour, country2) {
    return `
        <li>
            <img src="assets/icon-${country1}.svg" alt="${country1}" />
            <strong> ${hour}</strong>
            <img src="assets/icon-${country2}.svg" alt="${country2}" />
        </li>
    `
}

function createCard(stage, date, day, games) {
    return `
    <div class="card"> 
        <h1><span>${stage}</span></h1>
            <h2>${date} <span>${day}</span></h2>
                <ul>
                ${games}
                </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 

    createCard("FASE DE GRUPOS", "20/11", "domingo", 
        createGame("Qatar", "13:00", "Ecuador")) +

    createCard("FASE DE GRUPOS", "21/11", "Segunda", 
        createGame("England", "10:00", "Iran") + 
        createGame("Senegal", "13:00", "Netherlands") + 
        createGame("USA", "16:00", "Wales")) +

    createCard("FASE DE GRUPOS", "22/11", "Terça", 
        createGame("Argentina", "07:00", "SaudiArabia") +
        createGame("Denmark", "10:00", "Tunisia") +
        createGame("Mexico", "13:00", "Poland") +
        createGame("France", "16:00", "Australia")) +

    createCard("FASE DE GRUPOS", "23/11", "Quarta", 
        createGame("Morocco", "07:00", "Croatia") +
        createGame("Germany", "10:00", "Japan") +
        createGame("Spain", "13:00", "CostaRica") +
        createGame("Belgium", "16:00", "Canada")) +

    createCard("FASE DE GRUPOS", "24/11", "Quinta", 
        createGame("Switzerland", "07:00", "Cameroon") +
        createGame("Uruguay", "10:00", "SouthKorea") +
        createGame("Portugal", "13:00", "Ghana") +
        createGame("Brazil", "16:00", "Serbia")) +

    createCard("FASE DE GRUPOS", "25/11", "Sexta", 
        createGame("Wales", "07:00", "Iran") +
        createGame("Qatar", "10:00", "Senegal") +
        createGame("Netherlands", "13:00", "Ecuador") +
        createGame("England", "16:00", "USA")) +

    createCard("FASE DE GRUPOS", "26/11", "Sábado", 
        createGame("Tunisia", "07:00", "Australia") +
        createGame("Poland", "10:00", "SaudiArabia") +
        createGame("France", "13:00", "Denmark") +
        createGame("Argentina", "16:00", "Mexico")) +

    createCard("FASE DE GRUPOS", "27/11", "Domingo", 
        createGame("Japan", "07:00", "CostaRica") +
        createGame("Belgium", "10:00", "Morocco") +
        createGame("Croatia", "13:00", "Canada") +
        createGame("Spain", "16:00", "Germany")) +

    createCard("FASE DE GRUPOS", "28/11", "Segunda", 
        createGame("Cameroon", "07:00", "Serbia") +
        createGame("SouthKorea", "10:00", "Ghana") +
        createGame("Brazil", "13:00", "Switzerland") +
        createGame("Portugal", "16:00", "Uruguay")) +

    createCard("FASE DE GRUPOS", "29/11", "Terça", 
        createGame("Ecuador", "12:00", "Senegal") +
        createGame("Netherlands", "12:00", "Qatar") +
        createGame("Iran", "16:00", "USA") + 
        createGame("Wales", "16:00", "England")) +

    createCard("FASE DE GRUPOS", "30/11", "Quarta", 
        createGame("Tunisia", "12:00", "France") +
        createGame("Australia", "12:00", "Denmark") +
        createGame("Poland", "16:00", "Argentina") +
        createGame("SaudiArabia", "16:00", "Mexico")) +

    createCard("FASE DE GRUPOS", "01/12", "Quinta", 
        createGame("Croatia", "12:00", "Belgium") +
        createGame("Canada", "12:00", "Morocco") +
        createGame("Japan", "16:00", "Spain") +
        createGame("CostaRica", "16:00", "Germany")) +

    createCard("FASE DE GRUPOS", "02/12", "Sexta", 
        createGame("SouthKorea", "12:00", "Portugal") +
        createGame("Ghana", "12:00", "Uruguay") +
        createGame("Serbia", "16:00", "Switzerland") +
        createGame("Cameroon", "16:00", "Brazil")) +

    createCard("OITAVAS DE FINAL", "03/12", "Sábado", 
            createGame("Netherlands", "12:00", "USA") +
            createGame("Argentina", "16:00", "Australia")) +

    createCard("OITAVAS DE FINAL", "04/12", "Domingo", 
        createGame("France", "12:00", "Poland") +
        createGame("England", "16:00", "Senegal")) +    

    createCard("OITAVAS DE FINAL", "05/12", "Segunda", 
        createGame("Japan", "12:00", "Croatia") +
        createGame("Brazil", "16:00", "SouthKorea")) +
        
    createCard("OITAVAS DE FINAL", "06/12", "Terça", 
        createGame("Morocco", "12:00", "Spain") +
        createGame("Portugal", "16:00", "Switzerland")) +  

    createCard("QUARTAS DE FINAL", "09/12", "Sexta", 
        createGame("Croatia", "12:00", "Brazil") +
        createGame("Netherlands", "16:00", "Argentina")) +

    createCard("QUARTAS DE FINAL", "10/12", "Sábado", 
        createGame("Morocco", "12:00", "Portugal") +
        createGame("England", "16:00", "France")) +

    createCard("SEMI FINAL", "13/12", "Terça", 
        createGame("Argentina", "16:00", "Croatia")) +

    createCard("SEMI FINAL", "14/12", "Quarta", 
        createGame("France", "16:00", "Morocco")) +

    createCard("DISPUTA 3 LUGAR", "17/12", "Sábado", 
        createGame("Croatia", "12:00", "Morocco")) +

    createCard("FINAL", "18/12", "Domingo", 
        createGame("Argentina", "12:00", "France")) 
    