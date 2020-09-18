function my_instance_of(leftVaule, rightVaule) {
    if (typeof leftVaule !== 'object' || leftVaule === null) {
        return false;
    }

    let rightProto = rightVaule.prototype,
        leftProto = leftVaule.__proto__;

    while (true) {
        if (leftProto === null || leftProto === undefined) {
            return false;
        }
        if (leftProto === rightProto) {
            return true;
        }
        leftProto = leftProto.__proto__;
    }
}