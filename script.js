const button_2= document.querySelector('.button_2');
const imge =document.querySelector('.imge-main  img')
const nametitle=document.querySelector('.imge-main-text p');
const main_Shopping=document.querySelector('.main-Shopping span');
const price_button=document.querySelector('.price-button');
const total_button=document.querySelector('.total-button')
const Stock_button=document.querySelector('.Stock');
const stock_text=document.querySelector('.stock-text');

const button_1=document.querySelector('.button_1');


const valueSpan = document.querySelector('.cunt-btn');
console.log(valueSpan)
const incrementButton = document.querySelector('.plus-btn');
console.log(incrementButton)
const decrementButton = document.querySelector('.minyas-btn');
console.log(decrementButton)


// console.log(main_Shopping)
console.log(nametitle)
console.log(imge)
console.log(button_2);


const newcard=async()=>{

try {
    

    
    const factt = await fetch('https://dummyjson.com/products');
    const response= await factt.json()
    console.log(response)
    const mathcalculator=Math.floor(Math.random()*30);
 
    console.log(mathcalculator)

const imgeurl =  `${response.products[mathcalculator].thumbnail}`
const titlename =  `${response.products[mathcalculator].title}`
const description=  `${response.products[mathcalculator].description}`
const pricetime=response.products[mathcalculator].price
const stock=response.products[mathcalculator].stock
console.log(stock)


console.log(pricetime)

let integerPart = Math.floor(pricetime * 100); 
console.log(integerPart);
let integerPart1=`${integerPart}`;
 const totala = integerPart1.slice(0,4)
 price_button.innerHTML=`  ₹ ${ totala}`;
 total_button.innerHTML=`  ₹ ${totala*1.25}`;
 

console.log(description)
nametitle.innerHTML=`${titlename} + ${description}`



const mathid=Math.floor(Math.random()* 10000);
console.log(mathid)
main_Shopping .innerHTML=` ID: ${mathid}`;

console.log(titlename)
if(imgeurl){
    imge.setAttribute('src',imgeurl)
}


stock_text.style.display = 'none';


const stockadd = () => {
    
    stock_text.innerHTML=`${stock}`;
    if (stock_text.style.display === 'block') {
        
        stock_text.style.display = 'none';
    } else {
      
     stock_text.innerHTML=`${stock}`;
        stock_text.style.display = 'block';
    }
}

Stock_button.addEventListener('click', stockadd);




let value = 1;
let incrementCount = 1; 



incrementButton.addEventListener('click', () => {
    value++;
    incrementCount++;
    valueSpan.textContent = value;
})

decrementButton.addEventListener('click', () => {
    if (incrementCount > 1) {
        value--;
        incrementCount--;
        valueSpan.textContent = value;
    }
})
valueSpan.innerHTML='1'


} catch (error) {
    console.log(' facthing faild')
}







}






 button_2.addEventListener('click', newcard)


 newcard()


 const relod = () => {
    window.location.reload(); 
};

button_1.addEventListener('click', relod);
