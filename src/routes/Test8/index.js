import { useState } from 'react'
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  const [input, setInput] = useState({})
  const [showModal, setShowModal] = useState(false)
  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    //...
    const nextInput = { ...input }
    nextInput[e.target.placeholder] = e.target.value
    setInput(nextInput)
  };

  const handleReset = () => {
    setShowModal(false)
    setInput({})
  }

  return (
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="name" onChange={handleInput} value={input.name || ''} />
        <input type="text" placeholder="age" onChange={handleInput} value={input.age || ''} />
        <textarea type="text" placeholder="address" onChange={handleInput} value={input.address || ''} />
        <button onClick={() => setShowModal(true)}>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {showModal && <Modal onReset={handleReset} data={input} />}
    </div>
  )
}

export default Test8;