import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SKInput from "../components/SKInput";
import { fbSignUp } from "../config/firebase/firebasemethods";
import SKSelect from "../components/SKSelect";

export default function SignUp() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    console.log(model);
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    model.user = "user";
    fbSignUp(model)
      .then((res: any) => {
        navigate("/login");
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
                <h1 className="text-3xl font-medium my-3 text-white">
                  Sign Up
                </h1>
                <div className="input-box my-2">
                  <SKInput
                    type="text"
                    placeholder="Full Name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      fillModel("fullName", e.target.value)
                    }
                  />
                </div>
                <div className="input-box my-2">
                  <SKInput
                    type="text"
                    placeholder="User Name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      fillModel("userName", e.target.value)
                    }
                  />
                </div>
                <div className="input-box my-2">
                  <SKInput
                    type="text"
                    placeholder="Contact No"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      fillModel("contactNo", e.target.value)
                    }
                  />
                </div>
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
                <div className="input-box my-2">
                  <SKSelect
                    handleChange={(e: any) =>
                      fillModel("bloodgroup", e.target.value)
                    }
                    value={model.bloodgroup}
                    optionsList={["O", "A", "B", "AB"]}
                    label="Blood Group"
                  />
                </div>
                <div className="btn-main my-3">
                  <button
                    className="SKbtn w-100 rounded-pill fw-bold "
                    onClick={signUpUser}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="reg-link text-center">
                  <p className="text-white">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 flex justify-end items-center">
              <div className="signup-context pe-4">
                <h1 className="text-white">Lets</h1>
                <h1 className="text-white">Sign Up!</h1>
                <p className="text-white text-2xl fw-bold">
                  It's easy and fast...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
