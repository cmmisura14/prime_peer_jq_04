

$(document).ready(function(){
    $(".display").on("click", function(){
       $("#input").append($(this).data("value"));
    });
});