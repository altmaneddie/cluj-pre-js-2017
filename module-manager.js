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

    const pageGetter = function (k) {
        page = sessionStorage.getItem('page');

        if (page === null) {
            page = "login";
            sessionStorage.getItem('page', 'login');
        } else {
            sessionStorage.setItem("exPage", page);
            sessionStorage.setItem("page", k);
        }
    }

    const render = function (pageCreator) {

        displayDiv.innerHTML = pageCreator();
    }

    const setUpEvents = function () {
        
    }
    const destroyEvents = function () {

    }

    const ModuleManager = function () {
        let k = JSON.parse(sessionStorage.getItem('page'));
        let m = JSON.parse(sessionStorage.getItem('exPage'))

        init: function (k) {
            render(k);
            setUpEvents(k);
        }
        destroy: function(m){
            destroyEvents(m);
            button1 = undefined;
            button2 = undefined;
            button3 = undefined;
            button4 = undefined;
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