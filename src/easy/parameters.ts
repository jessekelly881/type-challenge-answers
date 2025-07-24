type MyParameters<F> = F extends (...a: infer P) => unknown ? P : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
