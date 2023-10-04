
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//pseudocode
//#1 - identify how to get refilltotal, which is the amount of "refills" multiplied by "priceperrefill"
//#2 - identify if the customer has a subscription with an absolue true, or false - if false turn to next condition of coupon, if false, return total
 

function finalAmount(customer){
    // refill price total equals to number of refills multiplied by price of refill 
    let refillTotal = customer.pricePerRefill * customer.refills;
    if (customer.subscription=== true){
        refillTotal *= 0.75;
    }
    if (customer.coupon === true){
        refillTotal -= 10;
    }
    return refillTotal;
}
const finalAmountTimmy = finalAmount(timmy);
const finalAmountSarah = finalAmount(sarah);
const finalAmountRocky = finalAmount(rocky);

console.log(`Timmy = your grand total is $${finalAmountTimmy}`);
console.log(`Sarah = your grand total is $${finalAmountSarah}`);
console.log(`Rocky = your grand total is $${finalAmountRocky} `);
