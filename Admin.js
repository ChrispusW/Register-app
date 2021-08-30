
import db from "./firebase";
import React,{ useState,useEffect} from "react"
import "./Admin.css"

const Admin=()=>{
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [loader,setLoader]=useState(false);
    const handleSubmit=(e)=>{
      e.preventDefault();
      setLoader(true);
      db.collection("Admin")
      .add({email:email,
      password:password,
      })
      .then(()=> {
        setLoader(false);
        alert("your login information has been submitted successfully, you can access your account");
    })
    .catch((error)=>{
      alert(error.message);
      setLoader(false);
  });
         setEmail("");
         setPassword("");
        };
    



 //export function Admin() {
    return (
      <div className="bgimage">
      <form className="form-group" onSubmit={handleSubmit}>
      <h4 className="signup"><i className="fa fa-sign-in px-2" aria-hidden="false"></i>Signup here</h4>
      <label>Email:</label>
            <input type="email" className='form-control-auto' placeholder="name"required value={email}onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <label>Password:</label>
            <input type="password" className='form-control-auto' placeholder="Password" required value={password}onChange={(e)=>setPassword(e.target.value)}/><br></br>
    <button type="submit" className="btn btn-primary">Sign up As Admin</button>
      </form>
      </div>
    )
}

export default Admin
