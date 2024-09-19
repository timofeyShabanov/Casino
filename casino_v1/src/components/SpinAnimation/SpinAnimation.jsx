import React from 'react';
import { motion } from 'framer-motion';
import html from '../../../public/images/html.png';
import css from '../../../public/images/css.png';
import js from '../../../public/images/js.png';
import asm from '../../../public/images/asm.png';
import cPlusPlus from '../../../public/images/cPlusPlus.png';
import python from '../../../public/images/python.png';
import nodeJs from '../../../public/images/nodeJs.png';
import styles from './SpinAnimation.module.css';

const images = [html, css, js, asm, cPlusPlus, python, nodeJs];

const positions = [0, 50, 100, 150, 200, 250, 300];
const sizes = [10, 30, 50, 70, 50, 30, 10];

const SpinAnimation = () => {
	return (
		<div className={styles['image-container']}>
			{images.map((image, index) => (
				<motion.img
					key={index}
					src={image}
					alt={`image-${index}`}
					initial={{y: positions[index], scale: sizes[index] / 40}}
					animate={{
						y: positions.map((_, i) => positions[(i + index) % positions.length]),
						scale: sizes.map((_, i) => sizes[(i + index) % sizes.length] / 40),
					}}
					transition={{
						duration: 0.5,
						repeat: Infinity,
						repeatType: 'loop',
						ease: 'linear',
					}}
					className={styles['rotating-image']}
				/>
			))}
		</div>
	)
		;
};

export default SpinAnimation;
