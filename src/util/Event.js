const Event = {    
  _events: {},    
  emit: function (event, data) {        
    if (!this._events[event]) return;             
    this._events[event].forEach(callback => callback(data))
  },    
  on: function (event, callback) {      
    if (!this._events[event]) this._events[event] = [];        
    this._events[event].push(callback);    
}}

module.exports = { Event };