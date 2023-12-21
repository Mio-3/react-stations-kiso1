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
      <div>
        <h1>掲示板</h1>
        <header>新着スレッド</header>
      </div>
  )
};


export default App;
