import { connect } from 'react-redux'
import { Dispatch } from 'redux'
// import { withRouter } from 'react-router-dom'
import { IApplicationState } from '../../types'
import App from './app'

const mapStateToProps = ({ ui }: IApplicationState, ownProps: any) => ({
  ...ownProps,
  ...ui,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(App)
