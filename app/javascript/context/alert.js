import React, { useState } from 'react'

export const AlertTypeEnum = {
  SUCCESS: "success",
  ERROR: "error",
  WARN: "warning",
};

const AlertContext = React.createContext({
  message: '',
  type: '',
  updateAlert: () => null,
});

export const WithAlert = Component => {
  return props => {
    return <AlertContext.Consumer>
      {({updateAlert, alertType, alertMessage}) =>
        <Component
          updateAlert={updateAlert}
          alertType={alertType}
          alertMessage={alertMessage}
          {...props}
        />}
    </AlertContext.Consumer>
  }
}

export const AlertProvider = ({children}) => {
  const [alertType, updateAlertType] = useState('')
  const [alertMessage, updateMessage] = useState('')

  const updateAlert = (type, message) => {
    updateAlertType(type)
    updateMessage(message)
  }

  return  <AlertContext.Provider
    value = {{
      updateAlert,
      alertType,
      alertMessage,
    }}>
    {children}
  </AlertContext.Provider>
}
