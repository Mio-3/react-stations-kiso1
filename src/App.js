import React, { useEffect, useState } from 'react';
import axios from 'react';




export const App = () => {
    const [threads,setThreads] = useState([]);
    useEffect(() => {
      fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then(response => response.json())
      .then(threads => console.log(threads))
    });
    
  
    return (
      <div className='threadlist'>
        <h1>新着スレッド</h1>
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
      </div>
  )
};


export default App;
