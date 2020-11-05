var Page1 = document.getElementById("Page1"),
    Page2 = document.getElementById("Page2"),
    Page3 = document.getElementById("Page3_res"),
    Button = document.getElementById("Button"),
    procentTranslator = 0.06; // 3 "/" 0.06 = 50

function Check() {
    var empty = document.forms["Form1"]["User_name"].value;

    if ( ! empty ) {
        alert("Please fill out all the boxes");
        return false;
    } else {
        Page1.style.display = "none";
        Page2.style.display = "block";
        Button.style.display = "none";
        return true;
    }
}

function Check2() {
    var empty = document.forms["Form2"]["Q1"].value && document.forms["Form2"]["Q2"].value && document.forms["Form2"]["Q3"].value && document.forms["Form2"]["Q4"].value && document.forms["Form2"]["Q5"].value && document.forms["Form2"]["Q6"].value && document.forms["Form2"]["Q7"].value && document.forms["Form2"]["Q8"].value && document.forms["Form2"]["Q9"].value && document.forms["Form2"]["Q10"].value && document.forms["Form2"]["Q11"].value && document.forms["Form2"]["Q12"].value && document.forms["Form2"]["Q13"].value && document.forms["Form2"]["Q14"].value && document.forms["Form2"]["Q15"].value && document.forms["Form2"]["Q16"].value && document.forms["Form2"]["Q17"].value && document.forms["Form2"]["Q18"].value && document.forms["Form2"]["Q19"].value && document.forms["Form2"]["Q20"].value && document.forms["Form2"]["Q21"].value && document.forms["Form2"]["Q22"].value && document.forms["Form2"]["Q23"].value && document.forms["Form2"]["Q24"].value && document.forms["Form2"]["Q25"].value && document.forms["Form2"]["Q26"].value && document.forms["Form2"]["Q27"].value && document.forms["Form2"]["Q28"].value && document.forms["Form2"]["Q29"].value && document.forms["Form2"]["Q30"].value && document.forms["Form2"]["Q31"].value && document.forms["Form2"]["Q32"].value && document.forms["Form2"]["Q33"].value && document.forms["Form2"]["Q34"].value && document.forms["Form2"]["Q35"].value && document.forms["Form2"]["Q36"].value && document.forms["Form2"]["Q37"].value && document.forms["Form2"]["Q38"].value && document.forms["Form2"]["Q39"].value && document.forms["Form2"]["Q40"].value && document.forms["Form2"]["Q41"].value && document.forms["Form2"]["Q42"].value && document.forms["Form2"]["Q43"].value && document.forms["Form2"]["Q44"].value && document.forms["Form2"]["Q45"].value && document.forms["Form2"]["Q46"].value && document.forms["Form2"]["Q47"].value && document.forms["Form2"]["Q48"].value && document.forms["Form2"]["Q49"].value && document.forms["Form2"]["Q50"].value && document.forms["Form2"]["Q51"].value && document.forms["Form2"]["Q52"].value && document.forms["Form2"]["Q53"].value && document.forms["Form2"]["Q54"].value && document.forms["Form2"]["Q55"].value && document.forms["Form2"]["Q56"].value && document.forms["Form2"]["Q57"].value && document.forms["Form2"]["Q58"].value && document.forms["Form2"]["Q59"].value && document.forms["Form2"]["Q60"].value && document.forms["Form2"]["Q61"].value && document.forms["Form2"]["Q62"].value && document.forms["Form2"]["Q63"].value && document.forms["Form2"]["Q64"].value && document.forms["Form2"]["Q65"].value && document.forms["Form2"]["Q66"].value && document.forms["Form2"]["Q67"].value && document.forms["Form2"]["Q68"].value && document.forms["Form2"]["Q69"].value && document.forms["Form2"]["Q70"].value && document.forms["Form2"]["Q71"].value && document.forms["Form2"]["Q72"].value && document.forms["Form2"]["Q73"].value && document.forms["Form2"]["Q74"].value && document.forms["Form2"]["Q75"].value && document.forms["Form2"]["Q76"].value && document.forms["Form2"]["Q77"].value && document.forms["Form2"]["Q78"].value && document.forms["Form2"]["Q79"].value && document.forms["Form2"]["Q80"].value && document.forms["Form2"]["Q81"].value && document.forms["Form2"]["Q82"].value && document.forms["Form2"]["Q83"].value && document.forms["Form2"]["Q84"].value && document.forms["Form2"]["Q85"].value && document.forms["Form2"]["Q86"].value && document.forms["Form2"]["Q87"].value && document.forms["Form2"]["Q88"].value && document.forms["Form2"]["Q89"].value && document.forms["Form2"]["Q90"].value && document.forms["Form2"]["Q91"].value && document.forms["Form2"]["Q92"].value && document.forms["Form2"]["Q93"].value && document.forms["Form2"]["Q94"].value && document.forms["Form2"]["Q95"].value && document.forms["Form2"]["Q96"].value && document.forms["Form2"]["Q97"].value && document.forms["Form2"]["Q98"].value && document.forms["Form2"]["Q99"].value && document.forms["Form2"]["Q100"].value;

    if ( ! empty ) {
        alert("Please fill out all the boxes");
        return false;
    } else {
        Page2.style.display = "none";
        Page3.style.display = "block";
        Numbers();
        return true;
    }
}


