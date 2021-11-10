export const UserInitialState = {
    login: '',
    groups: [],
    jwt: {}
}

export const UserReducer = (state, action) => {

    console.log(state, action)

    switch (action.type) {
        // case 'loading': return { ...state, state: 0 }
        // case 'stop':    return { ...state, state: 2 }
        // case 'access':  return { count: state.count - 1 }
        default:
            throw new Error('App reducer action is not defined');
    }
}