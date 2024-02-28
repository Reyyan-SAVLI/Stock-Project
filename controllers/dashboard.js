const Item = require('../models/items');
const Purchase = require('../models/purchases');

async function simulatePurchase(req, res){
    console.log(req.body);

    const purchaseId = await Purchase.newPurchase(req.body.itemid, req.body.qty);

    await Item.inventoryChange(req.body.itemid, req.body.qty);

    res.send(`Purchase ID: ${purchaseId.id}`);

}

module.exports = {
    simulatePurchase
}