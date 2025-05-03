let data = 0;
 
document.getElementById("b").innerText = data;
 
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("b").innerText = data;
}

function increment1() {
    data = data + 2;
    document.getElementById("b").innerText = data;
}

function increment2() {
    data = data + 3;
    document.getElementById("b").innerText = data ;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("b").innerText = data;
}

function decrement1() {
    data = data - 2;
    document.getElementById("b").innerText = data;
}
   
    function decrement2() {
        data = data - 3;
        document.getElementById("b").innerText = data;
        }