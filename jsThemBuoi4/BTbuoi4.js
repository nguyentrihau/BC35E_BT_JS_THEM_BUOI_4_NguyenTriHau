//bài 1:Tính ngày tháng năm
/**
 * btnNM
 * - input:
 * - Cho người dùng nhập:
 * + ngay
 * + thang
 * + nam
 * + ngayMai=""
 * -progress:
 * + tháng 1||3||5||7||8||10 thì co ngày 31;
 * - nếu  31 > ngày > 0 =>ngày + 1
 * - nếu 31 == ngay > 0 => ngay == 1 và tháng +1
 * + tháng 2 thì có 28 ngày;
 * - nếu  28 > ngày > 0 =>ngày + 1
 * - nếu 28 == ngay > 0 => ngay==1 và tháng +1;
 * + tháng 4||6||9||11 thì có 30 ngày:
 * - nếu 30 > ngay > 0 => ngày +1
 * - nếu 30 == ngay > 0 => ngày == 1 và tháng +1;
 * + tháng 12 có ngày 31;
 * - nếu 31 > ngay > 0 => ngày + 1
 * - nếu 31 == ngay > 0 => ngày == 1 và tháng==1 và năm + 1;
 * 
 * -output:
 * inner xuất ra = ngayMai;
 * 
 */

var btnNM = document.getElementById("btnNM");
btnNM.onclick = function(){
    //input:
    var ngay = document.getElementById("ngay").value*1;
    var thang = document.getElementById("thang").value*1;
    var nam = document.getElementById("nam").value*1;
    var ngayMai = "";
    // progress :
    if((thang===1||thang===3||thang===5||thang===7||thang===8||thang===10) && ngay>0 && ngay<31){
        ngayMai=(ngay+1)+"/"+thang+"/"+nam;
    }else if((thang===1||thang===3||thang===5||thang===7||thang===8||thang===10) && ngay>0 && ngay===31){
        ngayMai="1/"+(thang+1)+"/"+nam;
    }else if(thang===2 && (ngay>0) && (ngay<28)){
        ngayMai=(ngay+1)+"/"+thang+"/"+nam;
    }else if(thang===2 && (ngay>0) && (ngay===28)){
        ngayMai="1/"+(thang+1)+"/"+nam;
    }else if( (thang===4||thang===6||thang===9||thang===11) && ngay>0 && ngay<30){
        ngayMai=(ngay+1)+"/"+thang+"/"+nam;
    }else if( (thang===4||thang===6||thang===9||thang===11) && ngay>0 && ngay===30){
        ngayMai="1/"+(thang+1)+"/"+nam;
    }else if(thang===12 && (ngay>0) && (ngay<31)){
        ngayMai=(ngay+1)+"/"+thang+"/"+nam;
    }else if(thang===12 && (ngay>0) && (ngay===31)){
        ngayMai="1/"+"1/"+(nam+1);
    }else {
        alert("Ngày hoặc tháng không xác định");
        ngayMai="Ngày hoặc tháng không xác định";
    };
    
    // output 
    document.getElementById("showInfoNgay").innerHTML=ngayMai;
}
/**
 * bài 1:Tính ngày tháng năm
 * btnNHQ
 * - input:
 * - Cho người dùng nhập:
 * + ngay
 * + thang
 * + nam
 * ngayHomQua = "";
 * - progress:
 * - tháng 1 có 31ngay:
 * + nếu 31 >= ngay > 1 => ngày - 1;
 * + nếu 31 >= ngay = 1 => ngay == 31 và tháng == 12 và năm - 1;
 * - tháng 2 co 28ngay:
 * + nếu 28 >= ngay > 1 => ngày - 1;
 * + nếu 28 >= ngay = 1 => ngày == 31 và tháng - 1;
 * - tháng 3 có 31 ngày:
 * + nếu 31 >= ngay > 1 => ngày - 1;
 * + nếu 31 >= ngay = 1 => ngày == 28 và tháng - 1;
 * - tháng 5||7||8||10||12 có 31 ngày:
 * + nếu 31 >= ngay >1 => ngay - 1;
 * + nếu 31 >= ngay =1 => ngay == 30 và tháng - 1;
 * - thang 4||6||9||11 có 30 ngày:
 * + nếu 30 >= ngay > 1 => ngay - 1;
 * + nếu 30 >= ngay = 1 => ngày == 31 và tháng - 1;
 * 
 * -output:
 * inner ra màn hình - ngàyHomQua;
 */

