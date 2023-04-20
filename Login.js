const UsersData = [
    {
      name: "nest",
      email: "nest@nhs.edu.mn",
      password: "Nest12345678",
      secretQ: "name?",
      secretAns: "nest",
    },
  ];
  
  function Signup() {
    let passOne = document.getElementById("passOne").value;
    let passTwo = document.getElementById("passTwo").value;
    let email = document.getElementById("email").value;
    let secretQ = document.getElementById("sQ").value;
    let secretA = document.getElementById("sA").value;
    let name = document.getElementById("name").value;
  
    if (passOne.length >= 8) {
      if (passOne === passTwo) {
        if (passOne != passOne.toLowerCase()) {
          console.log("pass approved!");
          if (email != "" && secretA != "" && secretQ != "" && name != "") {
            let newUser = "";
            newUser = {
              name: name,
              email: email,
              password: passOne,
              secretQ: secretQ,
              secretAns: secretA,
            };
            UsersData.push(newUser);
          }
        } else {
          alert("must include capital letter");
        }
      } else {
        alert("pass doesnt matched");
      }
    } else {
      alert("pass is too short");
    }
  }
  
  function Login() {
    let found = false;
    let email = document.getElementById("lemail").value;
    let pass = document.getElementById("pass").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (email == UsersData[i].email && pass == UsersData[i].password) {
        found = true;
        window.location.replace("./Hello.html");
      }
    }
    if (!found) {
      alert("your pass or email is wrong");
    }
  }
  
  function Forgot() {
    let email = document.getElementById("femail").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        document.getElementById("sQuestion").innerHTML = UsersData[i].secretQ;
      }
    }
  }
  
  function Check() {
    let email = document.getElementById("femail").value;
    let userAns = document.getElementById("userAns").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        if (UsersData[i].secretAns == userAns)
          document.getElementById("fpass").innerHTML = UsersData[i].password;
      }
    }
  }