import React from 'react';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from "react-router-dom";

const mainContainer = (props) => {
    const [benefits, setBenefits] = useState([])
    //we're going to create the state that will handle benefits
    //we'll be using a useEffect to grab the state of benefits
    useEffect(() => {
        fetchBenefits = async () => {
            const benefitsData = await getAllBenefits()
            setBenefits(benefitsData)
        }
        fetchBenefits()
    }, [])


    const handleCreate = async (benefitsData) => {
        const newBenefit = await postBenefit(benefitsData)
        setBenefits([...prevState, newBenefit])
        history.pushState('/benefits')
    }

    const handleUpdate = async (id, benefitsData) => {
        const updateBenefit = await putBenefit(id, benefitsData)
        setBenefits(prevState => prevState.map((currentBenefit => {
            return currentBenefit.id === Number(id) ? updateBenefit : currentBenefit
        })))
        history.pushState('/benefits')
    }

    const handleDelete = async (id) => {
        await deleteBenefit(id)
        setBenefits((prevState) => prevState.filter((currentBenefit) => {
            return currentBenefit.id !== id
        }))
    }

    return (
        <React.Fragment>
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