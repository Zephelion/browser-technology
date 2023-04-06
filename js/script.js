const beginBtn = document.querySelector("main section button");
const beginSection = document.querySelector("main section");
const formSection = document.querySelector(".form-container");
const form = document.getElementById("form");
const formIntroduction = document.querySelector(".form-introduction");
const formSubjects = document.querySelector(".form-subjects");
const subjectBtns = document.querySelectorAll("section.form-subjects button");
const introductionBtn = document.getElementById("introduction-btn");
const introductionInputs = document.querySelectorAll(".introduction-input");


// const checkPoint = localStorage.getItem("checkPoint");

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

const showQuestions = (id) => {
    const questionsSection = document.getElementById(id);
    formSubjects.classList.remove("appear");
    setTimeout(() => {
        formSubjects.classList.remove("add");
        questionsSection.classList.add("add");

        setTimeout(() => {
            questionsSection.classList.add("appear");
        }, 1000);
    }, 1000);

    console.log(questionsSection);
}

const showSubjects = () => {
    formIntroduction.classList.add("disappear");

    setTimeout(() => {
        formIntroduction.classList.add("remove");
        formSubjects.classList.add("add");
        
        setTimeout(() => {
            formSubjects.classList.add("appear");
            setCheckPoint(formSubjects.dataset.checkpoint);
        },1000)
    },1000);
}

const saveData = () => {
    const voornaam = introductionInputs[0].value;
    const email = introductionInputs[1].value;
    const studentnummer = introductionInputs[2].value;


    localStorage.setItem("voornaam", voornaam);
    localStorage.setItem("email", email);
    localStorage.setItem("studentnummer", studentnummer);

    showSubjects();
}

const setValues = () => {
    const voornaam = document.getElementById("voornaam");
    voornaam.value = window.localStorage.getItem("voornaam");

    const email = document.getElementById("email");
    email.value  = window.localStorage.getItem("email");

    const studentnummer = document.getElementById("studentnummer");
    studentnummer.value = window.localStorage.getItem("studentnummer");
}

const setCheckPoint = (checkpoint) => {
    localStorage.setItem("checkPoint", checkpoint);
}


// form.addEventListener("submit", (e) => {
//     saveData(e);
// })

introductionBtn.addEventListener("click", (e) => {
    saveData();
});


beginBtn.addEventListener("click", () => {
    beginSection.classList.add("disappear");

    setTimeout(() => {
        beginSection.classList.add("remove");
        formSection.classList.add("add");

        setTimeout(() => {
            formSection.classList.add("appear");
            setCheckPoint(formIntroduction.dataset.checkpoint);
        }, 1000)
    }, 1000);
})

window.addEventListener("DOMContentLoaded", () => {
    setValues();

    if(checkPoint == 1){
        beginSection.classList.add("remove");
        formSection.classList.add("add");
        formSection.classList.add("appear");
    }else if (checkPoint == 2){
        beginSection.classList.add("remove");
        console.log("nu moeten de vakken komen");
        formSubjects.classList.add("add");
        formSubjects.classList.add("appear");
    }
});

subjectBtns.forEach((subjectBtn) => {
    subjectBtn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        showQuestions(id);
    })
})
