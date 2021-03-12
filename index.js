        //Validation Function Starts
    function validation(){

        // Fetching Values in Variables
    var RollNo = document.getElementById("RollNo").value;
    var Comp = parseInt(document.getElementById("ComputerMarks").value);
    var Phy = parseInt(document.getElementById("PhyMarks").value);
    var Che = parseInt(document.getElementById("CheMarks").value);
    var Mathematics = parseInt(document.getElementById("MathMarks").value);
    var Geo = parseInt(document.getElementById("GeoMarks").value);

        // Calculating Total
    var total = Comp + Phy + Che + Mathematics + Geo;
        // Calculating Average
    var avg = total / 5;

        // Roll No Validations
    if(RollNo == ""){
        document.getElementById("errorRollNo1").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Hold Your Horses! Required Field!";
        return false;
    }
    if(isNaN(RollNo)){
        document.getElementById("errorRollNo2").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Numbers are allowed only!";
        return false;
    }

        // Computer Validations
    if(Comp == ""){
        document.getElementById("errorComputerMarks1").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Hold Your Horses! Required Field!";
        return false;
    }
    if(isNaN(Comp)){
        document.getElementById("errorComputerMarks2").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Numbers are allowed only!";
        return false;
    }
    if(Comp >= 101){
        document.getElementById("errorComputerMarks3").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Total Number of the subject is 100 only!";
        return false;
    }

        // Physics Validations
    if(Phy == ""){
        document.getElementById("errorPhyMarks1").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Hold Your Horses! Required Field!";
        return false;
    }
    if(isNaN(Phy)){
        document.getElementById("errorPhyMarks2").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Numbers are allowed only!";
        return false;
    }
    if(Phy >= 101){
        document.getElementById("errorPhyMarks3").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Total Number of the subject is 100 only!";
        return false;
    }

        // Chemistry Validations
    if(Che == ""){
        document.getElementById("errorCheMarks1").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Hold Your Horses! Required Field!";
        return false;
    }
    if(isNaN(Che)){
        document.getElementById("errorCheMarks2").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Numbers are allowed only!";
        return false;
    }
    if(Che >= 101){
        document.getElementById("errorCheMarks3").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Total Number of the subject is 100 only!";
        return false;
    }

        // Mathematics Validations
    if(Mathematics == ""){
        document.getElementById("errorMathMarks1").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Hold Your Horses! Required Field!";
        return false;
    }
    if(isNaN(Mathematics)){
        document.getElementById("errorMathMarks2").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Numbers are allowed only!";
        return false;
    }
    if(Mathematics >= 101){
        document.getElementById("errorMathMarks3").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Total Number of the subject is 100 only!";
        return false;
    }

        // Geography Validations
    if(Geo == ""){
        document.getElementById("errorGeoMarks1").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Hold Your Horses! Required Field!";
        return false;
    }
    if(isNaN(Geo)){
        document.getElementById("errorGeoMarks2").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Numbers are allowed only!";
        return false;
    }
    if(Geo >= 101){
        document.getElementById("errorGeoMarks3").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Total Number of the subject is 100 only!";
        return false;
    }

        // Displaying Record in HTML Divs
    {    document.getElementById("totalMarks").innerHTML = "Total Marks: "+total;}
    {    document.getElementById("avg").innerHTML = "Average: "+avg+"%";}

        // Calculating Grade
    if (avg >=80 && avg <=100){
        document.getElementById("grading").innerHTML = "Grade: A";
        return false;
    }
    if (avg >=75 && avg <80){
        document.getElementById("grading").innerHTML = "Grade: B+";
        return false;
    }
    if (avg >=70 && avg <75){
        document.getElementById("grading").innerHTML = "Grade: B";
        return false;
    }
    if (avg >=65 && avg <70){
        document.getElementById("grading").innerHTML = "Grade: C+";
        return false;
    }
    if (avg >=60 && avg <65){
        document.getElementById("grading").innerHTML = "Grade: C";
        return false;
    }
    if (avg >=55 && avg <60){
        document.getElementById("grading").innerHTML = "Grade: D+";
        return false;
    }
    if (avg >=50 && avg <55){
        document.getElementById("grading").innerHTML = "Grade: D";
        return false;
    }
    if (avg <50){
        document.getElementById("grading").innerHTML = "Grade: F";
        return false;
    }

}