import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="btn btn-outline-light">
            Login with Google
          </a>
        );
      default:
        return (
          <a href="/api/logout" className="btn btn-outline-light">
            Logout
          </a>
        );
    }
  }

  render () {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand mr-auto">Feedback App</a>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);
