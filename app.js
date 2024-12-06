function getData() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function setData(data) {
  localStorage.setItem('users', JSON.stringify(data));
}

function submitForm(e) {
  e.preventDefault();

  var usernameInp = document.getElementById('username').value;
  var passwordInp = document.getElementById('password').value;
  var emailInp = document.getElementById('email').value;
  
  var users = getData();
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailInp) {
      alert("Invalid email: User already exists");
      return;
    }
  }

  users.push({ username: usernameInp, password: passwordInp, email: emailInp });
  setData(users);
  alert("Account created successfully!");
  window.location.href = "./login.html";
}
