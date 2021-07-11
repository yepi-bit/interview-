
function ReverseList(root) {
    if(root === null || root.next === null) return root;
    if(root.next.next === null) {
        root.next.next = root;
        return root.next;
    } else {
        let result = ReverseList(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}
