interviewApp.Nav = function (options = {}) {
    return `
  <header class="header">
  <a class="home-logo"><img src="assets/images/Logo.png" class="header-img"></a>
  <a class="pg-switch border-switch" id="evaluationBtn">Evaluations</a>
  <a class="pg-switch border-switch" id="newEvaluationBtn">New Evaluation</a>
  <button class="Logout" id="logoutBtn" type="button" , Value="Logout" , name="Logout">Logout</button>
  </header>
  `
};


interviewApp.Footer = function () {
    return `
<footer class="footer">
    Copyright@Softvision 2017
</footer>
    `
}


interviewApp.moveToLoginPage = function(){
    sessionStorage.setItem
}


