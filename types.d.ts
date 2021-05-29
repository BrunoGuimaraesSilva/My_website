interface ISpin {
  spinning: boolean;
}

type SpinAction = {
  type: string;
};

type SpinState = {
  spin: boolean;
};

type DispatchType = (args: SpinAction) => SpinAction;
