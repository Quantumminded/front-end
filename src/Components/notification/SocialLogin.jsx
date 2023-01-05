import React from 'react'
import { Link } from 'react-router-dom'
import './social.css'
export default function SocialLogin() {
	return (
		<div className="login-box">
			<h2>Social Login Placeholder</h2>
			<Link to="#" className="social-button" id="facebook-connect"> <span>Connect with Facebook</span></Link>
			<Link to="#" className="social-button" id="google-connect"> <span>Connect with Google</span></Link>
			<Link to="#" className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></Link>
			<Link to="#" className="social-button" id="linkedin-connect"> <span>Connect with LinkedIn</span></Link>
		</div>
	)
}
