// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Auth.css';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = () => {
//     axios.post('http://localhost:8080/auth/login', {
//       username,
//       password
//     }, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       withCredentials: true
//     }).then(response => {
//       console.log('Login success:', response);
//       if (response.data.role === 'ADMIN') {
//         // history.push('/admin');
//         alert(response.data.role);
//         let Obj={user:response.data.username,id:response.data.id,role:response.data.role}
//         sessionStorage.setItem('ADMIN',JSON.stringify(Obj))
//       } else {
//         // history.push('/user');
//         alert(response.data.role);
//         let Obj={user:response.data.username,id:response.data.id,role:response.data.role}
//         sessionStorage.setItem('USER',JSON.stringify(Obj))
//       }
//     }).catch(error => {
//       console.log('Login failed:', error);
//     });
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//         className="auth-input"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         className="auth-input"
//       />
//       <button onClick={handleLogin} className="auth-button">Login</button>
//       <a href='/register'>register</a>
//     </div>
//   );
// }

// export default Login;



//////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Auth.css';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = () => {
//     axios.post('http://localhost:8080/auth/login', {
//       username,
//       password
//     }, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       withCredentials: true
//     }).then(response => {
//       console.log('Login success:', response);
//       const userData = response.data;
//       if (userData.role === 'ADMIN') {
//         history.push({
//           pathname: '/admin',
//           state: { userData }
//         });
//       } else {
//         history.push({
//           pathname: '/user',
//           state: { userData }
//         });
//       }
//     }).catch(error => {
//       console.log('Login failed:', error);
//     });
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//         className="auth-input"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         className="auth-input"
//       />
//       <button onClick={handleLogin} className="auth-button">Login</button>
//       <a href='/register'>register</a>
//     </div>
//   );
// }

// export default Login;
// //////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Auth.css';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = () => {
//     axios.post('http://localhost:8080/auth/login', {
//       username,
//       password
//     }, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       withCredentials: true
//     }).then(response => {
//       console.log('Login success:', response);
//       const userData = response.data;
//       if (userData.role === 'ADMIN') {
//         history.push({
//           pathname: '/admin',
//           state: { userData }
//         });
//       } else {
//         history.push({
//           pathname: '/user',
//           state: { userData }
//         });
//       }
//     }).catch(error => {
//       console.log('Login failed:', error);
//     });
//   };
  
//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//         className="auth-input"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         className="auth-input"
//       />
//       <button onClick={handleLogin} className="auth-button">Login</button>
//       <a href='/register'>register</a>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    axios.post('http://localhost:8080/auth/login', {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then(response => {
      console.log('Login success:', response.data);
      const role = response.data.role;
      const userObj = {
        user: response.data.username,
        id: response.data.id,
        role: response.data.role
      };
console.log(userObj);
      if (role === 'ADMIN') {
        sessionStorage.setItem('user', JSON.stringify(userObj));
        history.push('/user'); // Redirect to admin dashboard
      } else if (role === 'USER') {
        sessionStorage.setItem('user', JSON.stringify(userObj));
        history.push('/admin'); // Redirect to user dashboard
      }
    }).catch(error => {
      console.error('Login failed:', error);
    });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="auth-input"
      />
      <button onClick={handleLogin} className="auth-button">Login</button>
      <a href='/register'>register</a>
    </div>
  );
}

export default Login;

