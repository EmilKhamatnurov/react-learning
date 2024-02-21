import React from 'react'
import styles from '../../../home/Home.module.scss'
const Price = ({ price }) => {
	return (
		<p className={styles.item__price}>{new Intl.NumberFormat('en-US', {
			style: 'currency', currency: 'USD'
		}).format(price)}
		</p>
	)
}

export default React.memo(Price) // Закешировали компонент, который терерь не ререндерится при обновлении родительского компонента, что положительно сказывается на производительности 