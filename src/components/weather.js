import React,{Component} from 'react';
class Weather extends Component{
	render() {
		return (
		   <div className="weather__info">
		  {this.props.city && <p className="weather__key">	City: 
		  <span className="weather__value"> {this.props.city}</span></p>}
		   {this.props.country &&	<p className="weather__key">Country:
		   <span className="weather__value">{this.props.country}</span></p>}
		   	{this.props.temp &&<p className="weather__key">Temp:
		   	<span className="weather__value">{this.props.temp}</span></p>}
		   	{this.props.error &&<p className="weather__key">Error :
		   	<span className="weather__error">{this.props.error}</span></p>}
		   	{this.props.description &&<p className="weather__key">Description:
		   	<span className="weather__value">{this.props.description}</span></p>}
		   </div>
		);
	}
}
export default Weather;