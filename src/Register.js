import stu from "./Images/stureg.jpg"
import axios from "axios"
import {  useState } from "react"



const Register=()=>{

const[input,setInput]=useState({})



const Handleinput=(e)=>{
const name=e.target.name
const value=e.target.value

setInput(values=>({...values,[name]:value}))


}

const inputsave=()=>{
    window.location.reload(false); 
axios.post("https://nodeapps-qbei.onrender.com/stusave",input).then(()=>{
    console.log("data save")
    
})
}



    return(
        <>
<div className="stureg"> 
<img src={stu}/>       
<div id="record">
<h1 style={{color:"red"}}>Student Records</h1>    
<label>RollNo</label>
<input type="text" name="rollno" value={input.rollno}  onChange={Handleinput} placeholder="Eneter RollNo"></input>
<label>Name</label>
<input type="text" name="name" value={input.name}  onChange={Handleinput} placeholder="Eneter Name"></input>
<label>City</label>
<input type="text" name="city" value={input.city} onChange={Handleinput} placeholder="Eneter City"></input>
<label>Fess</label>
<input type="text" name="fess" value={input.fess} onChange={Handleinput} placeholder="Eneter Fess"></input>

<button style={{marginTop:"8px"}} onClick={inputsave}>Submit</button>

</div>
  
</div>




        </>
    )
    
    }
export default Register


