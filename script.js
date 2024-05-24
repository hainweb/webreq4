$(document).ready(function(){
    $("#gform").validate({
        rules:{
        fname:{
            required:true,
            minlength:3
        },
        snumber:{
            required:true,
            minlength:10
        },
        email:{
            required:true,
            email:true,

        },
        cntr:{
            required:true,
        },
        stt:{
            required:true,
        },
        
    }
    })
})