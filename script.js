const text = document.getElementById('text');
const container = document.getElementById('add');
const button = document.getElementById('button');
var str=``;
var flag = false;
var id=1;
function add()
{
    container.style.display = "inline-block";
    button.style.display = "";
}

function addContent()
{
    container.style.display = "none";
    button.style.display = "none";
    console.log(document.getElementById('text').value);
    str+=`<div class="inner" id="${id}">
            <div class="delete"></div>
    <textarea name="" onmouseover="myFunction(${id})" id="cont" cols="36" rows="12">${document.getElementById('text').value}</textarea>
        </div>`;
        document.getElementById('text').value="";
        id++;
    document.getElementById('add-container').innerHTML = str;    
}

function deleteData()
{
     flag = true;
     console.log("gbrejbhgerj");
}

// document.getElementById('inner').addEventListener("click", myFunction);

function myFunction(id)
{
    console.log("cjdshjvghjrgh")
    if(flag == true)
    {
        document.getElementById(id).style.display = "none";
    }
    flag = false;
}
