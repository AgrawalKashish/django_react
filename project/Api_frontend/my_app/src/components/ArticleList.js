import React from 'react'
import './css/articlelist.css'
import Apiservice from './Apiservice';

function ArticleList(props) {

    const editBtn = (article) =>{
        console.log(article)
        props.editBtn(article)
    }

    const deleteBtn = (article) =>{
        Apiservice.DeleteArticle(article.id)
        .then(()=> props.deleteBtn(article))
        .catch(err=>console.log(err))
        
    }
  return (
    <div>
       { props.articles && props.articles.map(article =>{
      return (
        <div key= {article.id}> 
            
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <div className='row'>
                <div className='col-md-1'>
                    <button className='btn btn-primary' onClick ={()=> editBtn(article)} >Update</button>
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-danger' onClick={()=>deleteBtn(article)} >Delete</button>

                </div>
            </div>
            <hr className='hrclass'/>
        </div>
    
      )
     })}
    </div>
  )
}

export default ArticleList
