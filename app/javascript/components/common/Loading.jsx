import { Spin } from 'antd'
import React from 'react'
import { WithLoader } from '../../context/loader'

const Loading = ({loaderVisible, children}) =>
  <Spin spinning={loaderVisible}>
    {children}
  </Spin>

export default WithLoader(Loading)
