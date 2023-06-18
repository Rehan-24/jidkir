import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  /*const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
  }

  function upload(redditTopic) {
    alert(redditTopic);
  }
*/
// hooks for using states without creating classes
// const [cont, setCount] using setCount, we can update count
// data fetching would require effect hooks, i think
const [articles, setArticles] = useState([])

useEffect(() => {
  // local host for now
  fetch('http://localhost:3000/get', {
    'method': 'GET', 
    headers:{
      'Content-Type': 'applications/json'
    }
  })
  .then(resp => resp.json())
  .then(resp => console.log(resp))
  .catch(error => console.log(error0))


}, [])

  

  return(
    <div className="App">
      <h1>Flask and React JS template by RK24</h1>
    </div>
   /*
   <div className="wrapper">
      <h1>Reddit Sentiment Tracker</h1>
      {submitting &&
       <div>Submtting Form...</div>
     }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Topic</p>
            <input topic="topic" />
          </label>
        </fieldset>
        <button
          onClick={() => {
          upload("Yomi");
          }}
        >
      Say Hello
    </button>
      </form>
    </div>
  */
  )
}

export default App;