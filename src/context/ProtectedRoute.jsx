import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { userContext } from './ContextProvider.jsx';
import { Navigate } from 'react-router-dom';
import AdminPage from '../components/AdminPage';
// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const ProtectedRoute = ({children,roles}) => {
    const  {role,isAuthenticated} = useContext(userContext);

    if(!isAuthenticated){
        return <Navigate to='/login' /> 
    }

    if(!roles.includes(role)){
        return <Navigate to='/unauther' /> 
    }
    return children
}

ProtectedRoute.propTypes = propTypes;
ProtectedRoute.defaultProps = defaultProps;
// #endregion

export default ProtectedRoute;