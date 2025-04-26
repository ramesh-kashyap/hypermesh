import React, { useState } from "react";
import Api from "../../Requests/Api";
import { useNavigate,Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    sponsor: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await Api.post("/register", {
        sponsor: formData.sponsor,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation, // 👈 Important!
      });

      if (response.data.status) {
        toast.success(response.data.message || "Registered successfully!");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error.response?.data); // 👈 Helpful during debugging
      // Show Laravel validation errors if present
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        Object.values(errors).forEach((errArray) => {
          toast.error(errArray[0]);
        });
      } else {
        toast.error(error.response?.data?.error || "Something went wrong!");
      }
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
                  <uni-text
                    data-v-45a6b600=""
                    data-v-2b56ecaf=""
                    class=""
                    style={{ color: "rgb(53, 247, 231)", fontSize: "30px" }}
                  ></uni-text>
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="language">
                  <img
                    data-v-2b56ecaf=""
                    src="/static/img/icon-lang.png"
                    alt=""
                  />
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="welcome">
                  Welcome Back!
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="welcome-tips">
                  Good to see you here! Add your account details to continue{" "}
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="input-box">
                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Username
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/user.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            {/* <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2b56ecaf="" style={{ display: 'none' }}>Please Enter Username</div> */}
                            <input
                              maxLength="140"
                               
                              type="text"
                              name="sponsor"
                              value={formData.sponsor}
                             onChange={handleChange}
                             
                              className="uni-input-input"
                              required
                             
                              placeholder="Enter your username"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Email
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                          src="/static/img/email-fill.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            {/* <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2b56ecaf="" style={{ display: 'none' }}>Please Enter password</div> */}
                            <input
                              maxlength="140"
                            
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                               
                              type="email"
                              name="email"
                              required
                              className="uni-input-input"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Password
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/lock.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            {/* <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2b56ecaf="" style={{ display: 'none' }}>Please Enter password</div> */}
                            <input
                              maxlength="140"
                              step=""
                              enterkeyhint="done"
                               
                              type="password"
                              value={formData.password}
                              onChange={handleChange}
                              name="password"
                              placeholder="Enter your password"
                              required
                              className="uni-input-input"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Confirm Password{" "}
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/lock.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            {/* <div
                              class="uni-input-placeholder uni-easyinput__placeholder-class"
                              data-v-30449abe=""
                              data-v-2b56ecaf=""
                              style={{ display: "none" }}
                            >
                              Please Enter password
                            </div> */}
                            <input
                              maxlength="140"
                              step=""
                              enterkeyhint="done"
                               
                              type="password"
                              name="password_confirmation"
                              
                              value={formData. password_confirmation}
                             onChange={handleChange}

                              required
                              className="uni-input-input"
                              placeholder="Enter your c_password"

                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view
                    data-v-90aab294=""
                    class="check-box"
                    style={{marginTop: '10px'}}
                  >
                    <uni-checkbox-group data-v-90aab294="">
                      <uni-label
                        data-v-90aab294=""
                        class="warning-text uni-label-pointer"
                      >
                        <uni-checkbox
                          data-v-90aab294=""
                          style={{transform: 'scale(0.7)'}}
                        >
                          <div class="uni-checkbox-wrapper">
                            <div
                              class="uni-checkbox-input uni-checkbox-input-checked"
                              style={{color: 'rgb(0, 0, 0)'}}
                            ></div>
                          </div>
                        </uni-checkbox>
                        <uni-text data-v-90aab294="" class="agreement-tips">
                          <span>
                            I have read and agree to the following agreement:
                          </span>
                        </uni-text>
                        <uni-text data-v-90aab294="" class="agreement">
                          <span>"AML/CFT Policy"</span>
                        </uni-text>
                        ,
                        <uni-text data-v-90aab294="" class="agreement">
                          <span>"FIREFLY STAR LLC User Agreement"</span>
                        </uni-text>
                      </uni-label>
                    </uni-checkbox-group>
                  </uni-view>

                  <button
                    data-v-2b56ecaf=""
                    class="login"
                    style={{ width: "100%" }}
                    onClick={handleRegister}
                  >
                    Register
                  </button>

                  <uni-view data-v-2b56ecaf="" class="register">
                    Don't have an account?
                    <Link to="/login"style={{textDecorationLine:'none'}}><uni-view data-v-2b56ecaf="" class="create">Log in</uni-view></Link>
                  </uni-view>
                </uni-view>
              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>
      </uni-app>
    </div>
  );
};

export default Register;
