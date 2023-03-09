import React from 'react'
import styles from './styles.module.css'
import PropType from 'prop-types'

export const Button = ({ type, children }) => {
  const buttonType = type || 'default'
  const className = [styles[buttonType], styles.button].join(' ')

  return <button className={className}>{children}</button>
}

Button.propTypes = {
  type: PropType.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  children: PropType.node.isRequired
}
