$(document).ready(()=>{
    console.log("test t-insan");
    tName=getUrlParameter("slug");
    tName=tName?.replaceAll("-"," ");
    
    var arr=tName.split(" ")
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    tName = arr.join(" ");
    console.log(tName);
    $('#t-Title').text(tName)
});
var tName="";
getUrlParameter=(sParam)=> {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

showOffCanvas=(name)=>{
    console.log("aaaaaaaaaaaaaa" + name);
    var myOffcanvas=$('#offcanvasRight');

    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
    bsOffcanvas.show();

    $('#offcanvas-title').text(name);
}