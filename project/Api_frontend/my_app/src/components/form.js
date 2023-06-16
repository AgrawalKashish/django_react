import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            posts:[]
        }
    }

    usernameHandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    passwordHandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>this.setState({posts:data}))
        .then(data=>console.log(data))
    }


  render() {
    const {posts}=this.state
    return (
      <div>
       <div className='container'> 
       <input type="text" value={this.state.username} placeholder="Enter your Username" className='form-control' onChange={this.usernameHandler}/>
       <input type="password" value={this.state.password} placeholder="Enter your password" className='form-control' onChange={this.passwordHandler}/>
       <button className='btn btn-primary'>Submit</button> 

       {posts.map(post=>
         <h2 key={post.id}>{post.title}</h2>
        )}    
       </div>
      </div>
    )
  }
}

export default Form
