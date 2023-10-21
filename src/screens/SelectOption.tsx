import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";

export default function SelectOption() {

  const navigate = useNavigate();

  let donor = ()=>{
    navigate("/donor");
  }

  let acceptor = ()=>{
    navigate("/acceptor");
  }

  return (
    <>
      <div
        className="flex flex-column justify-center items-center bg-dark"
        style={{ height: "100vh" }}
      >
        <h1 className="text-white">Welcome to the Blood Bank Application</h1>
        <h3 className="text-white">You are ?</h3>
        <div>
          <Button className="m-3 red-btn" sx={{backgroundColor: "#c1121f"}} variant="contained" onClick={donor}>Donor</Button>
          <Button className="m-3 red-btn" sx={{backgroundColor: "#c1121f"}} variant="contained" onClick={acceptor}>Acceptor</Button>
        </div>
      </div>
    </>
  );
}
