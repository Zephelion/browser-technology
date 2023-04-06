window.addEventListener("DOMContentLoaded", () => {
    var lastUrl = localStorage.getItem("url");
    if(window.location.href != lastUr){
        window.location.href = lastUrl;
    }
});