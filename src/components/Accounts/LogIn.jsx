import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/img/login-image.png";
import loginMain from "../../assets/img/login-main.jpg";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await fetch("http://localhost:5173/login", {
      method: "POST",

      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((response) => response.json());
    if (response.status) {
      if (response.user) {
        navigate("/");
      } else {
        alert("Invalid Email or password");
      }
    } else {
      alert("Something went wrong please try again");
    }
  }
  //   const res = await fetch(
  //     "http://localhost:5173/login",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   console.log(res);
  //   if (res.status) {
  //     alert("Logged In Successfully");
  //     navigate("/Options");
  //   } else {
  //     alert("Invalid email and password");
  //   }
  // };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 lg:w-2/3 flex items-center justify-center">
          <img
            src={loginMain}
            className="w-auto object-contain md:h-screen"
            alt="Login"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/3 p-8 bg-white">
          <div
            className="bg-light bg-cover bg-center py-2 "
            style={{
              backgroundImage: `url(${loginImage})`,
              filter: "contrast(100%)",
              height: "25vh",
            }}
          ></div>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="form-input w-full py-3 px-4 border-b-2 focus:outline-none focus:border-blue-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="form-input w-full py-3 px-4 border-b-2 focus:outline-none focus:border-blue-500"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 text-center">
              <Link to="/signup" className="text-blue-800">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-4 rounded-full w-full hover:bg-blue-600"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
