function validation()
        {
	        var name=document.getElementById("name").value; 
          var email=document.getElementById("email").value;
          var password=document.getElementById("password").value;
          var text;
          

        if((name==null || name=="") && (email==null || email=="") && (password==null || password==""))  
        {
          alert("All fields must be filled out");
          return false;
        }
        if(name=="")
        {
          text="Please fill out this field";
          document.getElementById('text').innerHTML=text;
          return false;
        }
        else
        {
          text="";
          document.getElementById('text').innerHTML=text;
        }
        
        
        if(email=="")
        {
          text="Please fill your email";
          document.getElementById('text1').innerHTML=text;
          return false;
        }
        else
        {
          text="";
          document.getElementById('text1').innerHTML=text;
        }

       

        if(password=="")
        {
          text="Please fill your password";
          document.getElementById('text2').innerHTML=text;
          return false;
        }
         else
        {
          text="";
          document.getElementById('text2').innerHTML=text;
        }
         if(password.length<6)
        {
          text="Password must be atleast 6 characters long.";
          document.getElementById('text2').innerHTML=text;
          return false;
        }
         else
        {
          text="";
          document.getElementById('text2').innerHTML=text;
        }
        
}


