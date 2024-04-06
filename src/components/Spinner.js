import React, { Component } from 'react'
import LoadingSpinner from './LoadingSpinner.gif'

export class Spinner extends Component {
    render() {
        return (

            <div className='text-center'>
                <img src={LoadingSpinner} alt="" />
            </div>

        )
    }
}

export default Spinner
