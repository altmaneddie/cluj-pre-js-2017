$("#Btn").on("click", function () {
    $.get("http://carcompanion.16mb.com/backend/script.php?q=" + $("#letterSearcher").val(),
        function (data, status) {
            if (status == "success") {
                $("#app").text(JSON.parse(data).results);
            } else {
                alert(status + ":" + statusText);
            }
        })
})

