var usersData = JSON.parse(localStorage.getItem('users')) || [];

function searchData(user) {
  return usersData.find(
    (storedUser) => storedUser.email === user.email && storedUser.password === user.password
  ) || null;
}

function submitForm(e) {
  e.preventDefault();

  var emailValue = document.getElementById('email').value.trim();
  var passValue = document.getElementById('password').value;

  if (!emailValue || !passValue) {
    alert("Both email and password are required.");
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    return;
  }

  var isLogin = searchData({ email: emailValue, password: passValue });

  if (isLogin) {
    alert(`Welcome back, ${isLogin.username}!`);
    localStorage.setItem('login', JSON.stringify(isLogin));
    window.location.replace('./dashboard.html');
  } else {
    alert("Invalid email or password. Please try again.");
  }
}
