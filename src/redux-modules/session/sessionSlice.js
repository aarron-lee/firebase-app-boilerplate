import createSliceWithRoutines from 'redux-modules/utils/createSliceWithRoutines';

const sessionSlice = createSliceWithRoutines({
  name: 'session',
  initialState: {
    user: {},
    userSettings: {},
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
    },
    setUserSettings: (state, action) => {
      state.userSettings = action.payload.userSettings;
    },
  },
  routines: {
    login: 'LOGIN',
    logout: 'LOGOUT',
    createUser: 'CREATE_USER',
  },
  routineReducers: (routines) => ({
    [routines.logout.SUCCESS]: (state) => {
      state.user = {};
    },
    [routines.login.SUCCESS]: (state, action) => {
      state.user = action.payload.user;
    },
    [routines.createUser.SUCCESS]: (state, action) => {
      state.user = action.payload.user;
    },
  }),
});

export default sessionSlice;
