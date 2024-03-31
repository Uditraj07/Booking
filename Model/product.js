const db=require('../ROOTPATH/database');

module.exports=class Products{
    constructor(Item,size){
        this.Item=Item;
        this.size=size
    }
    save(){
        this.id=Math.round((Math.random()*10)).toString()
        return db.execute("insert into produt values(?,?,?)",[this.id,this.Item,this.size])
    }
    static fetchAll() {
        return db.execute("select * from produt")
    }
    static  getById(id){
        return db.execute("select * from produt where produt.id=?",[id]);
    }
}