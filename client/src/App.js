import FullPage from './Screens/HomePage/FullPage'
import Layout from './Componenet/Layout/Layout'
import LoginPage from './Screens/LoginPage/LoginPage'
import { Route, Switch, useHistory } from 'react-router-dom'
import CompanyForm from './Screens/CompanyForm/CompanyForm'
import AboutPage from './Screens/AboutPage/AboutPage'
import ContactPage from './Screens/ContactPage/ContactPage'
import { registerUser, registerCompany, removeToken, loginUser, loginCompany } from './services/auth/auth'
import Register from './Screens/CompanyAuth/subComponent/Register/Register'
import { useState,useEffect } from 'react'
import CompanyAuth from './Screens/CompanyAuth/CompanyAuth'
import Benefits from './Screens/Benefits/Benefits'
import CompanyContainer from './Containers/CompanyContainer'
import {verifyCompany } from './services/auth/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentCompany, setCurrentCompany] = useState(null)
  const history = useHistory()

  useEffect(()=>{
    const handleCompanyVarify = async ()=>{
       const companyData = await verifyCompany()
       setCurrentCompany(companyData)
    }
    handleCompanyVarify()
  },[])

  const handleLogin = async (LoginData) => {
    const userData = await loginUser(LoginData)
    setCurrentUser(userData)
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
  }

  const handleRegisterCompany = async (registerData) => {
    const companyData = await registerCompany(registerData)
    setCurrentCompany(companyData)
    history.push('/company/benefits')
  }

  const handleCompanyLogin = async (loginData) => {
    const companyData = await loginCompany(loginData)
    setCurrentCompany(companyData)
    history.push('/company/benefits')
  }
  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }
  return (
    <>
      <Layout currentUser={currentUser} currentCompany={currentCompany}>
        <Switch>
          <Route path="/login">
            <LoginPage handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <CompanyAuth
              handleRegister={handleRegisterCompany}
              handleCompanyLogin={handleCompanyLogin} />
          </Route>
          {/* <Route path='/company/benefits'>
            <Benefits />
          </Route> */}
          {/* <Route path='/company'>
            <CompanyForm />
          </Route> */}
          <Route path='/company'>
            <CompanyContainer currentCompany={currentCompany} />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='/'>
            <FullPage />
          </Route>
        </Switch>
      </Layout>
    </>
  )
}
export default App;
