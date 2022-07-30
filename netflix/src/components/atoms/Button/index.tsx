import React, {ButtonHTMLAttributes} from "react"

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props}>{props.children}</button>
}

export default Button