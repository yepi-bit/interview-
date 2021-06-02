// 方式1
const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => (
            (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
        ),
        {}
    );

getURLParameters('google.com'); // {}
console.log(getURLParameters('google.com'));
getURLParameters('http://url.com/page?name=Adam&surname=Smith');
console.log(getURLParameters('http://url.com/page?name=Adam&surname=Smith'));
// {name: 'Adam', surname: 'Smith'}


// 方式2
const getBaseURL = url => url.replace(/[?#].*$/, '');

getBaseURL('http://url.com/page?name=Adam&surname=Smith');
console.log(getBaseURL('http://url.com/page?name=Adam&surname=Smith'));
// 'http://url.com/page'
