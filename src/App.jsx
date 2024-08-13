import { useState, useEffect } from 'react'

//initialized my states for storing fetched posts and to store my error message 
function App() {
  const [ posts, setPosts] = useState([]);
  const [ error, setError] = useState(null);

//Useffect to fetch data from the API when the componenet monts 
  useEffect(() => {
    //function to handle the data fetching and error hanlding process used async
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

//Error handling if the state is null, the div component renderes the error message image 
if (error) {
  return <div>
    <img src="images/error-message.png" alt="Data fetching failed" />
  </div>;
}

//Rendering the UI
return (
  <div>
    <h1>Blog Posts</h1>
    {posts.length > 0 ? (
      posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}

export default App
