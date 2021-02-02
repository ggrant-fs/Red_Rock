import React from 'react';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
import { deleteBenefit, getAllBenefits, postBenefit, putBenefit, getOneBenefit } from '../../services/benefits/benefits'


const mainContainer = (props) => {
    const [benefits, setBenefits] = useState([])
    //we're going to create the state that will handle benefits
    //we'll be using a useEffect to grab the state of benefits

    //api request to get all the data for benefits
    useEffect(() => {
        fetchBenefits = async () => {
            const benefitsData = await getAllBenefits()
            setBenefits(benefitsData)
        }
        fetchBenefits()
    }, [])

    //api request to create a new benefit
    const handleCreate = async (benefitsData) => {
        const newBenefit = await postBenefit(benefitsData)
        setBenefits([...prevState, newBenefit])
        history.pushState('/benefits')
    }

    //api request to find a specific benefit by it's id then update the selected benefit
    const handleUpdate = async (id, benefitsData) => {
        const updateBenefit = await putBenefit(id, benefitsData)
        setBenefits(prevState => prevState.map((currentBenefit => {
            return currentBenefit.id === Number(id) ? updateBenefit : currentBenefit
        })))
        history.pushState('/benefits')
    }

    //api request to find a specific benefit by its id then delete it
    const handleDelete = async (id) => {
        await deleteBenefit(id)
        setBenefits((prevState) => prevState.filter((currentBenefit) => {
            return currentBenefit.id !== id
        }))
    }

    return (
        <React.Fragment>
            {/* below the api request are being passed as a prop to provide functionality  */}
            <Switch>
                <Route>

                </Route>
                <Route>

                </Route>
                <Route>

                </Route>
                <Route>

                </Route>
                <Route>

                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default mainContainer;