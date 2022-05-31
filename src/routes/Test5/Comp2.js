import { cssWrapper } from './style';
import { useState, useEffect } from 'react'
import { useInput } from './InputContext';

const Comp2 = () => {
  const [value, setValue] = useState(null)
  const { data } = useInput()

  useEffect(() => {
    if (data.mynumber) {
      setValue(data.mynumber)
    }
  }, [data.mynumber])

  useEffect(() => {
    if (data.mynumber1) {
      setValue(data.mynumber1)
    }
  }, [data.mynumber1])
  return (
    <>
      <div className={cssWrapper}>Latest inputted value is: {value}*</div>
    </>
  )
}

export default Comp2;