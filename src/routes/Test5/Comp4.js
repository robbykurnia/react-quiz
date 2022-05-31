import { useInput } from './InputContext';
import { cssWrapper, cssModalRight } from './style';
import { useState } from 'react'

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const [value, setValue] = useState('')
  const { setData } = useInput()
  const handleChange = (e) => {
    setValue(Number(e.currentTarget.value) || 0)
    setData({ 'mynumber': Number(e.currentTarget.value) || 0, 'mynumber1': Number(e.currentTarget.value) || 0, })
  }
  return (
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2" onChange={handleChange} value={value}></input>
      </div>
    </>
  )
}

export default Comp4;