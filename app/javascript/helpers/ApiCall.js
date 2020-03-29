import { AlertTypeEnum } from '../context/alert'

const Process = async (
  apiCall,
  successAlert = null,
  failureAlert = null,
  updateAlert,
  showLoader,
  hideLoader,
) => {
  showLoader();
  let response
  try {
    response = await apiCall;
    if(successAlert !== null) {
      updateAlert(AlertTypeEnum.SUCCESS, successAlert)
    }
    hideLoader();
    return response
  } catch (error) {
    let errorString = error.message;
    if (failureAlert) {
      errorString = failureAlert
    } else {
      if (
        error.response &&
        error.response.data &&
        error.response.data.error &&
        error.response.data.error.length > 0
      ) {
        errorString = error.response.data.error.toString();
      }
    }
    updateAlert(AlertTypeEnum.ERROR, errorString)
    hideLoader()
    return {}
  }
};

const ApiCall = {
  Process
};

export default ApiCall;
