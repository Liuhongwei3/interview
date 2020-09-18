function createIterator(...args) {
    let i = 0;
    return {
        next: function() {
            let done = i >= args.length;
            let value = !done ? args[i++] : undefined;
            return {
                done,
                value
            }
        }
    }
}

let x = createIterator(1,2,3)

x.next();	//	{done: false, value: 1
x.next();	//	{done: false, value: 2
x.next();	//	{done: false, value: 3
x.next();	//	{done: true, value: undefined