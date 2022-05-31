import { cssWrapper } from "./style";

import { useState } from "react";
import Comp4 from "./Comp4";
import { useInput } from "./InputContext";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [showModal, setShowModal] = useState(false);
  const { data } = useInput()
  return (
    <>
      <div className={cssWrapper}>The Inputted Value is: {data.mynumber}*</div>
      <button type="button" onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && <Comp4 />}
    </>
  )
}

export default Comp3;