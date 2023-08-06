let temp = document.querySelector('#inputTemp');
const tempChange = () =>{
    document.getElementById("outTemp").innerHTML = (parseFloat(Number(temp.value))-32)/1.8;
}
