function appendValue(value){
    document.getElementById("tampilan").value += value;
    //untuk menambahkan tampilan angka yang di klik ke layar kalkulator
}
function clearDisplay(){
    document.getElementById('tampilan').value = "";
    //untuk menghapus konten di layar
}
function calculate(){
    //untuk menghitung hasil dan menampilkan hasil
    const display = document.getElementById('tampilan');
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}