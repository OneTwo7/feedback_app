import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent () {
    const { auth } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="btn btn-outline-light">
            Login with Google
          </a>
        );
      default:
        return [
          <Payments key="1" />,
          <span key="3" id="credits-count">Credits: {auth.credits}</span>,
          <a key="2" href="/api/logout" className="btn btn-outline-light">
            Logout
          </a>
        ];
    }
  }

  render () {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="navbar-brand mr-auto"
          >
            Feedback App
          </Link>
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
