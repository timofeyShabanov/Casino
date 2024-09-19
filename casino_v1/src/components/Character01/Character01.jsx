import React from 'react';
import cl from './Character01.module.css'

const Character01 = () => {
	const [hp, setHp] = React.useState(10);

	return (
		<div className={cl.character}>
			<div className={cl.character__hp}>{hp}hp</div>
		</div>
	);
};

export default Character01;