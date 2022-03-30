export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, { ...payload }];
    case "MOD":
      const newStateAfterMod = [...state];
      newStateAfterMod[payload].isCompleted = !state[payload].isCompleted;
      return newStateAfterMod;
    case "DEL":
      const newStateAfterDel = [...state];
      newStateAfterDel.splice(payload, 1);
      return newStateAfterDel;
    default:
      return state;
  }
};
