var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s;
    }
    let start = end = 0;
    let len = s.length;
    let centerExpend = (left,right) => {
        while(left >= 0 && right < len && s[left] == s[right]){
            left--;
            right++;
        }
        return (right - left) - 1;
    }
    for(let i = 0; i < len; i++){
        let len1 = centerExpend(i, i);
        let len2 = centerExpend(i, i+1);
        let maxLen = Math.max(len1 ,len2);
        if(maxLen > end - start){
            start = i - ((maxLen - 1) >> 1);
            //end = i + (maxLen >> 1) + 1;
            end = start + maxLen;
        }
    }
    return s.substring(start,end);
};

console.log(longestPalindrome('122321'));
