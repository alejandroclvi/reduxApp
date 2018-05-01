/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions'
import Link from '../presentational/Link'

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onTap: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)