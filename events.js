//sustituir el modulo events de node:

class EventEmitter{
    constructor(){
        this.events = {};
    }

    on(event, callback){
        if(!this.events[event])
            this.events[event] = [];

        this.events[event].push(callback);
    }

    emit(event, params){
        this.events[event].forEach(fn => {
            fn(params);
        }); 
    }
}

exports = module.exports = EventEmitter;