function Numbers() {
    var Q1=parseInt(document.getElementById("Q1").value)*0.06;
    var Q2=parseInt(document.getElementById("Q2").value)*0.06;
    var Q3=parseInt(document.getElementById("Q3").value)*0.06;
    var Q4=parseInt(document.getElementById("Q4").value)*0.06;
    var Q5=parseInt(document.getElementById("Q5").value)*0.06;
    var Q6=parseInt(document.getElementById("Q6").value)*0.06;
    var Q7=parseInt(document.getElementById("Q7").value)*0.06;
    var Q8=parseInt(document.getElementById("Q8").value)*0.06;
    var Q9=parseInt(document.getElementById("Q9").value)*0.06;
    var Q10=parseInt(document.getElementById("Q10").value)*0.06;
    var Q11=parseInt(document.getElementById("Q11").value)*0.06;
    var Q12=parseInt(document.getElementById("Q12").value)*0.06;
    var Q13=parseInt(document.getElementById("Q13").value)*0.06;
    var Q14=parseInt(document.getElementById("Q14").value)*0.06;
    var Q15=parseInt(document.getElementById("Q15").value)*0.06;
    var Q16=parseInt(document.getElementById("Q16").value)*0.06;
    var Q17=parseInt(document.getElementById("Q17").value)*0.06;
    var Q18=parseInt(document.getElementById("Q18").value)*0.06;
    var Q19=parseInt(document.getElementById("Q19").value)*0.06;
    var Q20=parseInt(document.getElementById("Q20").value)*0.06;
    var Q21=parseInt(document.getElementById("Q21").value)*0.06;
    var Q22=parseInt(document.getElementById("Q22").value)*0.06;
    var Q23=parseInt(document.getElementById("Q23").value)*0.06;
    var Q24=parseInt(document.getElementById("Q24").value)*0.06;
    var Q25=parseInt(document.getElementById("Q25").value)*0.06;
    var Q26=parseInt(document.getElementById("Q26").value)*0.06;
    var Q27=parseInt(document.getElementById("Q27").value)*0.06;
    var Q28=parseInt(document.getElementById("Q28").value)*0.06;
    var Q29=parseInt(document.getElementById("Q29").value)*0.06;
    var Q30=parseInt(document.getElementById("Q30").value)*0.06;
    var Q31=parseInt(document.getElementById("Q31").value)*0.06;
    var Q32=parseInt(document.getElementById("Q32").value)*0.06;
    var Q33=parseInt(document.getElementById("Q33").value)*0.06;
    var Q34=parseInt(document.getElementById("Q34").value)*0.06;
    var Q35=parseInt(document.getElementById("Q35").value)*0.06;
    var Q36=parseInt(document.getElementById("Q36").value)*0.06;
    var Q37=parseInt(document.getElementById("Q37").value)*0.06;
    var Q38=parseInt(document.getElementById("Q38").value)*0.06;
    var Q39=parseInt(document.getElementById("Q39").value)*0.06;
    var Q40=parseInt(document.getElementById("Q40").value)*0.06;
    var Q41=parseInt(document.getElementById("Q41").value)*0.06;
    var Q42=parseInt(document.getElementById("Q42").value)*0.06;
    var Q43=parseInt(document.getElementById("Q43").value)*0.06;
    var Q44=parseInt(document.getElementById("Q44").value)*0.06;
    var Q45=parseInt(document.getElementById("Q45").value)*0.06;
    var Q46=parseInt(document.getElementById("Q46").value)*0.06;
    var Q47=parseInt(document.getElementById("Q47").value)*0.06;
    var Q48=parseInt(document.getElementById("Q48").value)*0.06;
    var Q49=parseInt(document.getElementById("Q49").value)*0.06;
    var Q50=parseInt(document.getElementById("Q50").value)*0.06;
    var Q51=parseInt(document.getElementById("Q51").value)*0.06;
    var Q52=parseInt(document.getElementById("Q52").value)*0.06;
    var Q53=parseInt(document.getElementById("Q53").value)*0.06;
    var Q54=parseInt(document.getElementById("Q54").value)*0.06;
    var Q55=parseInt(document.getElementById("Q55").value)*0.06;
    var Q56=parseInt(document.getElementById("Q56").value)*0.06;
    var Q57=parseInt(document.getElementById("Q57").value)*0.06;
    var Q58=parseInt(document.getElementById("Q58").value)*0.06;
    var Q59=parseInt(document.getElementById("Q59").value)*0.06;
    var Q60=parseInt(document.getElementById("Q60").value)*0.06;
    var Q61=parseInt(document.getElementById("Q61").value)*0.06;
    var Q62=parseInt(document.getElementById("Q62").value)*0.06;
    var Q63=parseInt(document.getElementById("Q63").value)*0.06;
    var Q64=parseInt(document.getElementById("Q64").value)*0.06;
    var Q65=parseInt(document.getElementById("Q65").value)*0.06;
    var Q66=parseInt(document.getElementById("Q66").value)*0.06;
    var Q67=parseInt(document.getElementById("Q67").value)*0.06;
    var Q68=parseInt(document.getElementById("Q68").value)*0.06;
    var Q69=parseInt(document.getElementById("Q69").value)*0.06;
    var Q70=parseInt(document.getElementById("Q70").value)*0.06;
    var Q71=parseInt(document.getElementById("Q71").value)*0.06;
    var Q72=parseInt(document.getElementById("Q72").value)*0.06;
    var Q73=parseInt(document.getElementById("Q73").value)*0.06;
    var Q74=parseInt(document.getElementById("Q74").value)*0.06;
    var Q75=parseInt(document.getElementById("Q75").value)*0.06;
    var Q76=parseInt(document.getElementById("Q76").value)*0.06;
    var Q77=parseInt(document.getElementById("Q77").value)*0.06;
    var Q78=parseInt(document.getElementById("Q78").value)*0.06;
    var Q79=parseInt(document.getElementById("Q79").value)*0.06;
    var Q80=parseInt(document.getElementById("Q80").value)*0.06;
    var Q81=parseInt(document.getElementById("Q81").value)*0.06;
    var Q82=parseInt(document.getElementById("Q82").value)*0.06;
    var Q83=parseInt(document.getElementById("Q83").value)*0.06;
    var Q84=parseInt(document.getElementById("Q84").value)*0.06;
    var Q85=parseInt(document.getElementById("Q85").value)*0.06;
    var Q86=parseInt(document.getElementById("Q86").value)*0.06;
    var Q87=parseInt(document.getElementById("Q87").value)*0.06;
    var Q88=parseInt(document.getElementById("Q88").value)*0.06;
    var Q89=parseInt(document.getElementById("Q89").value)*0.06;
    var Q90=parseInt(document.getElementById("Q90").value)*0.06;
    var Q91=parseInt(document.getElementById("Q91").value)*0.06;
    var Q92=parseInt(document.getElementById("Q92").value)*0.06;
    var Q93=parseInt(document.getElementById("Q92").value)*0.06;
    var Q94=parseInt(document.getElementById("Q92").value)*0.06;
    var Q95=parseInt(document.getElementById("Q92").value)*0.06;
    var Q96=parseInt(document.getElementById("Q92").value)*0.06;
    var Q97=parseInt(document.getElementById("Q92").value)*0.06;
    var Q98=parseInt(document.getElementById("Q92").value)*0.06;
    var Q99=parseInt(document.getElementById("Q99").value)*0.06;
    var Q100=parseInt(document.getElementById("Q100").value)*0.06;
    var Aa = Q4 + Q5 + Q9 + Q11 + Q12 + Q15 + Q19 + Q22 + Q23 + Q26 + Q27 + Q29 + Q33 + Q35 + Q37 + Q41 + Q44 + Q47 + Q51;
    var Ab = Q53 + Q55 + Q61 + Q63 + Q67 + Q68 + Q72 + Q74 + Q75 + Q78 + Q79 + Q80 + Q88 + Q91 + Q94 + Q96 + Q97 + Q98;
    var Sa = Q33 + Q35 + Q55 + Q67 + Q72 + Q74 + Q75 + Q80 + Q88 + Q94 + Q96;
    var Sb = Q7 + Q59 + Q62 + Q65 + Q90 + Q95 + Q99;
    var La = Q9 + Q14 + Q22 + Q26 + Q53 + Q97;
    var Lb = Q2 + Q10 + Q21 + Q28 + Q40 + Q60 + Q76;
    var Ea = Q23 + Q29 + Q30 + Q41 + Q44 + Q47 + Q78;
    var Eb = Q6 + Q42 + Q43 + Q49 + Q50 + Q83 + Q85;
    var Ia = Q4 + Q5 + Q11 + Q12 + Q19 + Q27 + Q37 + Q51 + Q63 + Q68 + Q79 + Q91 + Q98;
    var Ib = Q13 + Q25 + Q36 + Q52 + Q57 + Q70 + Q71 + Q73 + Q77;
    var Da = Q58 + Q61 + Q66;
    var Db = Q16 + Q32 + Q38 + Q69 + Q84 + Q87;
    var A_res = document.getElementById("A_res");
    var S_res = document.getElementById("S_res");
    var E_res = document.getElementById("E_res");
    var I_res = document.getElementById("I_res");
    var D_res = document.getElementById("D_res");
    var Name_res = document.getElementById("Name_res");
    var Name_value = document.getElementById("User_name").value;
    var D = ((Da*2)/(Da*2+Db))*100;
    var I = (Ia/(Ia+Ib*1.4))*100;
    var E = (Ea/(Ea+Eb))*100;
    var L = ((La*1.2)/((La*1.2)+Lb))*100;
    var S = (Sa/(Sa+Sb))*100;
    var A = (Aa/(Aa+Ab))*100;
     A_res.textContent = A;
     S_res.textContent = S;
     L_res.textContent = L;
     E_res.textContent = E;
     I_res.textContent = I;
     D_res.textContent = D;
     Name_res.textContent = Name_value;
}
