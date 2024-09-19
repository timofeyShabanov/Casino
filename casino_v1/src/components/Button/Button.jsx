import React from 'react';
import cl from './Button.module.css'

const Button = (props) => {
	return (
		<button {...props} className={cl.button}>
			Play Now <span style={{color: '#1b5e20', marginLeft: 8}}>100$</span>
		</button>
	);
};

export default Button;