import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>THis is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? 
        <WrappedComponent {...props} /> 
        : 
        <p>Please login to see the info</p>
      }
    </div>
  )
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));