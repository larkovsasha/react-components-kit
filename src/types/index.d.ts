type ObjectKeys<T> = T extends object
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array | string
  ? string[]
  : never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>;
}

type TValuesObject<T> = Record<keyof any, T>;
