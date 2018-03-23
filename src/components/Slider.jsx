var Slider = (props) => (
  <label className="switch">
    <input type="checkbox" />
    <span
      className="slider round" 
      onClick={props.handleAutoPlay}
    >
    </span>
    <span style={{position: 'absolute', left: '47px'}}>
      AUTOPLAY
    </span>
  </label>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// Slider.propTypes = {
//   autoplay: React.PropTypes.boolean.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Slider = Slider;
