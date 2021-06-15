let map = new Map();
map.set("name","Wang");
map.set("age",25);
console.log(map.size);
console.log(map.has("name"));
console.log(map.get("name"));
map.delete("name");
console.log(map.has("name"));
console.log(map.get("name"));
map.clear();
console.log(map.has("age"));
console.log(map.size);

let map2 = new Map([["name","Cheng"],["age","18"]]);
map2.forEach(function (value, key, ownerMap) {
    console.log(key + " " + value);
    console.log(ownerMap === map2);
})


let map3 = new WeakMap(),
    element = document.querySelector(".element");
map3.set(element,"Original");
let value =map3.get(element);
console.log(value);
element.parentNode.removeChild(element);
element = null;
