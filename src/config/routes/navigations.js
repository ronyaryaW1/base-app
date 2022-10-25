import React from "react";

export const navigation = React.createRef();

const reset = (routeName, params) => {
  if (!navigation.current) {
    throw new Error('navigation is null', navigation);
  }
  navigation.current.resetRoot({
    index: 0,
    routes: [{name: routeName, params}],
  });
};
const navigate = (routeName, params) => {
  if (!navigation) {
    throw new Error('navigation is null');
  }
  navigation.navigate(routeName, params);
};
const push = (routeName, params) => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.dispatch(StackActions.push(routeName, params));
};

const Routes = {
    reset,
    navigate,
    push
}

export default Routes;
