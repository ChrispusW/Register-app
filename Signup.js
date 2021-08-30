
import React,{ useState,useEffect} from "react"
import db from "./firebase";
import "./Signup.css"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//function to register a user
const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [university,setUniversity]=useState("");
    const [year,setYear]=useState("");
    const [program,setProgram]=useState("");
    const [gender,setGender]=useState("");
    const[agree,setAgree]=useState("");
    const[password,setPassword]=useState("");

    const [loader,setLoader]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoader(true);
        db.collection("users")
        .add({name:name,
        email:email,
         university:university,
         year:year,
         program:program,
         gender:gender,
         agree:agree,
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
         setName("");
         setEmail("");
         setUniversity("");
         setYear("");
         setProgram("");
         setAgree("");
         setGender("");
         setPassword("");
         toast.success('You have registered succesfully',{position:toast.POSITION.TOP_CENTER}) 
    };
//export function Signup() {
    return (
        <div className="Signup-container">
            
           <form className="form-group" onSubmit={handleSubmit}>
               <h4 className="signup-text">Register with stratcom <i className="fas fa-user-tie"></i></h4>
                
                <label>Name:
                   <input className='form-control-auto' type="text"name="name" value={name}onChange={(e)=>setName(e.target.value)} required placeholder="name"></input><br></br>
               </label><br></br>
               <label>Password:
                   <input className='form-control-auto' type="password"name="password" value={password}onChange={(e)=>setPassword(e.target.value)} required placeholder="input password"></input><br></br>
               </label>
               <br></br>
               <label>Email:
                   <input className='form-control-auto' type="email" name="email"value={email}onChange={(e)=>setEmail(e.target.value)} required placeholder="example@gmail.com"></input>
               </label><br></br>
               <label>Gender:
                   <input type="radio"name="gender"value={gender}onChange={(e)=>setGender(e.target.value)}></input><label>Female</label>
                   <input type="radio"name="gender"value={gender}onChange={(e)=>setGender(e.target.value)}></input><label>male</label><br></br>
               </label>
               <br>
               </br>University:
               <label>
                   <input className='form-control-auto' type="text"name="school" value={university}onChange={(e)=>setUniversity(e.target.value)}required placeholder="university"></input>
               </label><br></br>
               <label >Year of study
                   <input className='form-control-auto' type="text" name="year of study"value={year}onChange={(e)=>setYear(e.target.value)} required placeholder="eg year 2"></input>
               </label><br></br>
               <label >Course/Program
                   <input className='form-control-auto' type="text" name="Course"value={program}onChange={(e)=>setProgram(e.target.value)} required placeholder="Bist"></input>
               </label>
               <br></br>
               <div><label>
               <input className='class="form-check-input"' type="checkbox"name="checkbox"value={agree}onChange={(e)=>setAgree(e.target.value)}></input><br></br></label>By clicking submit means you have agreed stratcom terms and policies</div>
               <button className='btn btn-primary'  type="submit">SUBMIT</button>
               </form> 
        </div>
        )
        }
export default Signup