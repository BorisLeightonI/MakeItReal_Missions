import React, { SyntheticEvent, InputHTMLAttributes } from "react"


type InputProps = {
  name?: string,
  value?: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>void
  type: InputHTMLAttributes<HTMLInputElement>["type"]
}

const Input = (props: InputProps) => {
  const { name, type, value, handleChange } = props

  const handleClick = (e: SyntheticEvent) => {
    console.log("Click")

 
  }

  return (
    <>
        <input onChange={handleChange} type={type}/>
    </>
  )
}

export default Input