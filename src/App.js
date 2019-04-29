import React from 'react';
import Forms from './components/forms';
import Weather from './components/weather';

import Headd from './components/headd'

const api='f76ab8e88db2a12f2036d8ab10c199fb';

class App extends React.Component {
	state={
		temp:undefined,
		city:undefined,
	    description:undefined,
	    error:undefined,
	    country:undefined,
	}
	getweather = async (e) => {
		e.preventDefault();
		const cityy=e.target.elements.city.value;
		const countryy=e.target.elements.country.value;
		const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityy +','+ countryy +'&appid='+api+'&units=metric');
		const data = await api_call.json();
		if(cityy && countryy){
		console.log(data);
		this.setState({
			temp:data.main.temp,
			city:data.name,
			country:data.sys.country,
			description:data.weather[0].description,
			error:""
		})
	}else{
		this.setState({
		temp:undefined,
		city:undefined,
	    description:undefined,
	   
	    country:undefined,

			error:"Please enter valid city name and country name"
			})
	}
	}
	render() {
		return (
	        <div>
	        <div className="wrapper">
            <div className="main">
            <div className="container">
            <div className="row">
                <div className="col-xs-5 title-container"><Headd />
                  <div className="col-xs-7 form-container">
                  <Forms getweather={this.getweather} />
	           		<Weather 
	        						temp={this.state.temp}
	        						city={this.state.city}
	        						country={this.state.country}
	        						description={this.state.description}
	        						error={this.state.error}	
	        										/>
</div>
                  </div>
                  </div>
                </div>
                </div>
                </div>
	        </div>	
		);
	};
};

export default App;
