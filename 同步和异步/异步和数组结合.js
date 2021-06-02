const asyncUppercase = (item) =>
    new Promise(resolve =>
        setTimeout(
            () => resolve(item.toUpperCase()),
            Math.floor(Math.random() * 1000)
        )
    );

const uppercaseItems = async () => {
    const items = ['a', 'b', 'c', '1.22'];
    for (item of items) {
        const uppercaseItem = await asyncUppercase(item);
        console.log(uppercaseItem);
    }

    console.log('Items processed');
};
const uppercaseItems1 = () => {
    const items = ['d', 'e', 'f'];
    return Promise.all(
        items.map(async item => {
            const uppercaseItem1 = await asyncUppercase(item);
            console.log(uppercaseItem1);
        })
    ).then(() => {
        console.log('Items processed1');
    });
};
const uppercaseItems2 = async () => {
    const items = ['g', 'h', 'i'];
    await items.forEach(async item => {
            const uppercaseItem2 = await asyncUppercase(item);
            console.log(uppercaseItem2);
    });

    console.log('Items processed2');
};


uppercaseItems();
uppercaseItems1();
uppercaseItems2();
// LOGS: 'A', 'B', 'C', 'Items processed'
