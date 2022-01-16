// type that returns a union type of all nested object keys.
// Slightly modified from https://stackoverflow.com/a/58436959
// Thanks to jcalz: https://stackoverflow.com/users/2887218/jcalz
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : '';

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : '';

type NestedObjectLeaves = Leaves<NestedObjectType>;
// type NestedObjectLeaves = "a" | "b" | "nest.c" | "otherNest.c"

interface Tree {
  left: Tree;
  right: Tree;
  data: string;
}

type TreeLeaves = Leaves<Tree, 3>;

export type NestedObjKeys<T extends object> = Paths<T>;

type NestedObjectType = {
  a: string;
  b: string;
  nest: {
    c: string;
  };
  otherNest: {
    c: string;
  };
};
