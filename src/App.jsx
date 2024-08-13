import { useState, useEffect } from 'react'

//initialized my states for storing fetched posts and to store my error message 
function App() {
  const [ posts, setPosts] = useState([]);
  const [ error, setError] = useSstate(null);



  
  return (
    <>
      <div>
     
      </div>
      <h1>Vite + React</h1>
      <div className="card">

      </div>
      
    </>
  )
}

export default App
