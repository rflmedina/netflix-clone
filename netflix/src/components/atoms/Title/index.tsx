import React, {HTMLAttributes} from "react"

function Title(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 {...props}>{props.children}</h1>
}

export default Title