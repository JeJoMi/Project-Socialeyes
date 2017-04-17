import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class UserInteractionCard extends Component {
	render( ) {
		return (
			<div className="card">
				<div className="card-content red accent-4">
					<p className='white-text flow-text'>
						Login or Sign Up. Don't worry it's free
					</p>
				</div>
				<div className="card-content grey lighten-4">
					<a href='/auth/facebook' className='btn blue darken-4'>
						login with Facebook
					</a>
				</div>
			</div>
		)
	}
}
