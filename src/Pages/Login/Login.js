import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading] =
    useSignInWithGoogle(auth);
  const [token, setToken] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [googleUser, navigate, token]);

  if (googleUser) {
    const email = googleUser?.user?.email;
    const currentUser = { email: email };
    console.log(email, currentUser);
    if (email) {
      const url = `http://localhost:5000/user/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          
        });
    }
  }

  if (googleLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-10">
      <h2 className="text-center text-3xl text-purple-700 font-bold">
        Task List
      </h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Social Login */}
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
