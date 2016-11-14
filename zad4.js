$( document ).ready(function() {
    console.log( "ready!" );
    var usersList=$("#users");
    
    console.log(usersList);
    $('button').on('click',function()
    {
        var content=$('input').val().trim();
        if(content != '')
        {
            usersList.append('<li>'+content+'</li>');
        }
    })
});


