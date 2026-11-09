
'use client';

import { useState } from "react";

export default function Test(){
  const [students, setStudents] = useState([
    {id:0, name:"Tayyaba", semester:6},
      {id:1, name:"kinza", semester:7},
        {id:2, name:"Esha", semester:7},
          {id:3, name:"sana", semester:6},
          {id:4, name:"Musa", semester:6}
  ])
  const promoteStudent = (index: number) => {
    console.log(index);
    setStudents((previous) => previous.map((student) => student.id == index ?{
    ...student, semester: student.semester + 1
    }  : student));
  }
  return(
    <main className="bg-cyan-400 p-9">
{
  students.map((student, index) => {
    return(<>
    <div className="border p-4 m-4">
    <h2>Student Roll no: { student.id }</h2>
    <h2>Student Name: { student.name }</h2>
    <h2>Student Semester: { student.semester }</h2>
    <button onClick={() => promoteStudent(index)}
  
    className="bg-amber-300 text-green-700 px-3 py-2 mt-2 font-bold">Promote Student</button>
    
    </div>
    
    </>

    )
  })
}

    </main>

  );
}