import { useState } from "react"
import axios from "axios"
import Studentdisplay from "./Studisplay"

const Search=()=>{
    const [rollno,setRollno]=useState("")
    const [stuData,setstuData]=useState([])

 const handleinput=()=>{
    axios.post("https://nodeapps-qbei.onrender.com/stusearch", {rollno:rollno}).then((res)=>{
    setstuData(res.data)
    document.getElementById("seachdata").style.display="block"

    })
 }

 const myData=stuData.map((key)=>
    <Studentdisplay
rno={key.rollno}
nm={key.name}
ct={key.city}
fs={key.fess}

/>)
 



return(
    <>
   <div className="srerch">
    <div className="main">
    <h1 style={{color:"blue"}}>Student Search</h1>
    <label>Enter rollno</label> : <input type="text" name="rollno" onChange={(e)=>{setRollno(e.target.value)}}/>
    <button style={{marginTop:"8px"}} onClick={handleinput}>Search</button>

    <div id="seachdata">
    <table border="1">
<tr>
<td>RollNo</td>
<td>Name</td>
<td>City</td>
<td>Fess</td>
</tr>
{myData}
</table>
</div>
</div>
</div>




    </>
) 
}

export default Search