import { cssWrapper } from './style';

import { useState } from "react";
import Comp2 from "./Comp2";
import { useInput } from './InputContext';

const Comp1 = () => {
  const [value, setValue] = useState(false);
  const { data, setData } = useInput()
  const handleChangeMyNumber1 = (e) => {
    setData({ ...data, 'mynumber1': Number(e.currentTarget.value) || 0 })
  }
  return (
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br />
      <br />
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" onChange={() => setValue(!value)} value={value} />
        {/* only show when overwrite is checked */}
        {value && <input id="mynumber1" type="text" placeholder="input mynumber1" value={data.mynumber1} onChange={handleChangeMyNumber1} />}
      </label>
      <Comp2 />
    </div>
  )
}

export default Comp1;