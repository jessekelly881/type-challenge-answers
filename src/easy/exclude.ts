type MyExclude<A, N> = A extends N ? never : A;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
