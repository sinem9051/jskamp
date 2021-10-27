 
console.log("Hello World")
// JS type safe değildir.



let  USDToday = 3.20
let  USDYesterday = 3.10


console.log("USD BUGÜN : "  + USDToday)
console.log("USD Dün : "  + USDYesterday)

if(USDToday > USDYesterday){
  console.log("Dolar artdı img")
    }
    else if (USDToday < USDYesterday) {
        console.log("Dolar düştü img")

    } else {
        
        console.log("Dolar aynı img")
    }

    const EuroDun = 4.20
    
    console.log( "Euro Dun : "  + EuroDun)

    // Array
    // camelCasing
    // PascalCasing

    
    let konutKredileri = ["A Kredisi" ," B Kredisi" , " C Kredisi "]
    
    for (let i =0 ;  i < konutKredileri.length; i++) {

        console.log(konutKredileri[i])

        }
    
        console.log("Samet")

        function Save(){
            console.log("save metotu calısdı ")
        }

       

        function Delete(){
            console.log("Delete metotu calısdı ")
        }

        function Update(){
            console.log("Update metotu calısdı ")
        }

        function GetAll(){
            console.log("GetAll metotu calısdı ")
        }

        // CRUD İŞLEMLERİ
        // create 
        // read
        // update
        // Delete

        let User1 =  {Id:1 , Name: "Engin" , Phone: "444444" , TC: "9999999" , Maas:"8000" }
        let User2 =  {Id:2 , Name: "Samet" , Phone: "555555" , TC: "66666" , Maas:"15000" }
        let User3 =  {Id:3 , Name: "Sinem" , Phone: "666666" , TC: "777777" , Maas:"25000" }

        function Save(user){
            console.log(user.Name + " : " + user.Maas + " TL ")
        }

        Save(User3);

     let  users = ["samet","sinem","engin"]
     console.log(users)

     console.log("..............")
     let users2 = [User1, {ID:4, Name:"Eslem"}, "Aydın", {city:"istanbul"}]
     console.log(users2)

     console.log("..........")

      //rest 
      console.log("rest")

    let showProducts = function (id,...products){
        console.log(id)
        console.log(products)
    }

   // console.log(typeof showProducts)
   
   showProducts(11,["elma","armut"],["çilek","kiraz","erik"]);
    

   // spread:ayırmak
   console.log("spread")
    
   let points=[10,20,30,25,15,12]
   console.log(...points)
   console.log("en büyük rakamdır"+ Math.max(...points))
   console.log(..."ABC","D",..."EFG","H")


    //Destructure

    let populations = [10000,20000,30000]
    let [small,medium,high] = populations
    console.log(small)
    console.log(medium)
    console.log(high)

    console.log("destructing")
    function fun1() {
        console.log("fun1 çalıştı.")
    }
    let Array1 = [10,20,fun1,"samet"]
    let [sayi1,sayi2,metot,string] = Array1

    console.log(string) 

    let blog = {id:1 , BlogTitle:"yazılım"}
    console.log(blog.id) //id yi okuması için yazdık
    console.log(blog["BlockTitle"]) 

    