import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './landing.css'

export default class Landing extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card landingImage">
                            <h1 className=''>stuff</h1>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h1>News:</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h1>Media:</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
