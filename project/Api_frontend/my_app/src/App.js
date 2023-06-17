
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/form';
import {useCookies, removeCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
function App() {
  const [articles, setArticles] = useState([])
  const [editarticles, setEditArticles] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate()
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/articles/',{
    'method': 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token['mytoken']}`,
    }
  })
  .then(res=>res.json())
  .then(data=>setArticles(data))
  .catch(err=>console.log(err))
}, [])


  const editBtn = (article) =>{
    setEditArticles(article)
  }

  const deleteBtn = (article) =>{
    const new_article = articles.filter(myarticle =>{
      if(myarticle.id === article.id){
        return false
      }else{
        return true
      }
    })
    setArticles(new_article)
  }

  const updatedInformation = (article) =>{
    const new_article = articles.map(myarticle =>{
      if(myarticle.id === article.id){
        return article
      }else{
        return myarticle
      }
    })
    setArticles(new_article)
  }

  const articleForm = () =>{
    setEditArticles({title:'', description:''})
  }
  

  const logoutBtn = () =>{
    removeToken(['mytoken'])
  }

  useEffect(()=>{
    if(!token['mytoken']) navigate('/')
  },[token])

  const insertedInformation = (article) =>{
    const new_article = [...articles, article]
    setArticles(new_article)
  }
  return (
    <div className='App'>
    
      
      <div className='row'>
        <div className='col'>
            <h1>APP</h1>
        </div>
        <div  className='col-md-3'>
          <button onClick={articleForm} className='btn btn-primary'>Add Article</button>
        </div>
        <div  className='col-md-6'>
          <button onClick={logoutBtn} className='btn btn-primary'>LogOut</button>
        </div>
      </div>
      <ArticleList articles={articles} editBtn= {editBtn} deleteBtn={deleteBtn}/>
     {
      editarticles ? <Form article={editarticles}
      insertedInformation={insertedInformation}
       updatedInformation={updatedInformation}/> : null
     }
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