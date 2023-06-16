import React, {useState, useEffect} from 'react'
import Apiservice from './Apiservice'

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    useEffect(()=>{
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article.title, props.article.description])
    
    
    const updateArticle = () =>{
        Apiservice.UpdateArticle(props.article.id, {title, description})
        .then(resp => props.updatedInformation(resp))
    }   

    const insertArticle = () =>{
        Apiservice.InsertArticle({title, description})
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
