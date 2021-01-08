function validation()
        {
	        var fuser=document.getElementById("fuser").value;
          var dob=document.getElementById("Dob").value;
          var number=document.getElementById("number").value;
          var email=document.getElementById("email").value;
          var password=document.getElementById("password").value;

          var address=document.getElementById("address").value;
          var text;
        if((fuser==null || fuser=="") && (dob==null ||dob =="") && (number==null || number=="") && (email==null || email=="") && (password==null || password=="") &&(address==null || address==""))  
        {
          alert("all fields must be filled out");
          return false;
        }
        if(fuser=="")
        {
          text="**please fill out this field";
          document.getElementById('text').innerHTML=text;
          return false;
        }
        else
        {
          text="";
          document.getElementById('text').innerHTML=text;
        }
        if (dob=="")
        {
          text="**please fill your Dob";
          document.getElementById('text1').innerHTML=text;
          return false;
        }
         else
        {
          text="";
          document.getElementById('text1').innerHTML=text;
        }
        if (number=="")
        {
          text="**please fill your mobile number";
          document.getElementById('text2').innerHTML=text;
          return false;
        }
         else
        {
          text="";
          document.getElementById('text2').innerHTML=text;
        }
        if (isNaN(number))
        {
          text="not valid"
          document.getElementById('text2').innerHTML=text;
          return false;
        }
        else
        {
          text="";
          document.getElementById('text2').innerHTML=text;
        }
        
        if (number.length!="10")
        {
          text="max length 10";
          document.getElementById('text2').innerHTML=text;
          return false;
        }
        else
          {
          text="";
          document.getElementById('text2').innerHTML=text;
        }
        if(email=="")
        {
          text="**please fill your email";
          document.getElementById('text3').innerHTML=text;
          return false;
        }
        else
        {
          text="";
          document.getElementById('text3').innerHTML=text;
        }
        if(password=="")
        {
          text="Please fill your password";
          document.getElementById('text4').innerHTML=text;
          return false;
        }
         else
        {
          text="";
          document.getElementById('text4').innerHTML=text;
        }
         if(password.length<6)
        {
          text="Password must be atleast 6 characters long.";
          document.getElementById('text4').innerHTML=text;
          return false;
        }
         else
        {
          text="";
          document.getElementById('text4').innerHTML=text;
        }
        if(address=="")
        {
          text="**please fill your address";
          document.getElementById('text5').innerHTML=text;
          return false;
        }
         else
        {
          text="";
          document.getElementById('text5').innerHTML=text;
        }
        
}



 
