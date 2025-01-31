import React, { createContext, useState, useReducer } from 'react';

export const UserContext = createContext();
const initialUser = {
    name: 'chanjeong',
    job: 'FE-developer',
};
const userReducer = (state, action) => {
    switch (action.type) {
        case 'changeJob':
            return { ...state, job: action.text };
            break;

        default:
            break;
    }
};

export default function UserStore(props) {
    const [user, dispatch] = useReducer(userReducer, initialUser);

    return <UserContext.Provider value={dispatch}>{props.children}</UserContext.Provider>;
}
