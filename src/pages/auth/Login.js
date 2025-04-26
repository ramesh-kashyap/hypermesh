import React, { useState } from "react";
// import {  } from "react-router-dom";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Api from "../../Requests/Api";
const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();



    try {
      const response = await Api.post("/login", {
        username,
        password
      });
    
      if (response.data?.token) {
        const { token, message } = response.data;
        localStorage.setItem("authToken", token);
        toast.success(message || "Login successful");
        navigate("/dashboard");
      } else {
        toast.error(response.data?.message || "Invalid credentials");
        console.error("Login failed:", response.data);
      }
    
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
    
    
  };


  return (
    <div class="uni-body pages-login-login">
      <uni-app class="uni-app--maxwidth">
        <uni-page data-page="pages/login/login">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-2b56ecaf="" class="page">
                <uni-view data-v-2b56ecaf="" class="ellipse"></uni-view>
                <uni-view data-v-2b56ecaf="" class="service">
                  <uni-text data-v-45a6b600="" data-v-2b56ecaf="" class="" style={{ color: 'rgb(53, 247, 231)', fontSize: '30px' }}>

                  </uni-text></uni-view>
                <uni-view data-v-2b56ecaf="" class="language"><img data-v-2b56ecaf="" src="/static/img/icon-lang.png" alt="" /></uni-view>
                <uni-view data-v-2b56ecaf="" class="welcome">Welcome Back!</uni-view><uni-view data-v-2b56ecaf="" class="welcome-tips">Enter your Email and password to continue to your account</uni-view>
                <uni-view data-v-2b56ecaf="" class="input-box">


                  <uni-view data-v-2b56ecaf="" class="input-layer">

                    <uni-view data-v-2b56ecaf="" class="input-title">Username</uni-view>
                    <uni-view data-v-30449abe="" data-v-2b56ecaf="" class="uni-easyinput" ><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset' }}><uni-view data-v-30449abe="" class="content-clear-icon"><img data-v-30449abe="" src="/static/img/user.png" alt="" /></uni-view>  <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                      <div class="uni-input-wrapper">
                        <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2b56ecaf="" style={{ display: 'none' }}>Please Enter Username</div>
                        <input maxLength="140" autoComplete="off" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="uni-input-input" required enterKeyHint="done" />
                      </div>
                    </uni-input>
                      <uni-text data-v-45a6b600="" data-v-30449abe="" class="uni-icons content-clear-icon " style={{ color: 'rgb(192, 196, 204)', fontSize: '24px' }}><span></span></uni-text></uni-view></uni-view>

                  </uni-view>
                  <uni-view data-v-2b56ecaf="" class="input-layer">

                    <uni-view data-v-2b56ecaf="" class="input-title">Password</uni-view>
                    <uni-view data-v-30449abe="" data-v-2b56ecaf="" class="uni-easyinput" ><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset' }}><uni-view data-v-30449abe="" class="content-clear-icon"><img data-v-30449abe="" src="/static/img/lock.png" alt="" /></uni-view>  <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                      <div class="uni-input-wrapper">
                        <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2b56ecaf="" style={{ display: 'none' }}>Please Enter password</div>
                        <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="password" name="password" value={password}
                          onChange={(e) => setPassword(e.target.value)} required className="uni-input-input" />
                      </div>
                    </uni-input>
                      <uni-text data-v-45a6b600="" data-v-30449abe="" class="uni-icons content-clear-icon " style={{ color: 'rgb(192, 196, 204)', fontSize: '24px' }}><span></span></uni-text></uni-view></uni-view>

                  </uni-view>


                  <uni-view data-v-2b56ecaf="" class="forget">Forget Password?</uni-view>



                  <button data-v-2b56ecaf="" class="login" style={{ width: '100%' }} onClick={handleLogin}>Log in</button>


                  <uni-view data-v-2b56ecaf="" class="register">Don't have an account?<Link to="/register" style={{ textDecorationLine: 'none' }}><uni-view data-v-2b56ecaf="" class="create">Create Account</uni-view></Link></uni-view>
                </uni-view>
              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>


      </uni-app>

    </div>
  );
};

export default Login;
