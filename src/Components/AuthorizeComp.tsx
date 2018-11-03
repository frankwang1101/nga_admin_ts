import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizeComp extends React.Component<RouteProps & BaseState & { key: string }> {
  render() {
    const { user, component: Comp } = this.props
    if (Comp === undefined) {
      return <Redirect to="/login" />
    }
    console.log(this.props.path, '-=-')
    const props = {
      ...this.props,
      component: undefined
    }
    return <Route {...props} render={
      props => {
        return (true) ? <Comp {...props} /> : <Redirect to="/login" />
      }
    } />;
  }
}

const mapStateToProps = (state:BaseState) => ({
  ...state
})

export default connect(mapStateToProps)(AuthorizeComp)
