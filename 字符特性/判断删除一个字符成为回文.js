
const isSymmetry = (str, flag = false) => {
    let l = 0;
    let r = str.length - 1;
    while (l <= r) {
        if (str[l] === str[r]) {
            l++;
            r--;
        } else {
            if (flag) {
                return false;
            }
            if (
                !isSymmetry(str.substring(l, r), true) &&
                !isSymmetry(str.substring(l + 1, r + 1), true)
            ) {
                return false;
            }
            return true;
        }
    }
    return true;
};
console.log(isSymmetry('abcdscba'));
