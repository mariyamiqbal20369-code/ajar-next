'use client';
import{ useState, useEffect, useRef } from "react";
import Link from "next/link";
import CustomButton from "./components/CustomButton";

export default function HomePage(){
  const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[counter, setCounter] = useState(0);
const[students, setStudents] = useState([
  "Ayesha",
  "Ali",
  "Ahmed",
  "Hassan"
]);
const[astudents, setAStudent] = useState("");
function login(){
  if(!email.includes("@")){
    alert("Email Wrong");
  }
  else if(password.length < 8){
    alert("password must b 8 digits");
  }
  else{
    alert("Login Successful");
  }
}
const nameRef = useRef<HTMLInputElement>(null);
useEffect(()=>{
  console.log(nameRef.current?.value)
})
const handleSubmit = (e:any) => {
  e.preventDefault();
  alert()

}
const addtoArray = () => {
  
}



  return(
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-amber">
      <div className="grid w-full max-w-md gap-8 rounded-2xl bg-gray-300 p-8 shadow-xl sm:p-50">
        <p>Mariyam</p>
        <input type="text" onChange={(e) => setAStudent(e.target.value)}/>
        <button onClick={addtoArray} className="bg-gray-800 text-white p-3">add</button>
        {
          students.map((student, index) => {
            return (<>
            <p className="text -gray-900">
              {student}
              </p>
              </>

            )
          }

          )
        }
      </div>
      <div className="grid gap-4 justify center">
      <h1 className="text-black-300 font-bold">Admin Login</h1>
   <input type="text"placeholder="Email" onChange={(e) => setEmail(e.target.value)}  className=" text-black-800 border border-green-800 p-2 sm:p-8" onSubmit={handleSubmit}></input>
      <input type="password"placeholder="Password" onChange={(e) => setPassword(e.target.value)}className=" text-black-700 border border-green-800 p-2" ></input>   

      
<button onClick={login} className="bg-green-800 text-black-300 roun p-1">Login</button>

<p className="text-black-300 bg-amber-800"> { counter }</p>
<button className="bg-green-800 border border rounded"onClick={ () => setCounter(counter+1)}>Add</button>
<button className="bg-green-800 border border rounded"onClick={ () => setCounter(counter-1)}>Subtraction</button>
<CustomButton label="Name"></CustomButton>


</div>
    </main>
  )
}