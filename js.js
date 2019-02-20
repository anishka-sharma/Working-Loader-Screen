 function f(){
    var loader = document.getElementById("loader");
    var data = document.getElementById("h2");
    var width = 1;
    var id = setInterval(draw,30);

    function draw(){
        if (width>=100)
        {
            clearInterval(id);
        }

        else{
            width++;
            loader.style.width = width+"%";
            data.textContent = width+"%";
        }
    }
}