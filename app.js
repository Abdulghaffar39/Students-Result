var Student_Name = document.querySelector("#Student_Name");
var Student_Rollno = document.querySelector("#Student_Rollno");

var username_name = document.querySelector("#username_name");
var Name = document.querySelector("#Name");

var username_rollno = document.querySelector("#username_rollno");
var number = document.querySelector("#number");

var subject = document.querySelector("#subject")
var total_marks = document.querySelector("#total_marks")
var obtained_marks = document.querySelector("#obtained_marks");

var reading = document.querySelector("#reading");
var total_marks_reading = document.querySelector("#total_marks_reading");
var obtained_marks_reading = document.querySelector("#obtained_marks_reading");

var surah = document.querySelector("#surah");
var total_marks_surah = document.querySelector("#total_marks_surah");
var obtained_marks_surah = document.querySelector("#obtained_marks_surah");

var dua = document.querySelector("#dua");
var total_marks_dua = document.querySelector("#total_marks_dua");
var obtained_marks_dua = document.querySelector("#obtained_marks_dua");

var qawaid = document.querySelector("#qawaid");
var total_marks_qawaid = document.querySelector("#total_marks_qawaid");
var obtained_marks_qawaid = document.querySelector("#obtained_marks_qawaid");

var kalma = document.querySelector("#kalma");
var total_marks_kalma = document.querySelector("#total_marks_kalma");
var obtained_marks_kalma = document.querySelector("#obtained_marks_kalma");

var extra_q = document.querySelector("#extra_q");
var total_marks_extra_q = document.querySelector("#total_marks_extra_q");
var obtained_marks_extra_q = document.querySelector("#obtained_marks_extra_q");

var Total_Marks = document.querySelector("#Total_Marks");
var total_num = document.querySelector("#total_num");
var obtained_num = document.querySelector("#obtained_num");

var design = document.querySelector("#design");
var designer = document.querySelector("#designer");

var Developed = document.querySelector("#Developed");
var Developer = document.querySelector("#Developer");

var head = document.querySelector("#head");

function result(){
    
    if (Student_Name.value == "Safeer" && Student_Rollno.value == 621261){

        
        username_name.innerHTML = "Student Name: ";
        Name.innerHTML = Student_Name.value;
        
        username_rollno.innerHTML = "Roll Number: ";
        number.innerHTML = Student_Rollno.value;

        subject.innerHTML = "Subject";
        total_marks.innerHTML = "Total Marks"
        obtained_marks.innerHTML = "Obtained Marks";

        reading.innerHTML = "Reading"
        total_marks_reading.innerHTML = 40;
        obtained_marks_reading.innerHTML = 30;

        surah.innerHTML = "Surah";
        total_marks_surah.innerHTML = 40;
        obtained_marks_surah.innerHTML = 40;

        dua.innerHTML = "Dua";
        total_marks_dua.innerHTML = 40;
        obtained_marks_dua.innerHTML = 40;

        qawaid.innerHTML = "qawaid";
        total_marks_qawaid.innerHTML = 40;
        obtained_marks_qawaid.innerHTML = 40;

        kalma.innerHTML = "kalma";
        total_marks_kalma.innerHTML = 40;
        obtained_marks_kalma.innerHTML = 40;

        extra_q.innerHTML = "extra_q";
        total_marks_extra_q.innerHTML = 40;
        obtained_marks_extra_q.innerHTML = 40;

        var total = 100;
        var obtained = +obtained_marks_reading + +obtained_marks_surah + +obtained_marks_dua + +obtained_marks_qawaid + +obtained_marks_kalma + +obtained_marks_extra_q ;
        
        Total_Marks.innerHTML = "Total Marks";
        total_num.innerHTML = total;
        obtained_num.innerHTML = obtained;
        
        design.innerHTML = "Design by"
        designer.innerHTML = "Hasnain Arif"
        
        Developed.innerHTML = "Developed by";
        Developer.innerHTML = "Abdul Ghaffar";
    

    }else{
        head.innerHTML = "Wrong Name or Roll Number"
        head.style.color = "red"
    }

}
