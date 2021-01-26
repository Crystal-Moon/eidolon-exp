
import { Component, createRef } from 'react';
import { Event } from '../util/Event';

class SpecialInput extends Component{
  constructor(){
	  super();
	  this.handlerInput = this.handlerInput.bind(this);
	  this.handlerFocus = this.handlerFocus.bind(this);
	  this.inputCursor = createRef();
	  this.state = {
		  value: '',
		  int: '',
		  dec: ''
	  }
  }

  handlerFocus(e){
  	e.preventDefault();
  	e.stopPropagation();
  	this.inputCursor.current.classList.toggle('input-cursor')
  }

  handlerInput(e){
  	let value = (e.target.validity.valid) ? e.target.value : this.state.value;
	  let int='', dec='';

  	if(value.length<=5){
	    if(value.length<=2) int=value;
	    else if(value.length>=3){
		    int=value.substr(0,2);
		    dec='.'+value.substr(2,value.length)
	    }
	  }else{
		  value = value.slice(0,5); 
		  int=this.state.int;
		  dec=this.state.dec;
	  }

  	this.setState({ value, int, dec });
  	Event.emit('percent',{ value })
  }

  render(){
	 return(
	  <div className="fake-input-container">
        <div className="input-group">
          <input
          	pattern="[0-9]{0,5}"
            type="tel"
            name="percent"
            className="form-control input-dark fake-input-input"
            value={this.state.value}
            onChange={this.handlerInput}
            onFocus={this.handlerFocus}
            onBlur={this.handlerFocus}
          />
          <span className="input-group-text input-dark">%</span>
        </div>
        <div className="input-group fake-input">
          <div className="form-control input-dark fake-input-placeholder">
            <span className="int">00</span><span className="dec">.000</span>
          </div>
          <span className="input-group-text input-dark">%</span>
        </div>
        <div className="input-group fake-input">
          <div className='form-control input-dark fake-input-value' ref={this.inputCursor}>
            <span className="int">{this.state.int}</span><span className="dec">{this.state.dec}</span>
          </div>
          <span className="input-group-text input-dark">%</span>
        </div>
      </div>
	 )
  }
}

export default SpecialInput;