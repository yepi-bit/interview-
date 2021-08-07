const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
]);

// 用 setTimeout 模拟异步的 api 调用
// timeout 会获得一个数组类型的数据，随后会有另外的 api 根据数组内的数据，再一次去进行异步调用，获取其他数据
const timeout = () =>
    new Promise((resolve) => setTimeout(() => resolve([1, 2, 3, 4, 5])), 1000);

// 循环体内调用的数据
const getEl = (key) =>
    new Promise((resolve) => setTimeout(() => resolve(map.get(key)), 1000));

const getData = async () => {
    // 使用 await 语法糖
    const data = await timeout();
    let str = [];
    // 加上 async 和 await 去等待异步调用
    for (let i = 0; i < data.length; i++) {
        const element = await getEl(data[i]);
        console.log(element);
        str.push(element);
    }
    // 返回值却是一个空数组
    console.log(str);
};

getData();
