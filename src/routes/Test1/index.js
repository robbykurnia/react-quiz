import { useState } from 'react'

const Test1 = () => {
  const [user, setUser] = useState('')

  const onChange = (e) => {
    setUser(e.target.value)
  }
  return (
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {user}
      </p>
      <input onChange={onChange} type="text" placeholder="input here" />
    </div>
  )
}

export default Test1;