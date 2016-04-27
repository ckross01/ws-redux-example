const initialState = {
  user: null
}

function reducers (state, action) {
  if (state === undefined) {
    state = initialState;
  }
  switch (action.type) {
    case 'AUTH':
     return Object.assign({}, state, {user: action.payload});
    default:
     return state;
  }
}

module.exports = reducers;
