import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SKInput from "../components/SKInput";
import { fbLogin } from "../config/firebase/firebasemethods";
import { useDispatch } from "react-redux";
import { add } from "../config/redux/reducers/userSlice";

export default function Login() {
  const [model, setModel] = useState<any>({});
  const dispatch = useDispatch();

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let loginUser = (e: any) => {
    console.log(model);
    e.preventDefault();
    fbLogin(model)
      .then((res: any) => {
        console.log(res);
        dispatch(add({ ...res }));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-main">
        <div className="form-main flex flex-col justify-center">
          <span className="bg-style"></span>
          <div className="row">
            <div className="col-lg-6">
              <div className="signup-form flex flex-col justify-center p-4">
                <h1 className="text-3xl font-medium my-3 text-white">Log In</h1>
                <div className="input-box my-2">
                  <SKInput
                    type="email"
                    placeholder="Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      fillModel("email", e.target.value)
                    }
                  />
                </div>
                <div className="input-box my-2">
                  <SKInput
                    type="password"
                    placeholder="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      fillModel("password", e.target.value)
                    }
                  />
                </div>
                <div className="btn-main my-3">
                  <button
                    className="SKbtn w-100 rounded-pill fw-bold"
                    onClick={loginUser}
                  >
                    Login In
                  </button>
                </div>
                <div className="reg-link text-center">
                  <p className="text-white">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 flex justify-end items-center">
              <div className="signup-context pe-4">
                <h1 className="text-white">Welcome</h1>
                <h1 className="text-white">Back!</h1>
                <p className="text-white text-2xl fw-bold">We missed you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
