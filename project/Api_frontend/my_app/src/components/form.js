import React, {useState, useEffect} from 'react'
import Apiservice from './Apiservice'
import {useCookies} from 'react-cookie'

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['mytoken'])
    
    useEffect(()=>{
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article.title, props.article.description])
    
    
    const updateArticle = () =>{
        Apiservice.UpdateArticle(props.article.id, {title, description}, token['mytoken'])
        .then(resp => props.updatedInformation(resp))
    }   

    const insertArticle = () =>{
        Apiservice.InsertArticle({title, description}, token['mytoken'])
        .then(resp => props.insertedInformation(resp))
    }
    return (
    <div>
      {/* {props.article && props.article.title} */}
      {
        props.article ?(
            <div className='mb-3'>
                <label htmlFor='title' className='form-label'>Title</label>
                <input type='text' className='form-control'
                 value={title} onChange = {e =>setTitle(e.target.value) }/>
                <label htmlFor='description' className='form-label'>Description</label>
                <textarea type='text' className='form-control' value={description} onChange = {e =>setDescription(e.target.value) }/>
     
                <br></br>
                {
                    props.article.id ?  <button className='btn btn-success'
                    onClick={updateArticle}>Update Article</button>
                    : <button onClick={insertArticle} className='btn btn-success'>Add Article</button>
                }
               
            </div>
        ):null
      }
    </div>
  )
}

export default Form
