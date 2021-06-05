// Set 对象是一组不重复的值，重复的值将被忽略，值类型可以是原始类型和引用类型
// WeakSet是一种弱引用，同理WeakMap

// Set
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s);
s.size === 2;
s.has("hello") === true;

// Map
var m = new Map();
m.set("hello", 42);
console.log(m);
m.set(s, 34);
console.log(m);
m.get(s) == 34;

// Weak Map
var wm = new WeakMap();
wm.set(s, { extra: 42 });
console.log(wm);
wm.size === undefined

// Weak Set
var ws = new WeakSet();
ws.add({ data: 42 });
