import { WithLoader } from '../../context/loader'
import { WithAlert } from '../../context/alert'
import ApiCall from '../../helpers/ApiCall'
import React from 'react'

const WithApiContext = Component => {
  const Wrapped = props => {
    const { updateAlert, showLoader, hideLoader } = props

    const PerformRequest = async (request, successAlert = null, failureAlert = null) => {
      return await ApiCall.Process(
        request,
        successAlert,
        failureAlert,
        updateAlert,
        showLoader,
        hideLoader
      );
    }

    return <Component {...props} PerformRequest={PerformRequest}/>
  }
  return WithLoader(WithAlert(Wrapped))
}

export default WithApiContext
