/* footer stuff */
document.write("<footer> <p id='foot'> Kate Wauschek <span>&copy;</span> 2022. All Rights Reserved </p> </footer>");
document.getElementById("foot").setAttribute("style", "color:red;");

/* hyperlink */
document.getElementById("hyper").setAttribute("target", "_blank");

/* image */
document.getElementById("image").removeAttribute("width"); 
document.getElementById("image").setAttribute("style", "max-width:80%; margin-left:auto; margin-right:auto;display: block;");
document.getElementById("image").setAttribute("alt", "Chinchillas");


