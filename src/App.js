import React, { useState } from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import  Header from './components/Header'
import  Index from './components/Index'
import  OrderConfirm from './components/OrderConfirm'
import  ThankYou from './components/ThankYou'
import './App.css'

const pizzaIngridients = [
	{ name: "Mozzarella", price: 3 },
	{ name: "Cheddar", price: 3.5 },
	{ name: "Corn", price: 1.5 },
	{ name: "Cucumber", price: 1 },
	{ name: "Tomato", price: 1 },
	{ name: "Sweet pepper", price: 2 },
	{ name: "Chicken", price: 2.5 },
	{ name: "Beef", price: 5 },
	{ name: "Fish", price: 4 }
]

const App = props => {

  	const [selectedIngridients, setSelectedIngridients] = useState([])
  	const [total, setTotal] = useState(0)
	const [userName, setUserState] = useState('')
	const [address, setAddressState] = useState('')

  	const ingridientClick = title => {
		let idx = pizzaIngridients.findIndex(x => x.name === title)
		let price = pizzaIngridients[idx]['price']
		let newTotal = 0
		if(selectedIngridients.includes(title)) {
			setSelectedIngridients(selectedIngridients.filter(item => item !== title))
			if(total > 0) newTotal = (total - price)
		}
		else {
			setSelectedIngridients([...selectedIngridients, title])
			newTotal = (total + price)
		}
		setTotal(newTotal)
	}

	const makeNewPizza = () => {
		setSelectedIngridients([])
		setTotal(0)
	}

	const confirmOrder = () => {
		console.log('Confirm order')
	}

	return (
		<Router>
			<div className="App">
				<Header 
					title={props.title} 
				/>
				<div className="App-content">
					<Route 
						exact 
						path="/" 
						render={() => (
							<Index 
								selectedIngridients={selectedIngridients} 
								pizzaIngridients={pizzaIngridients} 
								ingridientClick={name => ingridientClick(name)}
								total={total}
							/>  
						)}  
					/>
					<Route 
						path="/order" 
						render={() => (
							<OrderConfirm 
								total={total}
								userName={userName}
								address={address} 
								confirmOrder={()=> confirmOrder()}
								setUserName={name=> setUserState(name)}
								setAddress={address=> setAddressState(address)}
							/>
						)}
					/>
					<Route 
						path="/thanks" 
						render={() => (
							<ThankYou 
								makeNewPizza={() => makeNewPizza()}
								userName={userName}
							/>
						)}
					/>					
				</div>
			</div>
		</Router>
	)
}


export default App