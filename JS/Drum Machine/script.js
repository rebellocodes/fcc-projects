
let allBeats = [
    {
        drumName: "Heater 1",
        drumId: "Q"  
    },
    {
        drumName: "Heater 2",
        drumId: "W"  
    },
    {
        drumName: "Heater 3",
        drumId: "E"  
    },
    {
        drumName: "Heater 4",
        drumId: "A"  
    },
    {
        drumName: "Clap",
        drumId: "S"  
    },
    {
        drumName: "Open-HH",
        drumId: "D"  
    },
    {
        drumName: "Kick-n'-Hat",
        drumId: "Z"  
    },
    {
        drumName: "Kick",
        drumId: "X"  
    },
    {
        drumName: "Closed-HH",
        drumId: "C"  
    }

]
const drumPadButtons = document.querySelectorAll(".drum-pad");
const displayPara = document.getElementById("display")
for (const button of drumPadButtons) {
    button.addEventListener('click', () => {
        let drumName = allBeats.find(beat => beat.drumId === `${button.textContent.trim()}`)
        displayPara.textContent = drumName.drumName;
        button.firstElementChild.play()

    })
}