// allow importing css from ts/tsx
declare module '*.css' {
    const value: any;
    export default value;
  }
  declare module '*.scss' {
    const value: any;
    export default value;
  }
  