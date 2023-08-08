
export function reducer(state, action) {
    switch (action.type) {
      case "set":
        return { count: action.payload };
      case "reset":
        return { count: 0 };
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  }