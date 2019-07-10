import React, { useState } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import  Header from './components/Header';
import  Index from './components/Index';
import  OrderConfirm from './components/OrderConfirm';
import  ThankYou from './components/ThankYou';
import logo from './logo.svg';
import './App.css';

const PizzaIngridients = [
	{ name: "Mozzarella", price: 3 },
	{ name: "Cheddar", price: 3.5 },
	{ name: "Corn", price: 1.5 },
	{ name: "Cucumber", price: 1 },
	{ name: "Tomato", price: 1 },
	{ name: "Sweet pepper", price: 2 },
	{ name: "Chicken", price: 2.5 },
	{ name: "Beef", price: 5 },
	{ name: "Fish", price: 4 }
];

const App = props => {

  	const [SelectedIngridients, setSelectedIngridients] = useState([]);
  	const [Total, setTotal] = useState(0); 
	const [UserName, setUserState] = useState('');
	const [Address, setAddressState] = useState('');
	

  	const ingridientClick = title => {
		let idx = PizzaIngridients.findIndex(x => x.name === title);
		let price = PizzaIngridients[idx]['price'];
		let newTotal = 0;
		if(SelectedIngridients.includes(title)) {
			setSelectedIngridients(SelectedIngridients.filter(item => item !== title));
			if(Total > 0) newTotal = (Total - price);
		}
		else {
			setSelectedIngridients(SelectedIngridients => [...SelectedIngridients, title]);
			newTotal = (Total + price);
		}
		setTotal(newTotal);
	}

	const MakeNewPizza = () => {
		setSelectedIngridients([]);
		setTotal(0);
	}

	const ConfirmOrder = () => {
		console.log('Confirm order');
	}

	const setUserName = name => {
		setUserState(name);
	}

	const setAddress = address => {
		setAddressState(address);
	}

	return (
		<Router>
			<div className="App">
				<Header 
					logo={logo} 
					title={props.title} 
				/>
				<div className="App-content">
					<Route 
						exact 
						path="/" 
						render={() => (
							<Index 
								SelectedIngridients={SelectedIngridients} 
								PizzaIngridients={PizzaIngridients} 
								ingridientClick={name => ingridientClick(name)}
								Total={Total}
							/>  
						)}  
					/>
					<Route 
						path="/order" 
						render={() => (
							<OrderConfirm 
								Total={Total}
								UserName={UserName}
								Address={Address} 
								ConfirmOrder={()=> ConfirmOrder()}
								setUserName={name=> setUserName(name)}
								setAddress={address=> setAddress(address)}
							/>
						)}
					/>
					<Route 
						path="/thanks" 
						render={() => (
							<ThankYou 
								MakeNewPizza={() => MakeNewPizza()}
								UserName={UserName}
							/>
						)}
					/>					
				</div>
			</div>
		</Router>
	);
}


export default App;