// $("Btn").load("data.txt");

// function getData(){
//     $.ajax({
//         url: 'data.txt',
//         success: function(data){
//             $('#app').text(data);
//         }
//     })
// }

$("#Btn").on("click", function (){
    $.ajax({
        url:'data.txt',
        success: function(data){
            $("#app").text("Teh name is: "+JSON.parse(data).Name+" and teh password is: "+JSON.parse(data).Password)
        }
    }
)})
