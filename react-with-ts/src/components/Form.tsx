import React, { useState } from "react"
import Button from "./Button"
import Input from "./Input"


const Form: React.FC = () => {
  const [dataForm, setDataForm] = useState('')
  const [display, setDisplay] = useState(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setDataForm(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('Form data: ', e);
    console.log(dataForm);
    setDisplay(true);
  }

  return <>
    <h3>Sign In</h3>
     <form onSubmit={handleSubmit}>
      <Input type={'text'} handleChange={handleChange}/>
      <Button type="submit" handleSubmit={handleSubmit} >Submit</Button>
      {display&&<p>{dataForm}</p>}
    </form>
  </>
}

export default Form