//your code here
let arr = document.getElementsByClassName("price");

let sm=0;
for(let i=0;i<arr.length;i++){
    arr[i].setAttribute("data-ns-test","price");
    sm+=parseInt(arr[i].innerHTML);
}

let tp = document.createElement("tr");
let ch = document.createElement("td");
ch.setAttribute("data-ns-test","grandTotal");
ch.setAttribute("id","gt");

ch.textContent = `${sm}`;

tp.appendChild(ch);

document.getElementById("tbl").appendChild(tp);