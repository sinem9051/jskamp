class Customer{
    constructor (id,customerNumber){
        this.id=id // id yi kullan yukarıdaki , aktifleştiriyor
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1,"12345");
//prototyping
customer.name="sinem oktay"
console.log(customer.name)

Customer.bişey="Bişey"
console.log(Customer.bişey)

console.log(customer.customerNumber)


class İndividualCustomer extends Customer{
    constructor(firstName,id,number){
        super(id,number)
        this.firstName = firstName
    }
}

console.log(İndividualCustomer.firstName)

class CorporateCustomer extends Customer{
    constructor(companyName,id,number){
        super(id,number)
        this.CompanyName= companyName
    }
}

