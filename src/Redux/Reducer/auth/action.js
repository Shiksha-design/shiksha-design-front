const actions = {
  SET_USER_DATA: "auth/SET_USER_DATA",
  SET_THEME_DATA: "auth/SET_THEME_DATA",
  SET_SWITCH_BOOL: "auth/SET_SWITCH_BOOL",
  CLEAR_ALL_STORAGE_DATA: "auth/CLEAR_ALL_STORAGE_DATA",

  setUserData: (userdata) => (dispatch) =>
    dispatch({
      type: actions.SET_USER_DATA,
      userdata,
    }),

  setThemeData: (themeData) => (dispatch) =>
    dispatch({
      type: actions.SET_THEME_DATA,
      themeData,
    }),
  setSwitchBool: (switchBool) => (dispatch) =>
    dispatch({
      type: actions.SET_SWITCH_BOOL,
      switchBool,
    }),

  clearAllData: () => (dispatch) =>
    dispatch({
      type: actions.CLEAR_ALL_STORAGE_DATA,
    }),
};

export default actions;