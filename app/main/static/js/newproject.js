
function createProject () {
    var name = document.getElementById("NewProject_Name").value
    var detail = document.getElementById("NewProject_Name").value
    var location = document.getElementById("NewProject_Name").value
    var cost = document.getElementById("NewProject_Name").value
    var material = document.getElementById("NewProject_Material").checked



    console.log(material)
} 

$(function() {
    var temp="Maharashtra"; 
    $("#NewProject_State").val(temp);
    print_city('NewProject_City', 21);
    setTimeout(function(){ 
         $("#NewProject_City").val(" Pune "); 
         print_area('NewProject_Area', 1);
        }, 1000);


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    
    $("#NewProject_StartDate").attr({
    "min" : today,        // substitute your own
    // "min" : 2          // values (or variables) here
    });
    $("#NewProject_EndDate").attr({
        "min" : today,        // substitute your own
        // "min" : 2          // values (or variables) here
    });
});