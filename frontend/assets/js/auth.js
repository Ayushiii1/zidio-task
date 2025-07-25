document.getElementById('loginForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  if (!username || !password) return alert('All fields required');
  const res = await fetch('/api/auth/login', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem('userId', data.userId);
    window.location = 'dashboard.html';
  } else alert(data.error);
});

document.getElementById('registerForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  if (!username || !password) return alert('All fields required');
  const res = await fetch('/api/auth/register', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (data.success) {
    alert('Registered! Please login.');
    window.location = 'login.html';
  } else alert(data.error);
});