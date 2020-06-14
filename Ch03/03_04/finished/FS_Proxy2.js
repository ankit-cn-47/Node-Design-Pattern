function createProxy(subject) {

    const Proto = Object.getPrototypeOf(subject);
    function Proxy(subject) {
        this.subject = subject;
    }

    

    Proxy.prototype = Object.create(Proto);

    Proxy.prototype.readFile = function(path, format, callback) {
        if(!path.match(/.md$ | /.MD$)) {
            return callback(new Error('Can Only read markDown files'));
        }

        return this.subject.readFile(path, format, (error, data) => {
            if(error){
                return callback(error);
            }
            return callback(null, data);
        });
    }

}

module.exports = createProxy;