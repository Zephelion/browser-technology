const inputs = document.querySelectorAll('.introduction-input');
const voornaamDescription = document.getElementById('voornaam-description');
const emailDescription = document.getElementById('email-description');
const studentNummerDescription = document.getElementById('studentnummer-description');
const formIntroduction = document.querySelector('.form-introduction');
// const submitBtn = document.querySelector('button[type="submit"]');

// console.log(submitBtn);

// inputs.forEach(input => {
//     input.removeAttribute('required');
// });

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

formIntroduction.addEventListener('submit', e => {
    e.preventDefault();

    console.log(e);

    var email = document.getElementById('email').value;
    var studentNummer = document.getElementById('studentnummer').value;
    var voornaam = document.getElementById('voornaam').value;

    console.log(email, studentNummer, voornaam);
    if(validateEmail(email) && studentNummer.length == 9 && voornaam.length > 0){
        const url = window.location.href;
        localStorage.setItem('url', url);
        formIntroduction.submit();
    }else{
        const inputs = e.target.querySelectorAll('input');
        console.log(inputs);

        inputs.forEach(input => {
            if(input.value.length == ""){
                console.log("input mag niet leeg zijn");
            }
        });
    }
});


inputs.forEach(input => {
    input.addEventListener('input', e => {
        const input = e.target;


        if(input.type === "email"){
            input.value.length > 0 && validateEmail(input.value)? emailDescription.classList.add("appear") : emailDescription.classList.remove("appear");

        }else if(input.type === "tel"){
            input.value.length == 9 ? studentNummerDescription.classList.add("appear") : studentNummerDescription.classList.remove("appear");
        }
        else{
            input.value.length > 0 ? voornaamDescription.classList.add("appear") : voornaamDescription.classList.remove("appear");
        }
    });
});