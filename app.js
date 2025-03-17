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

var position = document.querySelector("#position");
var give_position_1 = document.querySelector("#give_position_1");
var give_position_2 = document.querySelector("#give_position_2");


var design = document.querySelector("#design");
var designer = document.querySelector("#designer");

var Developed = document.querySelector("#Developed");
var Developer = document.querySelector("#Developer");

var head = document.querySelector("#head");

var total = 100;


function result(){

    if (Student_Name.value == "Safeer" && Student_Rollno.value == 621261){

        var reading_plus = 30;
        var surah_plus = 7;
        var dua_plus = 9;
        var qawaid_plus = 5;
        var kalma_plus = 18;
        var extra_q_plus = 10;
        
        var plus_obtained_mark = reading_plus + surah_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;
        
        username_name.innerHTML = "Student Name: ";
        Name.innerHTML = Student_Name.value;
        
        username_rollno.innerHTML = "Roll Number: ";
        number.innerHTML = Student_Rollno.value;
        
        subject.innerHTML = "Subject";
        total_marks.innerHTML = "Total Marks"
        obtained_marks.innerHTML = "Obtained Marks";

        reading.innerHTML = "Reading"
        total_marks_reading.innerHTML = 40;
        obtained_marks_reading.innerHTML = reading_plus;

        surah.innerHTML = "Surah";
        total_marks_surah.innerHTML = 10;
        obtained_marks_surah.innerHTML = surah_plus;

        dua.innerHTML = "Dua";
        total_marks_dua.innerHTML = 10;
        obtained_marks_dua.innerHTML = dua_plus;

        qawaid.innerHTML = "qawaid";
        total_marks_qawaid.innerHTML = 20;
        obtained_marks_qawaid.innerHTML = qawaid_plus;
        
        kalma.innerHTML = "kalma";
        total_marks_kalma.innerHTML = 10;
        obtained_marks_kalma.innerHTML = kalma_plus;
        
        extra_q.innerHTML = "Extra Questions";
        total_marks_extra_q.innerHTML = 10;
        obtained_marks_extra_q.innerHTML = extra_q_plus;

        Total_Marks.innerHTML = "Total Marks";
        total_num.innerHTML = total;
        obtained_num.innerHTML = plus_obtained_mark;

        position.innerHTML = "Position";
        
        design.innerHTML = "Design by"
        designer.innerHTML = "Hasnain Arif"
        
        Developed.innerHTML = "Developed by";
        Developer.innerHTML = "Abdul Ghaffar";
    

    }else if (Student_Name.value == "Mustafa Amjad" && Student_Rollno.value == 1){

        var reading_plus = 30;
        // var surah_plus = ;
        var dua_plus = 5;
        var kalma_plus = 5;
        var qawaid_plus = 15;
        var extra_q_plus = 5;
        
        var plus_obtained_mark = reading_plus  + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;
        
        username_name.innerHTML = "Student Name: ";
        Name.innerHTML = Student_Name.value;
        
        username_rollno.innerHTML = "Roll Number: ";
        number.innerHTML = Student_Rollno.value;
        
        subject.innerHTML = "Subject";
        total_marks.innerHTML = "Total Marks"
        obtained_marks.innerHTML = "Obtained Marks";

        reading.innerHTML = "Reading"
        total_marks_reading.innerHTML = 40;
        obtained_marks_reading.innerHTML = reading_plus;

        surah.innerHTML = "Surah";
        total_marks_surah.innerHTML = "X";
        obtained_marks_surah.innerHTML = "X";

        dua.innerHTML = "Dua";
        total_marks_dua.innerHTML = 10;
        obtained_marks_dua.innerHTML = dua_plus;

        kalma.innerHTML = "kalma";
        total_marks_kalma.innerHTML = 10;
        obtained_marks_kalma.innerHTML = kalma_plus;
        
        qawaid.innerHTML = "qawaid";
        total_marks_qawaid.innerHTML = 30;
        obtained_marks_qawaid.innerHTML = qawaid_plus;
                
        extra_q.innerHTML = "Extra Questions";
        total_marks_extra_q.innerHTML = 10;
        obtained_marks_extra_q.innerHTML = extra_q_plus;

        Total_Marks.innerHTML = "Total Marks";
        total_num.innerHTML = total;
        obtained_num.innerHTML = plus_obtained_mark;

        position.innerHTML = "Position";
        
        design.innerHTML = "Design by"
        designer.innerHTML = "Hasnain Arif"
        
        Developed.innerHTML = "Developed by";
        Developer.innerHTML = "Abdul Ghaffar";
    

    }else{
        head.innerHTML = "Wrong Name or Roll Number"
        head.style.color = "red"
    }

}
