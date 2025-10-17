const footballTeam = {
    team: "Manchester United",
    year: 2025,
    headCoach: "Ruben Amorim",
    players: [
        {
            name: "Bruno Fernandes",
            position:"midfielder",
            isCaptain: true,
            imgSource: "https://assets.manutd.com/AssetPicker/images/0/0/22/86/1464002/8-Bruno-Fernandes1751376414332.png"
        },
        {
            name: "Senne Lammens",
            position:"goalkeeper",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/207/1494871/SL-PlayerProfle-Cutout1756802312073.png"

        },
        {
            name: "Diogo Dalot",
            position:"defender",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1463996/20-Diogo-Dalot1751370735578.png"
        },
        {
            name: "Mathijs De Ligt",
            position:"defender",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1463990/4-Matthijs-DeLigt1751367748460.png"
        },
        {
            name: "Leny Yoro",
            position:"defender",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1463995/15-Leny-Yoro1751370409182.png"
        },
        {
            name: "Patrick Dorgu",
            position:"defender",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1463994/13-Patrick-Dorgu1751369796604.png"
        },
        {
            name: "Manuel Ugarte",
            position:"midfielder",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1464004/25-Manuel-Ugarte1751376544180.png"
        },
        {
            name: "Casemiro",
            position:"midfielder",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1464003/18-Casemiro1751376486567.png"
        },
        {
            name: "Kobbie Mainoo",
            position:"midfielder",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1464005/37-Kobbie-Mainoo1751376603962.png"
        },
        {
            name: "Bryan Mbeumo",
            position:"forward",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/99/1467343/BM-PlayerProfle-Cutout1753177567514.png"
        },
        {
            name: "Matheus Cunha",
            position:"forward",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/85/1463572/MATHEUS_CUNHA_PORTRAIT_81750949982541.png"
        },
        {
            name: "Benjamin Sesko",
            position:"forward",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/130/1475214/BS-PlayerProfle-Cutout1754911861459.png"
        },
        {
            name: "Joshua Zirkzee",
            position:"forward",
            isCaptain: false,
            imgSource:"https://assets.manutd.com/AssetPicker/images/0/0/22/86/1464010/11-Joshua-Zirkzee1751380664807.png"
        }  
    ]
}

// adding the team details
const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year")
headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

// displaying the player cards
const playerSection = document.getElementById("player-cards")

let allPlayerCards = footballTeam.players.map(player => {

    if (!player.isCaptain) {
        return `<div class="player-card">
    <img
            src="${player.imgSource}"
            alt=""
            class="image-headshot"
          />
  <h2>${player.name}</h2>
  <p>Position: <b>${player.position}</b></p>
</div>`
    } else {
        return `
    <div class="player-card">
    <img
            src="${player.imgSource}"
            alt=""
            class="image-headshot"
          />
  <h2>(Captain) ${player.name}</h2>
  <p>Position: <b>${player.position}</b></p>
</div>`
    }
    
})
console.log(allPlayerCards)
playerSection.innerHTML = allPlayerCards

console.log(allPlayerCards.filter(card => card.includes("forward")))

// Adding the filter logic based on dropdown value
const selectDropdown = document.getElementById("players")
console.log(selectDropdown.selectedOptions)
selectDropdown.addEventListener('change', (event) => {
    if (event.target.value === "forward") {
        playerSection.innerHTML = allPlayerCards.filter(card => card.includes("forward"))
    } else if(event.target.value === "midfielder") {
        playerSection.innerHTML = allPlayerCards.filter(card => card.includes("midfielder"))
    } else if (event.target.value === "defender") {
        playerSection.innerHTML = allPlayerCards.filter(card => card.includes("defender"))
    } else if (event.target.value === "goalkeeper") {
        playerSection.innerHTML = allPlayerCards.filter(card => card.includes("goalkeeper"))
    } else {
        playerSection.innerHTML = allPlayerCards
    }
})
