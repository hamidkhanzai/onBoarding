const defaultState = {
  goals: [
    { title: 'lose_weight', subTitle: 'lose_weight_sub' },
    { title: 'get_fitter', subTitle: 'get_fitter_sub' },
    { title: 'gain_muscle', subTitle: 'gain_muscle_sub' },
  ],
  selectedGaol: '',
  age: 0,
  height: {
    height: 0,
    unit: 'cm',
  },
};

function onboardingReducer(
  state: Object = defaultState,
  action: Object,
): Object {
  switch (action.type) {
  case 'SET_AGE':
    return {
      ...state,
      age: action.age,
    };
  case 'SET_GOAL':
    return {
      ...state,
      selectedGaol: action.goal,
    };

  case 'SET_HEIGHT':
    const goal= {
      ...state,
      height: action.height,
    };
      console.log(goal);
      return goal;

  default:
    return state;
  }
}

export default onboardingReducer;
