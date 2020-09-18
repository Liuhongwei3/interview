let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];

arr1.forEach(item => parseInt(item));
arr2.forEach(item => parseInt(item));

function doSth() {
    let res = [...arr1, ...arr2].sort();
    return res;
}

console.log(doSth().join(","));


let obj = { "1": 123, "2": 234, "8": 456 };
obj = JSON.parse(JSON.stringify(obj));

let res = [];
let keys = Object.keys(obj);
keys.forEach(item => parseInt(item));
let len = Math.max(...keys);

for (let i = 0; i < len; i++) {
    res[i] = 0;
}
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        res[parseInt(key - 1)] = obj[key];
    }
}
res = JSON.parse(JSON.stringify(res));

console.log(res)


let len = 6;
let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < len; i++) {
//     arr[i] = i;
// }

let res = [];
let half = Math.floor(arr.length / 2);
let left = parseInt(arr[half]);
let right = parseInt(arr[half - 1]);

for (let i = 0; i < len; i++) {
    res[i] = i < half ? left : right;
}

console.log(res)


let n = 2;
let arr = [43211234, 101];
let res = [];
let res2 = [];

function doNum(arr, flag = 0) {
    if (arr.length === 0) {
        return;
    }
    arr = typeof arr == "number" ? String(arr).split("") : arr;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (temp === arr[i + 1]) {
            flag += 1;
            res.push(flag)
            arr.splice(i, 2);
            doNum(arr, flag)
        }
    }
}

function doSth(arr) {
    for (let i = 0; i < n; i++) {
        res = []
        doNum(arr[i]);
        if (res.length === 0) {
            res2.push(0);
            continue;
        }
        res2.push(Math.max(...res))
    }
}

doSth(arr)

console.log(res2)



function Calendar(container, year, month) {
    console.log(container)
    this.year = year;
    this.month = month;
    this.html = html;
    this.el = document.createElement('table'); //TODO: 创建分页组件根节点
    // if (!el) return;
    this.el.className = 'calendar';
    this.el.innerHTML = this.html();
    container.appendChild(this.el);

    this.el.addEventListener('click', event => {
        var el = event.target;
        var isPre = el.classList.contains('pre');
        var isNext = el.classList.contains('next');
        if (!isPre && !isNext) return;
        if (isPre) {
            //TODO: 更新this.month和this.year
            if (this.month == 1) {
                this.year -= 1
                this.month = 12
            } else {
                this.month -= 1
            }
        } else {
            //TODO: 更新this.month和this.year
            if (this.month == 12) {
                this.year += 1
                this.month = 1
            } else {
                this.month += 1
            }
        }
        this.el.innerHTML = this.html();
    });

    function html() {
        var date = new Date();
        var year = +this.year || 0;
        var month = (+this.month || 0) - 1;
        var day = date.getDate();
        var current_month = date.getMonth();
        var current_year = date.getFullYear();
        //TODO: 生成组件的内部html字符串
        let head =
            `<thead><tr><th class="pre"><</th><th colspan="5" class="date">${year}.${month<9?'0'+(month+1):String((month+1))}</th><th class="next">></th></tr><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead>`
        let body = ''
        let start = new Date(year, month, 1).getUTCDay()
        let days = 31
        if (month == 3 || month == 5 || month == 8 || month == 10) {
            days = 30
        }
        if (month == 1) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 1000 == 0) {
                days = 29
            } else {
                days = 28
            }
        }
        let count = 0
        for (let i = 0; i < 6; i++) {
            if (i == 5 && count - start + 1 > days) {
                continue
            }
            body += '<tr>'
            for (let j = 0; j < 7; j++) {
                if (count >= start && count - start + 1 <= days) {
                    if (count - start + 1 == day && month == current_month && year == current_year) {
                        body += `<td class="current">${count-start+1}</td>`
                    } else {
                        body += `<td>${count-start+1}</td>`
                    }
                } else {
                    body += '<td></td>'
                }
                count++
            }
            body += '</tr>'
        }
        return head + body;
    }
}