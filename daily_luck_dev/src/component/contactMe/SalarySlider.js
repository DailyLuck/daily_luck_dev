import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Numeral from 'numeral';

import 'rc-slider/assets/index.css';

const Range = createSliderWithTooltip(Slider.Range);
export default class PriceSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerValue: props.lowerValue,
      upperValue: props.upperValue,
    };
  }
  
  slideUnit = (value) => {
    const valueString = `${value}`;
    const valueThousands = parseInt(`${valueString[0]}${valueString[1]}000`,10);
    let valueInt = parseInt(`${valueString[2]}${valueString[3]}${valueString[4]}`,10);
    if(valueInt < 500) {
      valueInt = 0;
    } else if(valueInt > 500) {
      valueInt = 1000;
    }
    return valueThousands + valueInt;
  }

  parseStr2Money = (v)=> {
    const value = this.slideUnit(v);
    return Numeral(value).format('$0,0');
  }

  onSliderChange = (value) => {
    this.setState({ value });
    const lowerValue = this.slideUnit(value[0]);
    const upperValue = this.slideUnit(value[1]);
    this.setState({
      lowerValue,
      upperValue
    });
  }

  render() {
    const { minValue, maxValue, lowerValue, upperValue } = this.props;

    return (
      <div>
        <div>
          <span>{this.parseStr2Money(this.state.lowerValue)}</span>
             ~
            <span>{this.parseStr2Money(this.state.upperValue)}</span>
        </div>
        <div>
          <div>
            <Range
              allowCross={false}
              min={minValue}
              max={maxValue}
              defaultValue={[lowerValue, upperValue]}
              tipFormatter={value => this.parseStr2Money(value)}
              onChange={this.onSliderChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
