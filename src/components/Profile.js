import React ,{useState,useEffect} from 'react'

export const Profile = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    useEffect(()=>{
        setemail(localStorage.getItem('abcd'))
        setpassword(localStorage.getItem('token'))

        return ()=>{

        }
    },)
  return (
    <div>
      {
          email ? <h1>{email}</h1>: <h1>Please Login first</h1>
      }
    </div>
  )
}