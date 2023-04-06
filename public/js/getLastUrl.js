window.addEventListener("DOMContentLoaded", () => {
    var lastUrl = localStorage.getItem("url");
    if(lastUrl){
        window.location.href = lastUrl;
    }
});