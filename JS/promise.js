class myPromise {
    constructor(executor) {
        this._status = PENDING;
        //  确保先进先出
        this._resolveQueue = [];
        this._rejectQueue = [];
    }

    _resolve = val => {
        if (this._status !== PENDING) {
            return;
        }
        this._status = FULFIILED;
        while (this._resolveQueue.length) {
            const callback = this._resolveQueue.shift();
            callback(val);
        }
    }

    _reject = val => {
        if (this._status !== PENDING) {
            return;
        }
        this._status = REJECTED;
        while (this._rejectQueue.length) {
            const callback = this._rejectQueue.shift();
            callback(val);
        }
    }

    executor(_resolve, _reject);

    then(resFn, rejFn) {
        resFn && this._resolveQueue.push(resFn);
        rejFn && this._rejectQueue.push(rejFn);
    }
}