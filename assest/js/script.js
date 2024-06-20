document
.getElementById("formulario")
     .addEventListener("submit", function(event){
           event.preventDefault();

           let name = document.getElementById("name").value;
           let email = document.getElementById("email").value;
           let  message= document.getElementById("message").value;
           

        

           
           if(name.trim() === ""){
              document.getElementById("nameError").innerHTML = "Need to be fill !"
              return;
           }

           if(email.trim() === ""){
               document.getElementById("emailError").innerHTML = "Need to be fil!"
               return;
           }
            if(message.trim() === ""){
                document.getElementById("messageError").innerHTML = "Need to be fil!"
                return;
            }
          

           alert("Form submitted successfully")

        });

        
