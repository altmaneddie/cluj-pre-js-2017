function Nav(options= {}){
    return `
  <header class="header">
  <a class="home-logo" href="login.html"><img src="assets/images/Logo.png" class="header-img"></a>
  <a class="pg-switch border-switch" href="evaluation.html">Evaluations</a>
  <a class="pg-switch" href="NewEvaluation.html">New Evaluation</a>
  <button class="Logout" type="button" , Value="Logout" , name="Logout">Logout</button>
  </header>
  `
  };
  

const Footer = function(){
    return `
<footer>
    Copyright@Softvision 2017
</footer>
    `
}

