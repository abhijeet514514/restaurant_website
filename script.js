function validate(event) 
{
    event.preventDefault(); // Prevent form submission

    let uname = document.getElementById("name").value;
    let uemail = document.getElementById("email").value;
    let usub = document.getElementById("subject").value;
    let msg = document.getElementById("message").value;

    let r = "";
    let p = "";
    let q = "";
    let s = "";

    

    if (uname === "") {
         r += "Name should not be empty..!";
        
    }

    if (uemail === "") {
         p += "Email should not be empty..!";
        
    }

    if (usub === "") {
         q += "Subject should not be empty..!";
        
    }

    if (msg === "") { 
         s += "Message should not be empty..!";
        
    }

    if (uemail === "") {
        p += "Email should not be empty!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uemail)) {
        p += "Enter a valid email!";
    }
     



    document.getElementById("t1").innerHTML = r;
    document.getElementById("t2").innerHTML = p;
    document.getElementById("t3").innerHTML = q;
    document.getElementById("t4").innerHTML = s;

    if (r || p || q || s) {
        return false; // Prevent form submission if there are validation errors
    }
    alert("Form submitted successfully!");
    return true; // Allow form submission if no validation errors

   
}



