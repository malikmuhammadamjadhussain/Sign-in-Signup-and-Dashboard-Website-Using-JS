function getData() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function submitForm(e) {
  e.preventDefault();

  var emailInp = document.getElementById("email").value;
  var passwordInp = document.getElementById("password").value;
  
  var usersData = getData();
  var isLogin = false;

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].email === emailInp && usersData[i].password === passwordInp) {
      isLogin = true;
      localStorage.setItem('login', JSON.stringify(usersData[i]));
      window.location.replace('./dashboard.html');
      break;
    }
  }

  if (!isLogin) {
    alert("Invalid email or password!");
  }
}
