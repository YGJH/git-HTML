function switchButton()
{
    var evolution = document.getElementById("image2");
    var evolution2 = document.getElementById("caption2");
    var evolution3 = document.getElementById("table2");
    var deevolution2 = document.getElementById("caption1");
    var deevolution3 = document.getElementById("table1");
    var deevolution = document.getElementById("image1");
    var switchButton = document.getElementById("switchButton");
    if( evolution.style.display == "none" ) {
        evolution.style.display = 'block';
        evolution2.style.display = 'block';
        evolution3.style.display = 'block';
        deevolution.style.display = 'none';
        deevolution2.style.display = 'none';
        deevolution3.style.display = 'none';
        switchButton.innerHTML = "退化";
    }
    else
    {
        evolution.style.display = 'none';
        evolution2.style.display = 'none';
        evolution3.style.display = 'none';
        deevolution.style.display = 'block';
        deevolution2.style.display = 'block';
        deevolution3.style.display = 'block';
        switchButton.innerHTML = "進化";
    }
}