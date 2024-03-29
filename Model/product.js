const { rejects } = require('assert');
const { json } = require('body-parser');
const { error } = require('console');
const fs=require('fs');
const { resolve } = require('path');

module.exports=class Products{
    constructor(Item,size){
        this.Item=Item;
        this.size=size
    }
    save(){
        this.id=Math.round((Math.random()*10)).toString()
        const storeObj=JSON.stringify(this);
        fs.appendFile('message.txt',storeObj+'\n',(error)=>{
            console.log(error)
        })
    }
    static fetchAll() {
        return new Promise((resolve, reject) => {
            fs.readFile('message.txt', 'utf8', (error, data) => {
                if (error) {
                    console.error('Error reading file:', error);
                    reject(error);
                }
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const products = lines.map(line => JSON.parse(line));
                console.log(products)
                resolve(products);
            });
        });
    }
    static async getById(id){
         let res=await Products.fetchAll();
         let res1=res.find(pro => pro.id === id);
         console.log(res1)
         return JSON.stringify(res1);
    }
}