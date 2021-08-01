
function lazyload() {
    const imgs = document.getElementsByTagName('img');
    const  len = imgs.length;

    // 视口高度
    const viewHeight = document.documentElement.clientHeight;

    // 滚动条高度
    const scrollHight = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 1; i < len; i++){
        const offsetHight = imgs[i].offsetTop;
        if(offsetHight < viewHeight + scrollHight){
            const src = imgs[i].dataset.src;
            imgs[i].src = src;
        }
    }
}
// 可以使用节流优化
window.addEventListener('scroll', lazyload);