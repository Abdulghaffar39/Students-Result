var Student_Name = document.querySelector("#Student_Name");
var Student_Rollno = document.querySelector("#Student_Rollno");

var username_name = document.querySelector("#username_name");
var Name = document.querySelector("#Name");

var username_rollno = document.querySelector("#username_rollno");
var number = document.querySelector("#number");

var nazra = document.querySelector("#nazra")
var quran = document.querySelector("#quran")
var section_1 = document.querySelector("#section_1");
var section_2 = document.querySelector("#section_2");

var subject = document.querySelector("#subject");
var total_marks = document.querySelector("#total_marks");
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

var icon_end = document.querySelector("#icon_end");
var icon_paste = document.querySelector("#icon_paste");

var design = document.querySelector("#design");
var designer = document.querySelector("#designer");

var Developed = document.querySelector("#Developed");
var Developer = document.querySelector("#Developer");

var head = document.querySelector("#head");

var total = 100;

function result() {
  if (Student_Name.value == "Safeer" && Student_Rollno.value == 621261)  {
    var reading_plus = 30;
    var surah_plus = 7;
    var dua_plus = 9;
    var qawaid_plus = 5;
    var kalma_plus = 18;
    var extra_q_plus = 10;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "7th";
    give_position_2.innerHTML = "Mumtaz";

    var plus_obtained_mark =reading_plus + surah_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: "
    section_2.innerHTML = "Nazra"

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;


    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = 10;
    obtained_marks_surah.innerHTML = surah_plus;

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;

    qawaid.innerHTML = "Qawaid";
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

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";


  } else if ( Student_Name.value == "Mustafa Amjad" && Student_Rollno.value == 40121 ) {
    var reading_plus = 30;
    // var surah_plus = ;
    var dua_plus = 5;
    var kalma_plus = 5;
    var qawaid_plus = 15;
    var extra_q_plus = 5;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "7th";
    give_position_2.innerHTML = "Pass";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";


  } else if ( Student_Name.value == "Bilal sajjad" && Student_Rollno.value == 40122 ) {
    var reading_plus = 20;
    // var surah_plus = ;
    var dua_plus = 5;
    var kalma_plus = 5;
    var qawaid_plus = 15;
    var extra_q_plus = 5;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "9th";
    give_position_2.innerHTML = "Pass";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Asad sajjad" && Student_Rollno.value == 40123 ) {
    var reading_plus = 30;
    // var surah_plus = ;
    var dua_plus = 4;
    var kalma_plus = 4;
    var qawaid_plus = 10;
    var extra_q_plus = 5;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "10th";
    give_position_2.innerHTML = "Pass";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Faiz Danish" && Student_Rollno.value == 40124 ) {
    var reading_plus = 20;
    // var surah_plus = ;
    var dua_plus = 0;
    var kalma_plus = 5;
    var qawaid_plus = 20;
    var extra_q_plus = 10;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "9th";
    give_position_2.innerHTML = "Fial";
    give_position_2.style.color = "red"

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = "X";
    obtained_marks_surah.innerHTML = "X";

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;
    obtained_marks_dua.style.color = "red";

    kalma.innerHTML = "kalma";
    total_marks_kalma.innerHTML = 10;
    obtained_marks_kalma.innerHTML = kalma_plus;

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Alidan Kuram" && Student_Rollno.value == 40125 ) {
    var reading_plus = 20;
    // var surah_plus = ;
    var dua_plus = 8;
    var kalma_plus = 5;
    var qawaid_plus = 25;
    var extra_q_plus = 10;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "6th";
    give_position_2.innerHTML = "Pass";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Ali Uraiz Kamran" && Student_Rollno.value == 40126 ) {
    var reading_plus = 20;
    // var surah_plus = ;
    var dua_plus = 8;
    var kalma_plus = 10;
    var qawaid_plus = 25;
    var extra_q_plus = 10;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "5th";
    give_position_2.innerHTML = "Pass";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Sohail Arif" && Student_Rollno.value == 40127 ) {
    var reading_plus = 10;
    // var surah_plus = ;
    var dua_plus = 0;
    var kalma_plus = 5;
    var qawaid_plus = 30;
    var extra_q_plus = 5;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "12th";
    give_position_2.innerHTML = "Fail";
    give_position_2.style.color = "red";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;
    obtained_marks_reading.style.color = "red";

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = "X";
    obtained_marks_surah.innerHTML = "X";

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;
    obtained_marks_dua.style.color = "red";

    kalma.innerHTML = "kalma";
    total_marks_kalma.innerHTML = 10;
    obtained_marks_kalma.innerHTML = kalma_plus;

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Jawad Rajab Ali" && Student_Rollno.value == 40128 ) {
    var reading_plus = 10;
    // var surah_plus = ;
    var dua_plus = 6;
    var kalma_plus = 7;
    var qawaid_plus = 15;
    var extra_q_plus = 5;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "13th";
    give_position_2.innerHTML = "Fail";
    give_position_2.style.color = "red";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;
    obtained_marks_reading.style.color = "red";

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = "X";
    obtained_marks_surah.innerHTML = "X";

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;

    kalma.innerHTML = "kalma";
    total_marks_kalma.innerHTML = 10;
    obtained_marks_kalma.innerHTML = kalma_plus;

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Mustafa Rajab Ali" && Student_Rollno.value == 40129 ) {
    var reading_plus = 20;
    // var surah_plus = ;
    var dua_plus = 0;
    var kalma_plus = 7;
    var qawaid_plus = 25;
    var extra_q_plus = 5;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "9th";
    give_position_2.innerHTML = "Fail";
    give_position_2.style.color = "red";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = "X";
    obtained_marks_surah.innerHTML = "X";

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;
    obtained_marks_dua.style.color = "red";

    kalma.innerHTML = "kalma";
    total_marks_kalma.innerHTML = 10;
    obtained_marks_kalma.innerHTML = kalma_plus;

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Arfaat Amir" && Student_Rollno.value == 401210 ) {
    var reading_plus = 30;
    // var surah_plus = ;
    var dua_plus = 5;
    var kalma_plus = 7;
    var qawaid_plus = 20;
    var extra_q_plus = 0;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "7th";
    give_position_2.innerHTML = "Fail";
    give_position_2.style.color = "red";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;
    obtained_marks_extra_q.style.color = "red";

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Ayan Yameen" && Student_Rollno.value == 401211 ) {
    var reading_plus = 20;
    // var surah_plus = ;
    var dua_plus = 0;
    var kalma_plus = 5;
    var qawaid_plus = 25;
    var extra_q_plus = 5;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "10th";
    give_position_2.innerHTML = "Fail";
    give_position_2.style.color = "red";

    var plus_obtained_mark =
      reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = "X";
    obtained_marks_surah.innerHTML = "X";

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;
    obtained_marks_dua.style.color = "red";

    kalma.innerHTML = "kalma";
    total_marks_kalma.innerHTML = 10;
    obtained_marks_kalma.innerHTML = kalma_plus;

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  
  } else if ( Student_Name.value == "Raza Faizan" && Student_Rollno.value == 401212 ) {
    var reading_plus = 25;
    // var surah_plus = ;
    var dua_plus = 7;
    var kalma_plus = 9;
    var qawaid_plus = 25;
    var extra_q_plus = 10;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "4th";
    give_position_2.innerHTML = "Pass";

    var plus_obtained_mark = reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Zayan Murtaza" && Student_Rollno.value == 401213 ) {
    var reading_plus = 35;
    // var surah_plus = ;
    var dua_plus = 5;
    var kalma_plus = 5;
    var qawaid_plus = 25;
    var extra_q_plus = 10;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "2nd";
    give_position_2.innerHTML = "Pass";

    var plus_obtained_mark = reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
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

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Faiz Murtaza" && Student_Rollno.value == 401213 ) {
    var reading_plus = 33;
    // var surah_plus = ;
    var dua_plus = 0;
    var kalma_plus = 5;
    var qawaid_plus = 30;
    var extra_q_plus = 10;

    position.innerHTML = "Position";
    give_position_1.innerHTML = "X";
    give_position_2.innerHTML = "Fail";
    give_position_2.style.color = "red";

    var plus_obtained_mark = reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = "X";
    obtained_marks_surah.innerHTML = "X";

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;
    obtained_marks_dua.style.color = "red";


    kalma.innerHTML = "kalma";
    total_marks_kalma.innerHTML = 10;
    obtained_marks_kalma.innerHTML = kalma_plus;

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";

  } else if ( Student_Name.value == "Mustafa Sahid" && Student_Rollno.value == 401214 ) {
    var reading_plus = "X";
    // var surah_plus = ;
    var dua_plus = "X";
    var kalma_plus = "X";
    var qawaid_plus = "X";
    var extra_q_plus = "X";

    position.innerHTML = "Position";
    give_position_1.innerHTML = "";
    give_position_2.innerHTML = "";
    give_position_2.style.color = "red";

    var plus_obtained_mark = reading_plus + dua_plus + qawaid_plus + kalma_plus + extra_q_plus;

    section_1.innerHTML = "Your Section: ";
    section_2.innerHTML = "Nazra";

    username_name.innerHTML = "Student Name: ";
    Name.innerHTML = Student_Name.value;

    username_rollno.innerHTML = "Roll Number: ";
    number.innerHTML = Student_Rollno.value;

    subject.innerHTML = "Subject";
    total_marks.innerHTML = "Total Marks";
    obtained_marks.innerHTML = "Obtained Marks";

    reading.innerHTML = "Reading";
    total_marks_reading.innerHTML = 40;
    obtained_marks_reading.innerHTML = reading_plus;

    surah.innerHTML = "Surah";
    total_marks_surah.innerHTML = "X";
    obtained_marks_surah.innerHTML = "X";

    dua.innerHTML = "Dua";
    total_marks_dua.innerHTML = 10;
    obtained_marks_dua.innerHTML = dua_plus;
    obtained_marks_dua.style.color = "red";


    kalma.innerHTML = "kalma";
    total_marks_kalma.innerHTML = 10;
    obtained_marks_kalma.innerHTML = kalma_plus;

    qawaid.innerHTML = "Qawaid";
    total_marks_qawaid.innerHTML = 30;
    obtained_marks_qawaid.innerHTML = qawaid_plus;

    extra_q.innerHTML = "Extra Questions";
    total_marks_extra_q.innerHTML = 10;
    obtained_marks_extra_q.innerHTML = extra_q_plus;

    Total_Marks.innerHTML = "Total Marks";
    total_num.innerHTML = total;
    obtained_num.innerHTML = plus_obtained_mark;

    position.innerHTML = "Position";

    design.innerHTML = "Design by";
    designer.innerHTML = "Hasnain Arif";

    Developed.innerHTML = "Developed by";
    Developer.innerHTML = "Abdul Ghaffar";


  } else if (Student_Name !== "Mustafa Amjad" && Student_Name !== "") {
    head.innerHTML = "Please Enter Your Name or Roll no";
    head.style.color = "red";
  } else {
    head.innerHTML = "Wrong Name or Roll Number";
    head.style.color = "red";
  }
}

