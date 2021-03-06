
import React,{ useState,useEffect} from "react"
import "./Contact.css";
import db from "./firebase";

 const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    const [loader,setLoader]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoader(true);
        db.collection("contacts")
        .add({name:name,
        email:email,
         message:message,})
         .then(()=> {
             setLoader(false);
             alert("your message has been submitted successfully we shall give you a feedback");
         })
         .catch((error)=>{
             alert(error.message);
             setLoader(false);
         });
         setName("");
         setEmail("");
         setMessage("");
    };
//export function Contact() {
    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <h2 className="form-group1"> contact us <i class="fas fa-comments"></i></h2>
            <label>name:</label>
            <input type="text" className='form-control-auto' placeholder="name"required value={name}onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Email:</label>
            <input  type="email"className='form-control-auto' placeholder="email" required value={email}onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <label>Message:<br></br> <textarea placeholder="type here your message"required className="form-control" aria-label="With textarea" value={message}onChange={(e)=>setMessage(e.target.value)}></textarea></label>
        
          <br>
          </br> <button className='btn btn-primary' type="submit">submit</button>
          <p>Let us know about your problem. you can visit us at our premises.</p>
          <strong>Thank you for choosing stratcom communications computer solutions</strong>
        </form>
        
    )
}

export default Contact
