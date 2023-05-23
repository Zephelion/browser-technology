
window.addEventListener("beforeunload", () => {
    const currentUrl = window.location.href;
    localStorage.setItem("url", currentUrl);
});

if(localStorage.getItem("url")){
    console.log(localStorage.getItem("url"));
}
// window.addEventListener("load", () => {
// });