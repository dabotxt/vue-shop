const data = {};
const name = 'vue';
Object.defineProperty(data, 'name', {
    get: function(){
        console.log('get');
        return name
    }
})

this.name = '123'
console.log(name)