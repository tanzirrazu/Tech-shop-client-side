import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivetRoute from './context/PrivetRoute/PrivetRoute';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';
import Details from './Pages/Details/Details';
import Allproducts from './Pages/Home/Allproducts/Allproducts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Switch>
						<Route path='/home'>
							<Home />
						</Route>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/allproducts'>
							<Allproducts />
						</Route>
						<PrivetRoute exact path='/details/:id'>
							<Details />
						</PrivetRoute>
						<Route eact path='/cart'>
							<Cart />
						</Route>
						<Route exact path='*'>
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
