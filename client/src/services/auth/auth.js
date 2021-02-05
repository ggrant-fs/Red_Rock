import api from '../api-config/api-config';

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  
  export const registerUser = async (registerData) => {
    const resp = await api.post('/users/', { user: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  
  export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const resp = await api.get('/auth/verify');
      return resp.data
    }
    return null
  }
  

  export const loginCompany = async (loginData) => {
    const resp = await api.post('/auth/company/login', { authentication: loginData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.company
  }
  
  export const registerCompany = async (registerData) => {
    const resp = await api.post('/companies/', { company: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.company
  }
  
  export const verifyCompany = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const resp = await api.get('/auth/company/verify');
      return resp.data
    }
    return null
  }
  export const removeToken = () => {
    api.defaults.headers.common.authorization = null
  }