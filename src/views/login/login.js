function LoginPage() {

    return `
${LoginContainer()}
${SubmitFeedbackSection()}
${SubmitFeedbackResults()}
${Footer()}
`
    function LoginContainer() {
        return `<section class="feedback grid">
    ${LoginHeader()}
    ${LoginForm()}
    <div class="clearfix"></div>
    </sections>
    `
    }

    function LoginForm() {
        return `
    <form class="login-form" method="POST">
        <input type="text" name="userName" placeholder="User Name"> 
        <input type="password" name="pw" placeholder="Password">
        <input type="submit" id="submit-btn" name="login" value="Login">
    </form>
    `
    }

    function LoginHeader() {
        return `
    <p>Interview Feedback</p>
    `
    }

    function SubmitFeedbackSection() {
        return `
    <section class="feedback grid">
    <img src="assets/images/new feedback.jpg" class="floatLeft floatLeft-img">
    <h1 class="floatLeft floatLeft-h1">Submit new feedback</h1>
    <p class="floatLeft floatLeft-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum
    </p>
    <div class="clearfix"></div>
</sections>
    `
    }

    function SubmitFeedbackResults() {
        return `
    <section class="feedback grid">
    <img src="assets/images/results.jpg" class="floatRight floatRight-img">
    <h1 class="floatRight floatRight-h1">View feedback results</h1>
    <p class="floatRight floatRight-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum
    </p>
    <div class="clearfix"></div>
</section>
    `
    }
}
