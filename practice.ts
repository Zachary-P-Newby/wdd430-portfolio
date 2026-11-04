// 1) Implicit any
function greet(name: string): string {
  return `Hello, ${name.toUpperCase()}`;
}

// 2) Wrong return type (return the proper type using the reduce function using the items array)
function total(items: number[]): number {
  return items.reduce((total:number, newNumber:number)=>{total = total + newNumber; return total;}, 0);
}

// 3) Property does not exist on type
type Product = { id: number; title: string, price:number };
const p: Product = { id: 1, title: "Notebook", price: 1.85 };
console.log(p.price);

// 4) Unsafe union usage
function printId(id: string | number) {
    
    id = id.toString();
    console.log(id.toUpperCase());
}

// 5) Optional property used without a check
type User = { name: string; email?: string };
function emailDomain(user: User) {
  
    if(user.email != null){
        return user.email.split("@")[1];
    }
    else{
        return user.name;
    }
    

  
}

/*
type User = { name: string; email: string };
function emailDomain(user: User) {
  return user.email.split("@")[1];

  
}
  
  */



//Items is clearly an array of custom types so we will define it
type Item = {

    name: string,
    price: number, //Based on the code we can infer this is a number
    qty: number //Based on the code we can infer this is a number as well
}

//A custom object is retunred so we will just create a new type for it
type Order ={
    subtotal: number,
    tax: number,
    total: number
}

/*
export function formatCartTotal(items: Item[], taxRate: number): object {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  const newOrder = new Order(subtotal, tax, subtotal + tax)
  return newOrder;
}

*/