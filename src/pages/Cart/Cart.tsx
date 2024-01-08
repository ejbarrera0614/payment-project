"use client";
import React from 'react';
import styles from './Cart.module.css';

export type CartProps = {
	// types...
}

const Cart: React.FC<CartProps> = () => {
	return (
		<div className={styles.cart}>
			Cart works!
		</div>
	);
};

export default Cart;
