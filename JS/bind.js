//	return function,not run
Function.prototype.mybind = function(context = window, ...args) {
    return (...newArgs) => {
        return this.call(context, ...args, ...newArgs)
    }
}