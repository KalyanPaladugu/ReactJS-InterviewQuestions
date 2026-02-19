import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createContext } from 'react';

const propTypes = {};

const defaultProps = {};

 export const userContext= createContext();
const ContextProvider = ({children}) => {
    
    const role='admin';
    const isAuthenticated=true;
    return (<userContext.Provider value={{role,isAuthenticated}}>
        {children}
    </userContext.Provider>);
}

ContextProvider.propTypes = propTypes;
ContextProvider.defaultProps = defaultProps;
// #endregion

export default ContextProvider;