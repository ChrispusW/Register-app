import React from 'react'
import "./Signup.css"
export function Signup() {
    return (
        <div className="Signup-container">
            
           <form class="form">
               <h4 className="signup-text">Signup with stratcom</h4>
               <label>Name:
                   <input type="text"name="name" value="wabyona chrispus" required placeholder="name"></input><br></br>
               </label>Signin As:
               <label>
               <select name="text" required>
                   <option value="Admin" ></option>
                   <option value="Student"></option>
               </select>
               </label><br></br>
               <label>Email:
                   <input type="email" name="email"value="wabyonac7@gmail.com"required placeholder="example@gmail.com"></input>
               </label><br></br>
               <label>Gender:
                   <input type="radio"name="gender"value="Female"></input><label>Female</label>
                   <input type="radio"name="gender"value="Male"></input><label>male</label><br></br>
               </label>University:
               <label>
                   <input type="text"name="school" value=" Makerere University"required placeholder="university"></input>
               </label><br></br>
               <label >Year of study
                   <input type="text" name="year of study"value="year 2"required placeholder="eg year 2"></input>
               </label><br></br>
               <label >Course/Program
                   <input type="text" name="Course"value=""required placeholder="Bist"></input>
               </label>
               <br></br>
               <div>By clicking submit means you have agreed stratcom terms and policies</div>
               <input type="checkbox"name="checkbox"value="Agree"></input>
               <button  type="submit">SUBMIT</button>
               </form> 
        </div>
        )
        }
export default Signup