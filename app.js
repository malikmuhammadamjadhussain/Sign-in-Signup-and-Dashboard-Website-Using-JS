function getData() {
  return JSON.parse(localStorage.getItem('users')) || [];
}
function setData(data) {
  localStorage.setItem('users', JSON.stringify(data));
}
var users = getData();

function submitForm(e) {
  e.preventDefault();

  var emailInp = document.getElementById('email').value.trim();
  var usernameInp = document.getElementById('username').value.trim();
  var passwordInp = document.getElementById('password').value;

  if (!emailInp || !usernameInp || !passwordInp) {
    alert("All fields are required.");
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInp)) {
    alert("Please enter a valid email address.");
    return;
  }

  var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  if (!passwordRegex.test(passwordInp)) {
    alert(
      "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character."
    );
    return;
  }

  var isEmailTaken = users.some((user) => user.email === emailInp);
  if (isEmailTaken) {
    alert("This email is already registered. Please use a different email.");
    return;
  }

  users.push({
    username: usernameInp,
    password: passwordInp,
    email: emailInp,
  });
  setData(users);

  alert("Account created successfully!");
  console.log(users);

  window.location.replace('./login.html');
}
