import api from '../../services/api-config/api-config'

export const getAllBenefits = async() =>{
    
    const resp = await api.get('/benefits')
    return resp.data
}
export const postBenefit= async(benefitData) =>{
    const resp = await api.post('/benefits', {benefit: benefitData})
    return resp.data
}
export const deleteBenefit= async(id) =>{
    const resp = await api.delete(`/benefits/${id}`)
    return resp
}
export const putBenefit= async(id, benefitData) =>{
   const resp = await api.put(`/benefit/${id}`,{benefit: benefitData})
   return resp.data
}
export const getOneBenefit = async(id) =>{
   const resp = await api.get(`/benefits/${id}`)
   return resp.data
}