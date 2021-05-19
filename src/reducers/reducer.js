const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTISTS_DATA":
      return { ...state, artists: action.payload };
    case "SET_ALBUMS_DATA":
      return { ...state, albums: action.payload };
    default:
      throw new Error("Something went wrong!");
  }
};

export default reducer;
