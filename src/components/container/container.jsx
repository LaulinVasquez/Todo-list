import React from 'react'
import styles from './container.module.css';

function container({children, flex}) {
  return (
    <div className={flex ? styles.flexContainer: styles.container}>{children}</div>
  )
}

export default container