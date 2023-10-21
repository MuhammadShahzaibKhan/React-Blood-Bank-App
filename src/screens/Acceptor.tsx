import { useState, useEffect } from "react";
import { fbGet, fbLogOut } from "../config/firebase/firebasemethods";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Donor() {
  const [user, setUser] = useState<any>([]);
  const navigate = useNavigate();
  const userData = useSelector((data: any) => data.user);
  console.log(userData);
  const blood = userData && userData && userData.personalDetails.bloodgroup;

  const O = "O";
  const A = "A";
  const B = "B";
  const AB = "AB";

  let loginUser = () => {
    fbGet("users")
      .then((res: any) => {
        // setUser(res);
        if (blood == O) {
          const b = res.filter((x: any) => x.bloodG == blood);
          setUser([...b]);
        }
        if (blood == A) {
          const a = res.filter((x: any) => x.bloodG == O);
          const b = res.filter((x: any) => x.bloodG == blood);
          setUser([...a, ...b]);
        }
        if (blood == B) {
          const a = res.filter((x: any) => x.bloodG == O);
          const b = res.filter((x: any) => x.bloodG == blood);
          setUser([...a, ...b]);
        }
        if (blood == AB) {
          const a = res.map((x: any) => x);
          setUser([...a]);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loginUser();
  }, []);

  let donor = () => {
    navigate("/donor");
  };

  let logOut = () => {
    fbLogOut()
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="main-div">
        <div className="py-4 bg-dark text-white flex justify-between items-center px-3">
          <h2>Blood Bank</h2>
          <Button
            className="m-3 red-btn"
            sx={{ backgroundColor: "#c1121f" }}
            variant="contained"
            onClick={donor}
          >
            Be a Donor
          </Button>
          <Button
            className="m-3 red-btn"
            sx={{ backgroundColor: "#c1121f" }}
            variant="contained"
            onClick={logOut}
          >
            Log Out
          </Button>
        </div>
        <div className="user-info my-5 mx-2 p-3 w-25 border border-black border-3">
          <h4>
            <span className="fw-bold">Name:</span>{" "}
            {userData.personalDetails.fullName}
          </h4>
          <h4>
            <span className="fw-bold">Contact:</span>{" "}
            {userData.personalDetails.contactNo}
          </h4>
          <h4>
            <span className="fw-bold">Blood Group:</span>{" "}
            {userData.personalDetails.bloodgroup}
          </h4>
        </div>
        <div className="table-main">
          <div className="table-heading text-center my-4">
            <h2 className="fw-bold">Available Donors</h2>
          </div>
          <div className="row">
            {user.map((x: any, i: any) => {
              return (
                <div key={i} className="col-md-3">
                  <div className="card m-3 border border-black border-2">
                    <div className="card-body">
                      <h5 className="card-title mb-3">
                        <span className="fw-bold">Name: </span>
                        {x.fullName}
                      </h5>
                      <p className="card-text">
                        <span className="fw-bold">Contact No: </span>
                        {x.contactNo}
                      </p>
                      <p className="card-text">
                        <span className="fw-bold">Email: </span>
                        {x.email}
                      </p>
                      <p className="card-text">
                        <span className="fw-bold">Blood Group: </span>
                        {x.bloodgroup}
                      </p>
                      <Button
                        className="m-3 red-btn"
                        sx={{ backgroundColor: "#c1121f" }}
                        variant="contained"
                      >
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
