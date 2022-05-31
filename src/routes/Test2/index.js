import { useState } from 'react'
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [label, setLabel] = useState('')
  const [showChip, setShowChip] = useState(false)

  const onChange = (e) => {
    setLabel(e.target.value)
  }

  const handleHoverLabel = () => {
    setShowChip(true)
  }
  const handleBlurLabel = () => {
    setShowChip(false)
  }

  return (
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label
          label={label}
          showChip={showChip}
          onMouseEnter={handleHoverLabel}
          onMouseLeave={handleBlurLabel}
        />
      </p>
      <Input onChange={onChange} />
    </div>
  )
}

export default Test2;