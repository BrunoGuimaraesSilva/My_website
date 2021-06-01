declare module 'typewriter-effect/dist/core'; 

type SpinAction = {
  type: string;
};

type SpinState = {
  spin: boolean;
};

type DispatchTypeSpin = (args: SpinAction) => SpinAction;

