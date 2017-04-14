import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import GoogleMap from '../global/map/map'
import News from './news/news'

import './landing.css'

export default class Landing extends Component {
	render( ) {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col s12">
							<div className="card">
                                <h4 className='center-align'>Events in your area!</h4>
								{/*set map up to get users location and events in the area*/}
								<GoogleMap/>
							</div>
						</div>
						<div className="row">
							<div className="col s12">
								{/*Fix News Component to dynyamically render news from database*/}
								<News/>
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
