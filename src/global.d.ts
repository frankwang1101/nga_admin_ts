declare interface ObjectConstructor {
  assign(...objects: Object[]): Object;
}

declare interface BaseState {
  user: {
    username: string;
    [key:string]: string | number;
  }
}