var btnNHQ = document.getElementById("btnNHQ");
btnNHQ.onclick = function(){
    //input:
    var ngay = document.getElementById("ngay").value*1;
    var thang = document.getElementById("thang").value*1;
    var nam = document.getElementById("nam").value*1;
    var ngayHomQua = "";
    // progress :
    if(thang===1 && (ngay>1) && (ngay<=31)){
        ngayHomQua=(ngay-1)+"/"+thang+"/"+nam;
    }else if(thang===1 && (ngay===1) && (ngay<=31)){
        ngayHomQua="31/12/"+(nam-1);
    }else if(thang===2 && (ngay>1) && (ngay<=28)){
        ngayHomQua=(ngay-1)+"/"+thang+"/"+nam;
    }else if(thang===2 && (ngay===1) && (ngay<=28)){
        ngayHomQua="31/"+(thang-1)+"/"+nam;
    }else if(thang===3 && (ngay>1) && (ngay<=31)){
        ngayHomQua=(ngay-1)+"/"+thang+"/"+nam;
    }else if(thang===3 && (ngay===1) && (ngay<=31)){
        ngayHomQua="28/"+(thang-1)+nam;
    }else if( (thang===5||thang===7||thang===8||thang===10||thang===12) && (ngay>1) && (ngay<=31)){
        ngayHomQua=(ngay-1)+"/"+thang+"/"+nam;
    }else if( (thang===5||thang===7||thang===8||thang===10||thang===12) && (ngay===1) && (ngay<=31)){
        ngayHomQua="30/"+(thang-1)+"/"+nam;
    }else if( (thang===4||thang===6||thang===9||thang===11) && (ngay>1) && (ngay<=30)){
        ngayHomQua=(ngay-1)+"/"+thang+"/"+nam;
    }else if( (thang===4||thang===6||thang===9||thang===11) && (ngay===1) && (ngay<=30)){
        ngayHomQua="31/"+(thang-1)+"/"+nam;
    }else {
        alert("Ngày hoặc tháng không xác định");
        ngayMai="Ngày hoặc tháng không xác định";
    };
    
    // output 
    document.getElementById("showInfoNgay").innerHTML=ngayHomQua;
};

/**
 * bài 2: tìm tháng đó có bao nhiêu ngày:
 * 
 * btnTinhNgay
 * -input:
 * - cho người dùng nhập vào:
 * + thang2
 * + nam2
 * + soNgay = 0;
 * 
 * - progress:
 * + nếu năm là nhuận:
 * if((nam2%4==0 && nam2%100!=0 && thang2==2 )||(nam2%400==0) && thang2==2 )
 * => soNgay== 29;
 * if(thang2===2) => soNgay==28;
 * + tháng 1,3,5,7,8,10,12 có 31 ngày:
 * if(thang2===1 || thang2===3 || thang2===5 || thang2===7 || thang2===8 || thang2===10 || thang2===12)
 * => soNgay == 31;
 * + tháng 4,6,9,11 có 30 ngày:
 * if(thang2===4 || thang2===6 || thang2===9 || thang2===11)
 * => soNgay == 30;
 * còn lại là tháng ko xác định
 * 
 * -Out put:
 * inner ra man hinh = soNgay;
 */

var btnTinhNgay = document.getElementById("btnTinhNgay");
btnTinhNgay.onclick = function(){
    //input:
    var thang2 =document.getElementById("thang2").value*1;
    var nam2 =document.getElementById("nam2").value*1;
    var soNgay = 0;
    //progress:
    if((nam2%4==0 && nam2%100!=0 && thang2==2 )||(nam2%400==0 && thang2==2)){
        soNgay = 29;
    }else if(thang2==2){
        soNgay = 28;
    }else if(thang2===1 || thang2===3 || thang2===5 || thang2===7 || thang2===8 || thang2===10 || thang2===12){
        soNgay = 31;
    }else if(thang2===4 || thang2===6 || thang2===9 || thang2===11){
        soNgay = 30;
    }else{
        alert("Vui lòng nhập đúng tháng");
        soNgay = " số ngày không xác định";
    };
    //out put:
    document.getElementById("showInfoTinhNgay").innerHTML ="Tháng "+thang2+" năm "+nam2+" có "+soNgay+" ngày";
};

