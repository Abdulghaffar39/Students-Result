
var usrname = document.querySelector("#Student_Name")
var rollno = document.querySelector("#Student_Rollno")
var head_1 = document.querySelector("#head_1")
var head_2 = document.querySelector("#head_2")
var head_3 = document.querySelector("#head_3")
var head_4 = document.querySelector("#head_4")
var head_5 = document.querySelector("#head_5")
var head_6 = document.querySelector("#head_6")

function result(){

    
    var Name = usrname.value;
    var Roll = +rollno.value;
    var Totalmarks = 1200;
    var Obtained = 1064;
    
    localStorage.setItem("studentName", Name);
    localStorage.setItem("studentRollNo", rollno);
    
   if(Name === "Ayan" && Roll === 1234){
    head_1.innerHTML = "Name : " + Name
    head_2.innerHTML = "Roll No : " + Roll
    head_3.innerHTML = "Total Mark: " + Totalmarks;
    head_4.innerHTML = "Obtained Mark : " + Obtained;
    head_5.innerHTML = "Percentage: " + Obtained / Totalmarks * 100 + "%"
    head_6.innerHTML = "Comments: " + "Ja beta {PUBG} khail or mazza kar (Pass) ha to"
   }else{
    console.log("cholo")
   }
}