var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    Grocery.prototype.display = function () {
        return "<li>".concat(this.name, " - ").concat(this.quantity, "</li>");
    };
    return Grocery;
}());
var groceries = [
    new Grocery('Milk', 3),
    new Grocery('Bread', 6),
    new Grocery('Eggs', 11)
];
// Generate HTML for groceries
var groceryHTML = '<ul>';
for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
    var item = groceries_1[_i];
    groceryHTML += item.display();
}
groceryHTML += '</ul>';
// Assuming you have an HTML element with id "grocery-list"
// Check if the element exists before trying to set its innerHTML
var groceryElement = document.getElementById('grocery-list');
if (groceryElement) {
    groceryElement.innerHTML = groceryHTML;
}
else {
    console.error('Could not find element with id "grocery-list"');
}
