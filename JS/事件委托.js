//	base
ul.addEventListener('click', function(e) {
    console.log(e, e.target);

    if (e.target.tagName.toLowerCase() === 'li') {
        console.log('li click');
    }
})


//	advance
function delegate(element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
        let el = e.target
        while (!el.matches(selector)) {
            if (element === el) {
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el, e, el)
    }, true)
    return element
}