import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

const BreadCrumbBar = ({items}) =>  <Breadcrumb className="mb-2">
  <Breadcrumb.Item>
    <Link to="/app">Home</Link>
  </Breadcrumb.Item>
  {items.map((item) => {
    return <Breadcrumb.Item key={item.text}>
      {item.link ? <Link to={item.link}>{item.text}</Link> : item.text }
    </Breadcrumb.Item>
  })}
</Breadcrumb>

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
  }))
}

export default BreadCrumbBar
