
import { cssWrapper } from './style';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import InputContext, { Context } from './InputContext';

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);

const Test5 = () => {

  return (
    <InputContext>
      <div>
        {question}
        <Context.Consumer>
          {(value) => (
            <>
              <button id="numbermin" type="button" onClick={() => value.setData({ ...value.data, 'mynumber': (value.data.mynumber || 0) - 1 })}>-</button>
              <input id="mynumber" type="text" placeholder="input mynumber" onChange={(e) => value.setData({ ...value.data, 'mynumber': Number(e.currentTarget.value) || 0 })} value={value.data.mynumber} />
              <button id="numberplus" type="button" onClick={() => value.setData({ ...value.data, 'mynumber': (value.data.mynumber || 0) + 1 })}>+</button>
              <br />
              <br />
              <div className={cssWrapper}>
                The inputted value is [{value.data.mynumber % 2 === 0 ? 'EVEN' : 'ODD'}]*
              </div>
            </>
          )
          }
        </Context.Consumer>
        <Comp1 />
        <Comp3 />
      </div>
    </InputContext>
  )
}

export default Test5;