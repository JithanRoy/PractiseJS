for(let i = 0; i <= 10; i++){
    // document.getElementById('value').innerHTML = `<h1></h1>`;
    let element = document.createElement("li");
    element.innerHTML = i + 3;
    document.getElementById('value').append(element);
}