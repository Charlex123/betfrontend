import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usernameIcon from "../assets/icons/user-login.png";
import passwordIcon from "../assets/icons/pass-login.png";
import validationIcon from "../assets/icons/shield (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import AlertMessage from '../components/AlertMessage';
import AlertError from '../components/AlertError';
import Loading from '../components/Loading'


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const min = 100000; // Smallest 6-digit number
  const max = 999999; // Largest 6-digit number
  const rannum = Math.floor(Math.random() * (max - min + 1)) + min;
  const [randNum, setRandNum] = useState(rannum);
  // alert(randNum)
  const goToPreviousPage = () => {
    navigate(-1); // Navigate to the previous page
  };


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [messagecontent, setMessageContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, setErrorMesage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const email = e.target[0].value;
  //   const password = e.target[1].value;

  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     window.location.reload()
  //   } catch (err) {
  //     setErr(true);
  //   }
  // };

  // const handleValidationCode = (e) => {
  //   alert(rannum)
  //   setRandNum(rannum)
  //   setRandNumInput(e.target.value);
    
  //   console.log('rannum',rannum)
  //   console.log('ran num',randNum)
  //   console.log('set ran num input',e.target.value)
  //   console.log('ran num input',randNumInput)
  // }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }  
      setLoading(true)
      console.log(username)
      console.log(password)
      const randnuminput = document.getElementById("validationcode").value;
      if(randnuminput) {
        // alert(randnuminput);
        // console.log('rand ---input',randnuminput)
        // console.log('rand num ',randNum)
        // if(randNum !== randnuminput) {
        //   setError("Incorrect Validation Code")
        // }else {
          const {data} = await axios.post("http://localhost:9000/api/users/signin", {
            username,
            password
          }, config);
          localStorage.setItem("userInfo", JSON.stringify(data));
          console.log('login res data',data)
          console.log('login res username',data.username)
          setLoading(false)
          if(data.username !== undefined) {
            if(data.usertype === "Admin") {
              navigate(`/admin/`)
            }else if(data.usertype === "SuperAgent") {
              navigate(`/super/`)
            }else if(data.usertype === "MasterAgent") {
              navigate(`/master/`)
            }else if(data.usertype === "User") {
              navigate(`/home/`)
            }
          }else {
            setError(true)
            setErrorMesage("Invalid Login Details")
          }
          
        }else {
          setError(true)
          setErrorMesage("Enter Validation Code")
        }
      // }else {
      //   setError("enter validation code")
      // }
      
      
    } catch (error) {
      setError("Oops! something happened, try again")
      // console.log(error.response.data)
    }
  }
  return (
    <div className=" fixed left-0 right-0 top-0 bottom-0 z-50 max-w-[480px] mx-auto login-bg">
      <div className="w-full h-full bg-white rounded-t-xl py-6 flex items-center flex-col fixed top-[40%] left-0 right-0 max-w-[480px] mx-auto">
        <div className="formWrapper w-5/6">
          <h2 className=" text-center text-3xl text-black">LOGIN</h2>
          {error && <AlertError variant="danger">{errormessage}</AlertError>}
          {message && <AlertMessage variant="danger">{messagecontent}</AlertMessage>}
          {loading && <Loading />}
          <form  className="flex flex-col gap-y-6 mt-3 sm:mt-6">
            <div className="relative">
              <input
                className="px-[10px] h-10 pl-12 rounded-lg w-full border border-gray-400 text-lg"
                type="text"
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username"
              />
              <img src={usernameIcon} className="absolute w-5 h-5 text-gray-400 left-3 top-[10px]" alt="email" />
            </div>
            
            <div className="relative">
              <input className="px-[10px] h-10 pl-12 rounded-lg w-full border border-gray-400 text-lg" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              <img src={passwordIcon} className="absolute w-5 h-5 text-gray-400 left-3 top-[10px]" alt="email" />
            </div>
            <div className="relative">
              <input className="px-[10px] h-10 pl-12 rounded-lg w-full border border-gray-400 text-lg" type="number" id="validationcode" placeholder="Validation Code" />
              <img src={validationIcon} className="absolute w-5 h-5 text-gray-400 left-3 top-[10px]" alt="validate" />
              <p className=" text-black font-bold text-xl absolute right-2 top-1">{randNum}</p>
            </div>
            <button className=" h-10 text-base font-bold bg-primary rounded text-black flex items-center justify-center w-1/2 mx-auto" type="button" onClick={submitHandler}>Log In</button>
            {err && <span className="text-red-200">Something went wrong</span>}
          </form>
        </div>
      </div>
      <div onClick={goToPreviousPage} className=" w-9 h-9 rounded-full bg-white absolute left-2 top-2 flex items-center justify-center cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[#1e1e1e] text-lg" />
      </div>
    </div>
  );
};

export default Login;
