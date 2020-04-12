import React, { Component } from 'react';

export default class Callback extends Component {
  componentDidMount() {
    // handle authentication if expected values are in url
    if (/access_token|id_token}error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error('Invalid callback URL');
    }
  }
  render() {
    return <> .... Loading </>;
  }
}
