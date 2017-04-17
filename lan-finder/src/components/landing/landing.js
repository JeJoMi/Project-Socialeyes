import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './landing.css'

import LoginSignup from './userInteraction/loginSignup'
export default class Landing extends Component {
	render( ) {
		return (
			<div className="container">
				<div className="row">
					<div className="col s8"></div>
					<div className="col s4">
						<LoginSignup />
					</div>
				</div>
			</div>
		)
	}
}
