(function () {
    const displayDiv = document.getElementById("app");
    let btn1;
    let btn2;
    let btn3;
    let btn4;

    function getPromise(method, url) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (this.readyState === 4) {
                    if (this.status < 400) {
                        try {
                            let response = JSON.parse(xhr.responseText);
                            return response;
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
            }
            xhr.open(method, url);
            xhr.send();
        }
        )
    }

    const pageGetter = function () {
        var page = sessionStorage.getItem('page');

        if (page === null) {
            page = "login";
            sessionStorage.getItem('page', 'login');
            return page;
        } else {
            return page;
        }
    }

    const render = function (pageCreator) {
        displayDiv.innerHTML = pageCreator();
    }

    const setUpEvents = function(btn1,btn2,btn3,btn4){

    }
    const destroyEvents = function () {

    }

    const init = function (k) {
        if (k === 'login') {
            render(interviewApp.LoginPage);
            button1 = window.getElementById('submit-btn');
            setUpEvents(button1)
        }
    }


    getPromise('GET', '/src/data/data.json')
        .then(function (what) {
            console.log(what);
        })
        .catch(function (e) {
            console.log(e);
        });
})()