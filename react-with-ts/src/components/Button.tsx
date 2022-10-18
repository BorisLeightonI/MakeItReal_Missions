import React, { SyntheticEvent, ButtonHTMLAttributes } from "react"


type ButtonProps = {
  title?: string,
  children: React.ReactNode,
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  handleSubmit: (e: React.FormEvent)=>void
}

const Button = (props: ButtonProps) => {
  const { title, children, type, handleSubmit } = props

  const handleClick = (e: SyntheticEvent) => {
    console.log("Click")
  }

  return (
    <button onClick={handleSubmit} type={type}>{children}</button>
  )
}

export default Button