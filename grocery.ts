class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }

    display(): string {
        return `<li>${this.name} - ${this.quantity}</li>`;
    }
}

let groceries: Grocery[] = [
    new Grocery('Milk', 3),
    new Grocery('Bread', 6),
    new Grocery('Eggs', 11)
];

// Generate HTML for groceries
let groceryHTML: string = '<ul>';
for (let item of groceries) {
    groceryHTML += item.display();
}
groceryHTML += '</ul>';

// Assuming you have an HTML element with id "grocery-list"
// Check if the element exists before trying to set its innerHTML
let groceryElement = document.getElementById('grocery-list');

if (groceryElement) {
    groceryElement.innerHTML = groceryHTML;
} else {
    console.error('Could not find element with id "grocery-list"');
}
