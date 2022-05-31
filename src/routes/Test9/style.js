import { css, keyframes } from 'react-emotion';

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
});

const rotasi = (props) => keyframes({
  from: {
    transform: `rotate(0) translate(${80 + (40 * props)}px)`
  },
  to: {
    transform: `rotate(350deg) translate(${80 + (40 * props)}px)`
  }
})


export const cssPlanet = (props) => css({
  position: 'absolute',
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: `#${props.color}`,
  animation: `${rotasi(props.index)} ${1.5 + props.index}s infinite linear`
});
