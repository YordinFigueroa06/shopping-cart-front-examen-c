document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log('valores leidos del formulario', {email, password})
    login(email, password)
})

fetch('https://dummyjson.com/user/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30,
  }),
})
.then(res => res.json())
.then(console.log);

