import { useState, useEffect } from 'react'

//initialized my states for storing fetched posts and to store my error message 
function App() {
  const [ posts, setPosts] = useState([]);
  const [ error, setError] = useSstate(null);

useEffect(() => {
  const fetchPosts = async ()=> {
    try {
      const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) { 
        throw new Error("Data fetching failed");
      }
      const data = await response.json();
      setPosts(data);
    } catch(error) {
      setError(error.message);
    }
  };
  fetchPosts();
}, []);






  return (
    <>t
      <div>
     
      </div>
      <h1>Vite + React</h1>
      <div className="card">

      </div>
      
    </>
  )
}

export default App
