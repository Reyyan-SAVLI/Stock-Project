const db = require('../models/conn');

class Item{
    constructor(id, name, sku, inventory){
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.inventory = inventory;
    }

    static inventoryChange(itemid, qty){
        console.log('This is itemId: ${itemid}');
        return db.query(
            'UPDATE items SET inventory = inventory + ? WHERE id= ?',[qty, itemid]
        )
    }
}

module.exports = Item;