function finding(){
    let text=document.getElementById("sen").value;
    let t=document.getElementById("fin")
    let n=text.search(/l/i);
    document.getElementById("finder").innerhtml=n;
}