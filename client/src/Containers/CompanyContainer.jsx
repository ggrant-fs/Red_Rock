import React from 'react';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Benefits from '../Screens/Benefits/Benefits.jsx'
import { getAllBenefits } from '../services/benefits/benefits'
import BenefitCreate from '../Screens/BenefitCreate/BenefitCreate'
import { postBenefit } from '../services/benefits/benefits'


const CompanyContainer = (props) => {
    const [benefits, setBenefits] = useState([]);
    const history = useHistory()
    useEffect(() => {
        const fetchAllBenefits = async () => {
            const benefitsData = await getAllBenefits();
            setBenefits(benefitsData)
        }
        if (props.currentCompany) {
            fetchAllBenefits()
        }
    }, [props.currentCompany]);

    const handleCreate = async (formData) => {
        const benefitsData = await postBenefit(formData)
        setBenefits(prevState => [...prevState, benefitsData])
        history.push('/company/benefits')
    }

    const handleDelete = async (id) => {
        const deleteBenefit = await deleteBenefit(id)
        setBenefits(prevState => prevState.filter(beneft => beneft.id !== id))
    }
    return (
        <Switch >
            <Route path='/company/benefits/new'>
                <BenefitCreate handleCreate={handleCreate} />
            </Route>
            <Route path='/company/benefits' >
                <Benefits benefits={benefits} />
            </Route>

        </Switch>
    );
};

export default CompanyContainer;