/**
 * Bài 3:Đọc số nguyên có 3 chữ số:
 * 
 * btnDocSo
 * -input:
 * cho người dùng nhập số nguyên có 3 chữ số:
 * + soNguyen
 * + doc = "";
 * 
 * - Progress:
 * + hangTram = Math.floor(soNguyen/100);
 * + hangChuc = Math.floor(soNguyen%100/10);
 * + hangDV = soNguyen % 10;
 * 
 * + switch(hangTram){
 * case 1: doc+= "một trăm";
 * break;
 * case 2: doc+= "hai trăm";
 * break;
 * case 3: doc+= "ba trăm";
 * break;
 * case 4: doc+= "bốn trăm";
 * break;
 * case 5: doc+= "năm trăm";
 * break;
 * case 6: doc+= "sáu trăm";
 * break;
 * case 7: doc+= "bảy trăm";
 * break;
 * case 8: doc+= "tám trăm";
 * break;
 * case 9: doc+= "chín trăm";
 * break;
 * case 0: doc+= "không trăm";
 * break;
 * defaut: doc = "Hàng trăm không xác định"
 * }
 * switch(hangChuc){
 * case 1: doc+= "một mươi";
 * break;
 * case 2: doc+= "hai mươi";
 * break;
 * case 3: doc+= "ba mươi";
 * break;
 * case 4: doc+= "bốn mươi";
 * break;
 * case 5: doc+= "năm mươi";
 * break;
 * case 6: doc+= "sáu mươi";
 * break;
 * case 7: doc+= "bảy mươi";
 * break;
 * case 8: doc+= "tám mươi";
 * break;
 * case 9: doc+= "chín mươi";
 * break;
 * case 0: hangDV=0?doc+= "":doc+="lẻ";
 * break;
 * default: doc="số hàng chục không được xác định";
 * }
 * switch(hangDV){
 * case 1: doc+= "một";
 * break;
 * case 2: doc+= "hai";
 * break;
 * case 3: doc+= "ba";
 * break;
 * case 4: doc+= "bốn";
 * break;
 * case 5: doc+= "năm";
 * break;
 * case 6: doc+= "sáu";
 * break;
 * case 7: doc+= "bảy";
 * break;
 * case 8: doc+= "tám";
 * break;
 * case 9: doc+= "chín";
 * break;
 * case 0: doc+= "";
 * break;
 * default: doc="số đơn vị không được xác định";
 * };
 * 
 * -Output:
 * inner ra màn hình = doc;
 */

var btnDocSo = document.getElementById("btnDocSo");
btnDocSo.onclick = function(){
    //input:
    var soNguyen = document.getElementById("soNguyen").value*1;
    var doc ="";
    //progress:
 
  var hangTram = Math.floor(soNguyen/100);
  var hangChuc = Math.floor(soNguyen%100/10);
  var hangDV = soNguyen % 10;
    
  switch(hangTram){
  case 1: doc+= "một trăm";
  break;
  case 2: doc+= "hai trăm";
  break;
  case 3: doc+= "ba trăm";
  break;
  case 4: doc+= "bốn trăm";
  break;  
  case 5: doc+= "năm trăm";
  break;
  case 6: doc+= "sáu trăm";
  break;
  case 7: doc+= "bảy trăm";
  break;
  case 8: doc+= "tám trăm";
  break;
  case 9: doc+= "chín trăm";
  break;
//   case 0: doc+= "không trăm";
//   break;
  default: 
  alert("vui lòng nhập đúng số");
  doc = "Hàng trăm không xác định";
  };
  switch(hangChuc){
  case 1: doc+= " mười";
  break;  
  case 2: doc+= " hai mươi";
  break;
  case 3: doc+= " ba mươi";
  break;
  case 4: doc+= " bốn mươi";
  break;
  case 5: doc+= " năm mươi";
  break;
  case 6: doc+= " sáu mươi";
  break;
  case 7: doc+= " bảy mươi";
  break;
  case 8: doc+= " tám mươi";
  break;
  case 9: doc+= " chín mươi";
  break;
  case 0:if(hangDV==0){""}else{doc+=" lẻ"};
  break;
  default: 
  alert("vui lòng nhập đúng số");
  doc="số hàng chục không được xác định";
  };
  switch(hangDV){
  case 1: doc+= " một";
  break;
  case 2: doc+= " hai";
  break;
  case 3: doc+= " ba";
  break;
  case 4: doc+= " bốn";
  break;
  case 5: doc+= " năm";
  break;
  case 6: doc+= " sáu";
  break;
  case 7: doc+= " bảy";
  break;
  case 8: doc+= " tám";
  break;
  case 9: doc+= " chín";
  break;
  case 0: doc+= "";
  break;
  default: 
  alert("vui lòng nhập đúng số");
  doc="số đơn vị không được xác định";
  };
  
//Output:
  document.getElementById("showInfoDocSo").innerHTML = doc;
    
};

