import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({ planets }) => {
  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
        {planets.map((planet, index) => <div key={index} className={cssPlanet({ index, color: planet })} />)}
      </div>
    </div>
  )
};

export default Solar;
