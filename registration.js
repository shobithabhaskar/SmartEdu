var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");

var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");

function switchSignup() {
    right_form.classList.add("fade-in-element");
    left_cover.classList.add("fade-in-element");

    left_form.classList.add("form-hide");
    left_cover.classList.remove("cover-hide");
    right_form.classList.remove("form-hide");
    right_cover.classList.add("cover-hide");
}

function validate() 
{
   // alert( "Testing" );
   var nm=document.getElementById("name").value;
   var eid=document.getElementById("mail").value;
   var pass=document.getElementById("pass").value;
   var cpass=document.getElementById("cpass").value;
   var pwd_expression = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-])/;
   var letters = /^[A-Za-z]+$/;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if( nm == "" ) 
    {
       alert( "Please provide your name!" );
       document.myForm.name.focus() ;
       return false;
    }
   
   else if(!letters.test(nm))
   {
      alert('Name field required only alphabet characters');
      return false;
   }

    
    else if( eid == "" ) 
    {
       alert( "Please provide your Email!" );
       //document.myForm.EMail.focus() ;
       return false;
    }
     
    else if(pass == "" || cpass == "")
    {
       alert("Please enter password!");
       document.myForm.mail.focus() ;
       return false;
    }

    else if(pass != cpass){
      alert( "Password mismatch!" );
      return false;
    }
    else if(pass.value!==pwd_expression){
   //  else if(!pwd_expression.validate(pwd)){
       alert("atleat 1 uppercase,lowercase,number and special character required in password filled");
    return false;
      }
   else{
      true;
   }


    
    


   //   if(cpass.length < 6)
   //  {
   //  alert ("Password minimum length is 6");
   //  return false;
   //  }
   //   if(cpass.length > 12)
   //  {
   //  alert ('Password max length is 12');
   // return false; 
   // }



   
   }
   function validateL(){

      var nmL=document.getElementById("loginname").value;
   //var mailL=document.getElementById("loginmail").value;
   var passL=document.getElementById("loginpass").value; 

   if( nmL == "" ) 
    {
       alert( "Please provide your name!" );
       //document.myFormL.name.focus() ;
       return false;
    }
   //  else if( mail == "" ) 
   
   //  {
   //     alert( "Please provide your email!" );
   //     //document.myFormL.name.focus() ;
   //     return false;
   //  }



   else if( passL == "" ) 
    {
       alert( "Please enter your password!" );
       //document.myFormL.name.focus() ;
       return false;
    }
    else{
       true;
    }
   
   }





