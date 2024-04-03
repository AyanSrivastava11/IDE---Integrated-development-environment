function run(){
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");

    let output = document.getElementById("output");


    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value  + "</style>";

    output.contentWindow.eval(jsCode.value);

}


/* 

sample text to run 

JSUT COPY AND PASTE

<h1>heading</h1>
<button onclick = "myfunc()">tryit</button>

<div id="mydiv">
<h1>hello</h1>
</div>


#mydiv{
    width:300px;
 height:300px;
 background-color:coral;
 color:white;
 }


function myfunc(){
    document.getElementById("mydiv").style.backgroundColor = "lightblue";
}

*/