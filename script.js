let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

// Fetch and populate voices when available
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();  // Corrected the assignment
    speech.voice = voices[0];  // Default to the first voice

    // Populate the select dropdown with voice options
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);  // Create new option
        voiceSelect.add(option);  // Add option to the select element
    });
};

// Event listener to change the selected voice
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];  // Set the selected voice
});

// Event listener for the button to trigger speech
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;  // Get the text from textarea
    window.speechSynthesis.speak(speech);  // Speak the text
});
