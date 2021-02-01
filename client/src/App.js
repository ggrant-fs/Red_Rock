// import logo from './logo.svg';
// import './App.css';
import FullPage from './Screens/HomePage/FullPage'
import LoginPage from './Screens/LoginPage/LoginPage'
import {Route, Switch} from 'react-router'
import CompanyForm from './Screens/CompanyForm/CompanyForm'
import AboutPage from './Screens/AboutPage/AboutPage'
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <FullPage/>   
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path='/company'>
          <CompanyForm/>
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </>
  )
}
export default App;
