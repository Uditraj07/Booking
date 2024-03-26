const { error } = require('console');
const fs=require('fs')

module.exports=class Products{
    constructor(Item,size){
        this.Item=Item;
        this.size=size
    }
    save(){
        const storeObj=JSON.stringify(this);
        fs.appendFile('message.txt',storeObj+'\n',(error)=>{
            console.log(error)
        })
    }
    static fetchAll() {
        fs.readFile('message.txt', 'utf8', (error, data) => {
            if (error) {
                console.error('Error reading file:', error);
                return;
            }
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const products = lines.map(line => JSON.parse(line));
            console.log('Products:', products);
        });
    }
}