/**
 * Bài 4: Tìm sinh viên xa trường nhất
 * btnTim
 * - input:
 * cho người dùng nhập:
 * + name1
 * + x1
 * + y1
 * + name2
 * + x2
 * + y2
 * + name3
 * + x3
 * + y3
 * + x4
 * + y4
 * 
 * - progress:
 * - tính tọa độ giữa trường và name1:
 * truongName1^2 = (x4 - x1)^2 + (y4 - y1)^2
 * => truongName1 = Math.sqrt(truongName1)
 * - tính tọa độ giữa trường và name2:
 * truongName2^2 - (x4 - x2)^2 + (y4 - y2)^2
 * => truongName2 = Math.sqrt(truongName2)
 * - tính chiều dài tọa độ giữa trường và name3:
 * truongName3^2 - (x4 - x3)^2 + (y4 - y3)^2
 * => truongName3 = Math.sqrt(truongName3)
 * var soSanh ="";
 * if(truongName1 > truongName2 && truongName1 > truongName3){
 *      soSanh = name1;
 * }else if(truongName2 > truongName1 && truongName2 > truongName3){
 *      soSanh = name2;
 * }else{
 *      soSanh = name3;
 * };
 * 
 * - Output:
 * inner ra man hinh = soSanh;
 */

var btnTim = document.getElementById("btnTim");
btnTim.onclick = function(){
    //input:
    var name1 = document.getElementById("name1").value;
    var x1 = document.getElementById("x1").value*1;
    var y1 = document.getElementById("y1").value*1;
    var name2 = document.getElementById("name2").value;
    var x2 = document.getElementById("x2").value*1;
    var y2 = document.getElementById("y2").value*1;
    var name3 = document.getElementById("name3").value;
    var x3 = document.getElementById("x3").value*1;
    var y3 = document.getElementById("y3").value*1;
    var x4 = document.getElementById("x4").value*1;
    var y4 = document.getElementById("y4").value*1;

    //progress:
    var Truongname1 = ((x4 - x1)*(x4 - x1)) + ((y4 - y1)*(y4 - y1));
        Truongname1 = Math.sqrt(Truongname1);
    // console.log(Truongname1);
    var TruongName2 = ((x4 - x2)*(x4 - x2)) + ((y4 - y2)*(y4 - y2));
        TruongName2 = Math.sqrt(TruongName2);
    // console.log(TruongName2);
    var TruongName3 = ((x4 - x3)*(x4 - x3)) + ((y4 - y3)*(y4 - y3));
        TruongName3 = Math.sqrt(TruongName3);
    // console.log(TruongName3);
    var soSanh = "";
    if(Truongname1 > TruongName2 && Truongname1 > TruongName3){
        soSanh = name1;
    }else if(TruongName2 > Truongname1 && TruongName2 > TruongName3){
        soSanh = name2;
    }else{
        soSanh = name3;
    };
    //output:
    document.getElementById("showInfoTim").innerHTML = "Sinh viên xa trường nhất là: " + soSanh;
}