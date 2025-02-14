function switchAnswer() {
    const yes = document.getElementById('yes-label');
    const no = document.getElementById('no-label');
    const yesValue = document.getElementById('yes');
    const noValue = document.getElementById('no');
    console.log(noValue);


    if (document.querySelector('input:checked').value === "no") {
        noValue.setAttribute('id', 'yes');
        noValue.setAttribute('value', 'yes');
        yesValue.setAttribute('id', 'no');
        yesValue.setAttribute('value', 'no');

        if (yes.innerText === 'No') {
            yes.innerText = 'Yes';
            no.innerText = 'No';
        } else {
            yes.innerText = 'No';
            no.innerText = 'Yes';
        }
    } 
    console.log(document.querySelector('input:checked').value);
}

document.getElementById("formA").addEventListener("submit", toggleMessage);

function toggleMessage(event) {
    event.preventDefault();
    const message = document.getElementById('love');
    console.log("dog");
    message.classList.toggle('hidden');
}