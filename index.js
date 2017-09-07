interviewApp= {}

// default on load
window.addEventListener("load", function () {
    const container = document.getElementById('app');
    container.innerHTML = LoginPage();
    addEventstoLogin();
})