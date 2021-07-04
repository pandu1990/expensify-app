import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startTwitterLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startTwitterLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It&apos;s time to get your expenses under control.</p>
      <button className="button button--login-google" onClick={startGoogleLogin} />
      <button className="button button--login-twitter" onClick={startTwitterLogin} />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startTwitterLogin: () => dispatch(startTwitterLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
