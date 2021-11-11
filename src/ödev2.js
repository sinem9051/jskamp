console.log("--------2.GünÖdevi---------")

console.log("1.ödev")

function number(...numbers){
let sayac
    for(let i=0; i<numbers.length;i++) //arraylerin indexi sıfırdan başladığı için sıfır
    {
    sayac=0 // bölen sayısı
        for(let a=1; a<=numbers[i]; a++)
        {
            if((numbers[i]%a)==0)
            {
				sayac++;				
			}
    
        }     
        if(sayac==2)
        {
            console.log(numbers[i]+" Asal sayıdır.")
        }

}
}
number(11,20,30,91,43)
