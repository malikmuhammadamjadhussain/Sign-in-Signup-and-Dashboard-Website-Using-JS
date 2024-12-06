var user = JSON.parse(localStorage.getItem('login'));

if (user) {

  document.getElementById('user-name').textContent = `Welcome, ${user.username}!`;
} else {

  window.location.replace('./login.html');
}

function logout() {

  localStorage.removeItem('login');
  

  window.location.replace('./login.html');
}
