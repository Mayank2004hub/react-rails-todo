import * as React from 'react'

const LoaderContext = React.createContext({
  loaderVisible: false,
  showLoader: () => null,
  hideLoader: () => null,
})

export const WithLoader = Component => {
  return props => {
    return <LoaderContext.Consumer>
      {({loaderVisible, showLoader, hideLoader}) =>
        <Component
          loaderVisible={loaderVisible}
          showLoader={showLoader}
          hideLoader={hideLoader}
          {...props} />}
    </LoaderContext.Consumer>
  }
}

export class LoaderProvider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaderVisible: false,
    }
    this.showLoader = this.showLoader.bind(this)
    this.hideLoader = this.hideLoader.bind(this)
  }

  showLoader() {
    this.setState({loaderVisible: true})
  }

  hideLoader() {
    this.setState({loaderVisible: false})
  }

  render () {
    return <LoaderContext.Provider
      value = {{
        hideLoader: this.hideLoader,
        showLoader: this.showLoader,
        ...this.state
      }}
    >
      {this.props.children}
    </LoaderContext.Provider>
  }
}