function hide() {
  head.innerHTML = "";

  position.innerHTML = "";
  give_position_1.innerHTML = "";
  give_position_2.innerHTML = "";

  username_name.innerHTML = "";
  Name.innerHTML = "";

  username_rollno.innerHTML = "";
  number.innerHTML = "";

  subject.innerHTML = "";
  total_marks.innerHTML = "";
  obtained_marks.innerHTML = "";

  reading.innerHTML = "";
  total_marks_reading.innerHTML = "";
  obtained_marks_reading.innerHTML = "";

  surah.innerHTML = "";
  total_marks_surah.innerHTML = "";
  obtained_marks_surah.innerHTML = "";

  dua.innerHTML = "";
  total_marks_dua.innerHTML = "";
  obtained_marks_dua.innerHTML = "";

  kalma.innerHTML = "";
  total_marks_kalma.innerHTML = "";
  obtained_marks_kalma.innerHTML = "";

  qawaid.innerHTML = "";
  total_marks_qawaid.innerHTML = "";
  obtained_marks_qawaid.innerHTML = "";

  extra_q.innerHTML = "";
  total_marks_extra_q.innerHTML = "";
  obtained_marks_extra_q.innerHTML = "";

  Total_Marks.innerHTML = "";
  total_num.innerHTML = "";
  obtained_num.innerHTML = "";

  position.innerHTML = "";

  design.innerHTML = "";
  designer.innerHTML = "";

  Developed.innerHTML = "";
  Developer.innerHTML = "";
}
