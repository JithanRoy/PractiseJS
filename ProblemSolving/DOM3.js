var Start = 0;
var End = Object.keys(window.theme.recentlyViewed.recent).length ;
var lastImage = 0;

function imgChange(startImage, endImage) {
    document.getElementsByClassName('mycontainer')[0].innerHTML = '';
   
    for (var i = startImage; i <=endImage ; i++) {
      var viewProduct = document.createElement('div')
     

      var productImage = document.createElement("IMG");
      productImage.setAttribute('src', "https://cdn.shopify.com/s/files/1/0283/1338/7053/products/NCBW-0020_NAVY_143-3-n-p-navy.jpg?v=1604417866");
      viewProduct.appendChild(productImage)
      viewProduct.innerHTML += `<p>${Object.keys(window.theme.recentlyViewed.recent)[lastImage + i]}</p>`
      viewProduct.style.width = '400px'
      viewProduct.style.padding = '10px'
      document.getElementsByClassName('mycontainer')[0].appendChild(viewProduct)
    }

}

function nxtView() {
   imgChange(Start++, End++)
}

function previousView() {
   imgChange(Start--, End--)
}

function startRender() {
var MainDiv = document.getElementById('shopify-section-footer-promotions');

var Div = document.createElement('div');
Div.style.textAlign = 'center'
Div.innerHTML = '<h1>RECENTLY VIEWED</h1>'
    MainDiv.appendChild(Div)

var btn1 = document.createElement('BUTTON');
var btn1Text = document.createTextNode("<");
btn1.appendChild(btn1Text);
btn1.setAttribute("id", "prebtn");

var btn2 = document.createElement('BUTTON');
var btn2Text = document.createTextNode(">");
btn2.appendChild(btn2Text);
btn2.setAttribute("id", "nextbtn");


var btn = document.createElement('div');
btn.appendChild(btn1)
btn.appendChild(btn2)

Div.appendChild(btn)

Div.innerHTML += '<div class="mycontainer"></div>'



imgChange(Start, End)
document.getElementById("prebtn").addEventListener("click", previousView);
document.getElementById("nextbtn").addEventListener("click", nxtView);

//All Styles
document.getElementsByClassName('mycontainer')[0].style.display = 'flex';
document.getElementsByClassName('mycontainer')[0].style.justifyContent = 'center';

btn.style.position = 'absolute'
btn.style.right = '20px'
btn.style.gap='20px'

btn1.style.width ='30px'
btn1.style.borderRadius= '25px'
btn1.style.border='2px solid black'

btn2.style.width ='30px'
btn2.style.borderRadius= '25px'
btn2.style.border='2px solid black'
}

startRender();
