
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
        const audio = button.firstElementChild;
        // Lookup the name
        const drumName = allBeats.find(beat => beat.drumId === button.textContent.trim());
        
        // Update display
        if (drumName) {
            displayPara.innerText = drumName.drumName;
        }

        // Play the sound (with reset for quick repetition)
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    });
}

// --- 2. Keyboard Handler ---
document.addEventListener('keydown', (event) => {
    event.preventDefault(); // Prevents browser defaults (like scrolling)
    
    const pressedKey = event.key.toUpperCase();
    
    // Find beat data using strict equality (===)
    const beat = allBeats.find(drum => drum.drumId === pressedKey);
    
    if (beat) {
        displayPara.innerText = beat.drumName;
    }
    
    const audioElement = document.getElementById(pressedKey);
    
    if (audioElement) {
        // Reset playback position to the start for quick, repeated hits
        audioElement.currentTime = 0; 
        audioElement.play();
        
    }
});