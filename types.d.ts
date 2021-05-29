type SpinAction = {
  type: string;
};

type SpinState = {
  spin: boolean;
};

type DispatchType = (args: SpinAction) => SpinAction;
