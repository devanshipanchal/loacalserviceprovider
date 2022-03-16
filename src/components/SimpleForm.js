import React, { useState } from 'react'

export const SimpleForm = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const emailHandler = (e) => {
        
        console.log(e.target.value)
        setemail(e.target.value)
    }
    const passwordHandler = (e) => {

        setpassword(e.target.value)

    }
    const submit = (e)=>{

        e.preventDefault()
        alert("email: "+email+" password: "+password)
        console.log("submit called.....")
    }

    return (
        <form onSubmit = {submit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange= {(e)=>{emailHandler(e)}}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                {email}
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>passwordHandler(e)}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


    )
}

