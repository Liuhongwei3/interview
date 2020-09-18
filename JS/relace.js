String.prototype.replaceStr = function(oldChar, newChar) {
    //得到出现字符串时的下标
    var fromIndex = this.indexOf(oldChar);
    if (fromIndex == -1) return this.toString();
    //前段字符串
    var firstStr = this.substring(0, fromIndex);
    //后段字符串
    var nextStr = this.substring(fromIndex + oldChar.length, this.length);
    return firstStr + newChar + nextStr;
}

String.prototype.replaceAll = function(oldstr, newstr) {
    var oldlength = this.length;
    var ret = this.replaceStr(oldstr, newstr);
    while(this.indexOf(oldstr) != -1) {
        return ret.replaceAll(oldstr, newstr); 
    }
    return ret;
}

String.prototype.replaceAll  = function(s1,s2){
    //g 执行全局匹配 m 执行多行匹配
    return this.replaceStr(new RegExp(s1,"gm"),s2);     
} 
var teststr ="asdfasd"; 
console.log(teststr.replaceAll("as","www"));