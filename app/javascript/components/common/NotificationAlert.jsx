import { notification } from 'antd'
import { WithAlert } from '../../context/alert'
import { useEffect, useRef } from 'react'
const NotificationDuration = 2

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const NotificationAlert = ({alertType, alertMessage, updateAlert}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      if(alertMessage && alertMessage !== '') {
        notification[alertType]({
          message: capitalize(alertType),
          description: alertMessage,
          duration: NotificationDuration,
          style: {
            width: 600,
            marginLeft: -200,
          }
        })

        updateAlert('', '')
      }
    } else {
      didMountRef.current = true
    }
  });

  return null
}

export default WithAlert(NotificationAlert)
