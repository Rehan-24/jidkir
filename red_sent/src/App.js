import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  
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


  

  return(
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
  )
}

export default App;