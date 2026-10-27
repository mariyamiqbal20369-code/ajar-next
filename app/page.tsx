
export default function loginpage() {
  return(
    <main className="min-h-screen flex items-center justify-center">
      
      <div className="flex justify-center items-center flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold">Login Admin</h1>
        <input type="text" placeholder="email" className="w-70 p-2 border border-red-500 rounded" />

        <input type="password" placeholder="password" className="w-70 p-2 border border-blue-500 rounded" />
        <button className="w-30 p-2 bg-blue-500 font-semibold text-white rounded">login</button>
</div>
      
      
      



    </main>  
  )
}


  