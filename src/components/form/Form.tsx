import React, { useState } from 'react';
import './Form.scss'


export const Form = (props: { creatNewToDo: Function }) => {
  const [text, setText] = useState<string>('')

  const formSubmit = () => {
    if (text) {
      props.creatNewToDo(text)
      setText('')
    }
  }

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(event) => setText(event.target.value)} />
          <button></button>
        </label>
      </form>
    </div>
  )
}
