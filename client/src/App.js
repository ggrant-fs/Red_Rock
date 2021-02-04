import FullPage from './Screens/HomePage/FullPage'
import Layout from './Componenet/Layout/Layout'
import LoginPage from './Screens/LoginPage/LoginPage'
import {Route, Switch} from 'react-router'
import CompanyForm from './Screens/CompanyForm/CompanyForm'
import AboutPage from './Screens/AboutPage/AboutPage'
import ContactPage from './Screens/ContactPage/ContactPage'
import {loginUser, removeToken} from './services/auth/auth'
import {registerUser} from './services/auth/auth'
import Register from './Componenet/Register/Register'
import {useState} from 'react'


function App() {
  const [currentUser,setCurrentUser ] = useState(null)

  const handleLogin = async(LoginData)=>{
    const userData = await loginUser(LoginData)
    setCurrentUser(userData)
  }

  const handleRegister = async(registerData) =>{
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
  }

  const handleLogout = () =>{
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }
  return (
    <>
    <Layout>
      <Switch>
        <Route exact path='/'>
          <FullPage/>   
        </Route>
        <Route path="/login">
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister}/>
        </Route>
        <Route path='/company'>
          <CompanyForm/>
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/ccntact'>
          <ContactPage />
        </Route>
      </Switch>
    </Layout>
    </>
  )
}
export default App;
