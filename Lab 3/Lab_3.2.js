var str, stb;

function fun() {
    str = parseInt(main_form.t_str.value);
    stb = parseInt(main_form.t_stb.value);
    var res_str = "<table>\n";
    for (var i = 1; i <= str; i++) {
        res_str += "<tr>\n";
        for (var j = 1; j <= stb; j++) {
            res_str += "<td>";
            res_str += "<input type = \"text\" id = \"_" + i + "_" + j + "\" value = \"" + (2 * i - j) + "\">";
            res_str += "<\/td>\n";
        }
        res_str += "<\/tr>\n";
    }
    res_str += "<\/table>";
    main_div.innerHTML = res_str;
}

function fun_build() {
    var res_str = "";
    var str_report = "";
    var j = stb;
    var pro = 1;
    for (var i = 1; i <= stb; i++) {
        res_str = "pro *= parseInt(main_form._" + i + "_" + j + ".value);";
        eval(res_str);
    }
    str_report += "Добуток всіх чисел останнього стовпця = " + pro + ";\n"

    alert(str_report);
}