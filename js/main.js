// function Generate() {
//     var value = document.getElementById('input').value;
//     var api  = `http://api.qrserver.com/v1/create-qr-code/?data=${value}&size=100x100`

//     document.getElementById('image').src = api
// }



function Generate() {
    var value = document.getElementById('input').value
    const Speech = new SpeechSynthesisUtterance(value);
    Speech.volume = 3;
    Speech.rate = 0.5;
    Speech.pitch = 3
    window.speechSynthesis.speak(Speech);

}

