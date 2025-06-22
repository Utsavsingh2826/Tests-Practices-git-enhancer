//Q1
const products = ["Phone","WashingMachine","Soaps"]
const [item1,item2,item3] = products;
console.log(item1,item2,item3)

const price = [{
    name:"Phone",price:1000
},
{
    name:"Soaps",price:2000
}
]

const {item,itemsoap} = price;
console.log(item,itemsoap);

//Q2
class Product{
    name
    productid
    price

    constructor(name , productid ,price){
        this.name = name;
        this.productid= productid;
        this.price = price;
    }
    displayinfo(name,productid,price) {
        console.log(this.name,this.price)
    }

}

const pro = new Product("Utsav",2,1000);
pro.displayinfo();

//Q3

const fetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId) {
                resolve({ id: userId, name: "John Doe", email: "john@example.com" });
            } else {
                reject("User ID is required!");
            }
        }, 2000);
    });
};

fetchUserData(101)
    .then((user) => console.log("User Data:", user))
    .catch((err) => console.error("Error:", err));




//Q4
async function fetchUserDetails(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log("Fetched User:", user);
    } catch (error) {
        console.error("Error Fetching User:", error);
    }
}
fetchUserDetails(102);



//Q5
function calculateTotal(discount = 0, taxRate = 0, ...prices) {
    const total = prices.reduce((sum, price) => sum + price, 0);
    const discountedTotal = total - discount;
    const finalAmount = discountedTotal + discountedTotal * (taxRate / 100);
    return finalAmount.toFixed(2);
}

console.log("Final Price:", calculateTotal(10, 5, 100, 200, 50)); 



//Q6
const jsonString = '{ "name": "Ustav", "age": 21 }';
try {
    const user = JSON.parse(jsonString);
    console.log("Parsed User:", user);
} catch (error) {
    console.error("JSON Parsing Error:", error.message);
}


//Q7
function validateUser(user) {
    if (!user.name) throw new Error("User must have a name!");
    if (!user.age || user.age < 18) throw new Error("User must be at least 18!");
}

function registerUser(user) {
    try {
        validateUser(user);
        console.log("User registered successfully!", user);
    } catch (error) {
        console.error("Registration Error:", error.message);
    }
}

registerUser({ name: "Bob", age: 17 }); 



//Q8
function processTransaction(amount) {
    try {
        console.log("Processing transaction...");
        if (amount <= 0) throw new Error("Invalid transaction amount!");
        console.log(`Transaction of $${amount} completed successfully.`);
    } catch (error) {
        console.error("Transaction Failed:", error.message);
    } finally {
        console.log("Closing transaction resources.");
    }
}

processTransaction(0); 
//Q9
class InvalidCouponCode extends Error {
    constructor() {
        super('Invalid coupon code');
        this.name = 'InvalidCouponCode';
    }
}
try {
    throw new InvalidCouponCode();
} catch (error) {
    console.log(error.name, error.message);
}



//q10
function checkInventory(quantity) {
    if (quantity < 5) {
        throw new Error('Low stock warning!');
    }
    return 'Sufficient stock available';
}
try {
    console.log(checkInventory(3));
} catch (error) {
    console.log(error.message);
}

