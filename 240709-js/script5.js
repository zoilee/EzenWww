let a = 10, b=20, m=30, n=40;
let rs;

rs = a>b || b>=m||m>n; //false||false||false

console.log(rs)

rs = a>b || b>=m||m<=n;

console.log(rs)

a<=b&&b>=m&&m<=n //true fals trie false

a<=b&&b<=m&&m<=n //true true false true

!(a>b)  //true


a = 10; b = 3;
rs = a > b ? "javascript" : "hello";

console.log(rs);