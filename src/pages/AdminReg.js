import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usernameIcon from "../assets/icons/user-login.png";
import passwordIcon from "../assets/icons/pass-login.png";
import validationIcon from "../assets/icons/shield (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPhone, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import AlertMessage from '../components/AlertMessage';
import AlertError from '../components/AlertError';
import Loading from '../components/Loading'


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  // alert(randNum)
  const goToPreviousPage = () => {
    navigate(-1); // Navigate to the previous page
  };


  const [userCommission, setUserCommission] = useState('');
  const [agentCommission, setAgentCommission] = useState('');
  const maxAgentCommission = 3;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [userreferrence, setUserReferrence] = useState("");
  const [userType] = useState("Admin");
  const [tpin, setTPin] = useState(1234);
  const [PBU, setPBU] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status] = useState("Inactive");
  const [phonenumber, setPhonenumber] = useState("");
  const [timezone, setTimeZone] = useState("Pacific/Midway");
  const [passwordinputType, setpasswordinputType] = useState("password");

  const [udetails,setUdetails] = useState("")
  const [upline,setUpline] = useState("")
  const [uplineUserType] = useState("");
  
  useEffect(() => {
    if(localStorage.getItem("userInfo") !== null) {
      setUdetails(localStorage.getItem("userInfo"));
      setUpline(JSON.parse(localStorage.getItem("userInfo")).username)
    }

  },[udetails,upline])

  const handleAgentCommissionChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) <= maxAgentCommission && !isNaN(value))) {
      setAgentCommission(value);
    }
  };

  useEffect(() => {

  },[])


  const onhandleSelectChange = (e) => {
    setTimeZone(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('uname',username)
    if (password !== confirmpassword) {
      setError("Passwords do not match");
    }else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }  
        
        setLoading(true);
        const {data} = await axios.post("http://localhost:9000/api/users/register", {
          username,
          userType,
          email,
          phonenumber,
          PBU,
          upline,
          uplineUserType,
          userCommission,
          agentCommission,
          tpin,
          status,
          password,
          timezone,
          userreferrence,
          pic
        }, config);
  
        console.log('Reg response data',data)
        localStorage.setItem("userInfo", JSON.stringify(data))
        navigate('/admin/');
      } catch (error) {
        setError(error.response.data.message)
        console.log(error.response.data)
      }
  }
  
}
  return (
    <div className=" fixed left-0 right-0 top-0 bottom-0 z-50 max-w-[480px] mx-auto login-bg">
      <div className="w-full h-full bg-white rounded-t-xl py-6 flex items-center flex-col fixed top-[10%] left-0 right-0 max-w-[480px] mx-auto">
        <div className="formWrapper w-5/6">
          <h2 className=" text-center text-xl text-black">Create Admin Account</h2>
          {error && <AlertError variant="danger">{error}</AlertError>}
          {message && <AlertMessage variant="success">{message}</AlertMessage>}
          {loading && <Loading />}
          <form  className="flex flex-col gap-y-6 mt-3 sm:mt-6">
          <div className="relative">
              <input
                className="px-[10px] h-8 pl-12 rounded-lg w-full border border-gray-400 text-md"
                type="text"
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
              />
              <img src={usernameIcon} className="absolute w-5 h-4 text-gray-400 left-3 top-[8px]" alt="email" />
            </div>
            <div className="relative">
              <input
                className="px-[10px] h-8 pl-12 rounded-lg w-full border border-gray-400 text-md"
                type="text"
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username"
              />
              <img src={usernameIcon} className="absolute w-5 h-4 text-gray-400 left-3 top-[8px]" alt="email" />
            </div>
            <div className="relative">
              <input className="px-[10px] h-8 pl-12 rounded-lg w-full border border-gray-400 text-md" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              <img src={passwordIcon} className="absolute w-5 h-4 text-gray-400 left-3 top-[8px]" alt="password" />
            </div>
            <div className="relative">
              <input className="px-[10px] h-8 pl-12 rounded-lg w-full border border-gray-400 text-md" onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
              <img src={passwordIcon} className="absolute w-5 h-4 text-gray-400 left-3 top-[8px]" alt="confirm password" />
            </div>
            <div className="relative">
              <input
                className="px-[10px] h-8 pl-12 rounded-lg w-full border border-gray-400 text-md"
                type="text"
                onChange={(e) => setPhonenumber(e.target.value)} 
                placeholder="Phonenumber"
              />
              <FontAwesomeIcon icon={faPhone} className="absolute w-5 h-4 text-gray-400 left-3 top-[8px]"/>
            </div>
            <div className="relative">
              <input
                className="px-[10px] h-8 pl-12 rounded-lg w-full border border-gray-400 text-md"
                type="text"
                placeholder={userType}
                value={userType}
              />
              <FontAwesomeIcon icon={faUserPlus} className="absolute w-5 h-4 text-gray-400 left-3 top-[8px]"/>
              {/* <img src={usernameIcon} className="absolute w-5 h-4 text-gray-400 left-3 top-[8px]" alt="email" /> */}
            </div>
            <div className="relative">
            <label className="block font-medium w-full text-start">Time Zone</label>
                
                <select className=" px-[10px] h-8 pl-12 rounded-lg w-full border border-gray-400 text-md" name="timezone" id="timezone" onChange={onhandleSelectChange}>
                  <option value="Pacific/Midway">Pacific/Midway(GMT-11:00)</option>
                  <option value="Pacific/Honolulu GMT-10:00">Pacific/Honolulu(GMT-10:00)</option>
                  <option value="America/Juneau GMT-9:00">America/Juneau(GMT-9:00)</option>
                  <option value="America/Los_Angeles GMT-8:00">America/Los_Angeles(GMT-8:00)</option>
                  <option value="Europe/London GMT+0:00">Europe/London(GMT+0:00)</option>
                  <option value="Europe/Paris GMT+1:00">Europe/Paris(GMT+1:00)</option>
                  <option value="Africa/Cairo GMT+2:00">Africa/Cairo(GMT+2:00)</option>
                  <option value="Asia/Qatar GMT+3:00">Asia/Qatar(GMT+3:00)</option>
                  <option value="Asia/Dubai GMT+4:00">Asia/Dubai(GMT+4:00)</option>
                  <option value="Asia/Karachi GMT+5:00">Asia/Karachi(GMT+5:00)</option>
                  <option value="IST GMT+5:30">IST(Bangalore / Bombay / New Delhi)(GMT+5:30)</option>
                  <option value="Asia/Kathmandu GMT+5:45">Asia/Kathmandu(GMT+5:45)</option>
                  <option value="Asia/Colombo GMT+6:00">Asia/Colombo(GMT+6:00)</option>
                  <option value="Asia/Katmandu GMT+5:45">Asia/Katmandu(GMT+5:45)</option>
                  <option value="Asia/Almaty GMT+6:00">Asia/Almaty(GMT+6:00)</option>
                  <option value="Asia/Bangkok GMT+7:00">Asia/Bangkok(GMT+7:00)</option>
                  <option value="Asia/Hong_Kong GMT+8:00">Asia/Hong_Kong(GMT+8:00)</option>
                  <option value="Asia/Tokyo GMT+9:00">Asia/Tokyo(GMT+9:00)</option>

                </select>
            </div>
            <button className=" h-8 text-base font-bold bg-primary rounded text-black flex items-center justify-center w-1/2 mx-auto" type="button" onClick={submitHandler}>Register</button>
            {err && <span className="text-red-200">Something went wrong</span>}
          </form>
        </div>
      </div>
      <div onClick={goToPreviousPage} className=" w-9 h-9 rounded-full bg-white absolute left-2 top-2 flex items-center justify-center cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[#1e1e1e] text-md" />
      </div>
    </div>
  );
};

export default Login;
