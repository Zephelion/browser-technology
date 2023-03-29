const beginBtn = document.querySelector("main section button");
const beginSection = document.querySelector("main section");
const formSection = document.querySelector(".form-container");
const form = document.getElementById("form");
const formIntroduction = document.querySelector(".form-introduction");
const formSubjects = document.querySelector(".form-subjects");

console.log(formSubjects);


const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);

}

const checkInputs = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll("input");

    const email = inputs[1].value;

    if(validateEmail(email)){
        console.log("email is valid")
        e.target.submit();
    }else{
        console.log("email is invalid")
    }
}

const showSubjects = () => {
    formIntroduction.classList.add("disappear");

    setTimeout(() => {
        formIntroduction.classList.add("remove");
        formSubjects.classList.add("add");
        
        setTimeout(() => {
            formSubjects.classList.add("appear")
        },1000)
    },1000);
}

const saveData = (e) => {
    e.preventDefault();

    const inputs = e.target.querySelectorAll("input");

    const voornaam = inputs[0].value;
    const email = inputs[1].value;
    const studentnummer = inputs[2].value;

    localStorage.setItem("voornaam", voornaam);
    localStorage.setItem("email", email);
    localStorage.setItem("studentnummer", studentnummer);

    showSubjects();
}


form.addEventListener("submit", saveData)


beginBtn.addEventListener("click", () => {
    beginSection.classList.add("disappear");

    setTimeout(() => {
        beginSection.classList.add("remove");
        formSection.classList.add("add");

        setTimeout(() => {
            formSection.classList.add("appear");
        }, 1000)
    }, 1000);
})

window.addEventListener("DOMContentLoaded", () => {
    const voornaam = document.getElementById("voornaam");
    voornaam.value = window.localStorage.getItem("voornaam");

    const email = document.getElementById("email");
    email.value  = window.localStorage.getItem("email");

    const studentnummer = document.getElementById("studentnummer");
    studentnummer.value = window.localStorage.getItem("studentnummer");
})
