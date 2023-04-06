// const formQuestions = document.querySelector(".questions");


window.addEventListener("beforeunload", () => {
    const currentUrl = window.location.href;
    localStorage.setItem("url", currentUrl);
});


// const setUrl = () => {
//     const currentUrl = window.location.href;
//     localStorage.setItem("url", currentUrl);
// };

// setUrl();


// window.addEventListener("DOMContentLoaded", () => {
//     const storedUrl = localStorage.getItem("url");
//     console.log(storedUrl);

//     location.href = storedUrl;
//     localStorage.clear();
// });

// window.addEventListener("load", () => {
//     const currentUrl = window.location.href;
//     const storedUrl = localStorage.getItem("url");

//     if(currentUrl != storedUrl){
//         localStorage.clear();
//     }
// });