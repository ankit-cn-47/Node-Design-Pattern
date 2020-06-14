var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);
var group_food = new CatalogGroup('food', [
    new CatalogItem('milkshake', 10),
    new CatalogItem('popcorn', 20)
]);

var key = new CatalogItem('keyChain', 10);

var completeCatalog = new CatalogGroup('CompleteCatalog', [group_shoes, group_food, key]);

console.log('total', completeCatalog.total);

completeCatalog.print();
