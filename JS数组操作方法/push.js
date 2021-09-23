
 // 当调用该方法时，新的 length 属性值将被返回。 数组push之后返回的是length,而不是新的数组
 var sports = ["soccer", "baseball"];
 var total = sports.push("football", "swimming");
 console.log(sports); // ["soccer", "baseball", "football", "swimming"]
 console.log(total); // 4
