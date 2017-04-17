import React, { Component } from 'react'

export default class UserInteractionCard extends Component {
	render( ) {
		return (
			<div className="card">
				<div className="card-content red darken-2">
					<p className='white-text flow-text'>Login or Sign Up. Don't worry it's free
					</p>
				</div>
				<div className="card-content grey lighten-4">
				    <button className="btn btn-block blue darken-3">login with Facebook</button>
				</div>
			</div>
		)
	}
}
