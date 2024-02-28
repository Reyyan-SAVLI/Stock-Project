const db = require('../models/conn');

class Purchase{
    constructor(id, item_id, purchase_qty){
        this.id = id;
        this.item_id = item_id;
        this.purchase_qty = purchase_qty;
    }

    static newPurchase(item_id, qty){
        return db.query('INSERT INTO purchases (item_id, purchase_qty) VALUES (?, ?)', [item_id,qty])
    }
}

module.exports = Purchase;