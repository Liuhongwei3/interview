function sumString(a, b) {
    a = '0' + a;
    b = '0' + b;
    var arrA = a.split(''),
        arrB = b.split(''),
        res = [],
        temp = 0,
        carry = 0, //  进位
        distance = a.length - b.length,
        len = distance > 0 ? a.length : b.length;
    if (distance > 0) {
        for (let i = 0; i < Math.abs(distance); i++) {
            arrB.unshift('0');
        }
    } else {
        for (let i = 0; i < Math.abs(distance); i++) {
            arrA.unshift('0');
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        temp = Number(arrA[i]) + Number(arrB[i]) + carry;
        if (temp >= 10) {
            carry = 1;
            //  存在进位时，获取低位
            res.unshift(Math.floor(temp % 10))
        } else {
            carry = 0;
            res.unshift(temp)
        }
    }
    res = res.join('').replace(/^0/, '');
    return res;
}

var addTwoNumbers = function(l1, l2) {
    let num1 = [], num2 = [];
    while(l1.next){
        num1.unshift(l1.val);
        l1 = l1.next;
    }
    num1.unshift(l1.val);
    while(l2.next){
        num2.unshift(l2.val);
        l2 = l2.next;
    }
    num2.unshift(l2.val);
    num1 = num1.join("");
    num2 = num2.join("");
    let sum = sumString(num1, num2).split("").reverse();
    let head = new ListNode(parseInt(sum[0]));
    let prevNode = head;
    for(let i=1; i<sum.length; i++){
        prevNode.next = new ListNode(parseInt(sum[i]));
        prevNode = prevNode.next;
    }
    return head;
};