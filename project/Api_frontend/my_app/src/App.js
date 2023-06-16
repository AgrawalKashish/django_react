
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/articles/',{
    'method': 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token 563cbb137888efeb519bc121bd6192957d6e5884',
    }
  })
  .then(res=>res.json())
  .then(data=>setArticles(data))
  .catch(err=>console.log(err))
}, [])

  return (
    <div className='App'>
     <h1>APP</h1>
     {articles.map(article =>{
      return (
        <div key= {article.id}> 
            
            <h2>{article.title}</h2>
            <p>{article.description}</p>
        </div>
    
      )
     })}
    </div>
  );
}

export default App;
/*
usestate
usecontext
useeffect
usereducer
*/