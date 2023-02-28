import {  useContext,useRef } from 'react';
import AuthContext from '../components/AuthContext';
// import { useNavigate } from "react-router-dom";

export const Login=() =>{

  // const navigate = useNavigate();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState('');

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const hendelclick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://localhost:8000/api/admins',
  //       { withCredentials: true }
  //     );
  //     const { data } = response;
  //     console.log(data);
  //   } catch (err) {
  //     setErrors(err.response.data.errors.join(', '));
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/user/login', {
  //       email,
  //       password,
  //     },
  //       {
  //         withCredentials: true, // send cookies
  //       });
  //     const { data } = response;
  //     console.log(data);
  //     // TODO: Redirect to another page or perform additional actions
  //     navigate("/");
  //   } catch (error) {
  //     if (error.response.data.errors) {
  //       setErrors(error.response.data.errors.join(', '));
  //     } else if (error.response.data.error) {
  //       setErrors(error.response.data.error);
  //     }
  //     console.log(error.response.data)
  //   }
  // };


  const userName = useRef("");
  const password = useRef("");
  const { login } = useContext(AuthContext)

  const loginSubmit = async (event) => {
    event.preventDefault();
    let payload = {
      email: userName.current.value,
      password: password.current.value
    }
    await login(payload);
  };

  return (
    <div className='loginpage'>
      <h1>Login</h1>
      <form onSubmit={loginSubmit}>
        <div >
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"  ref={userName} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={password} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={hendelclick}>get all admins</button> */}
    </div>
  );
}

