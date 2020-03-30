function factorial(fact) {
    if ((fact == 1) || (fact == 0))
        return 1;
    else
        return fact * factorial(fact - 1);

}

function fun() {
    var x, y, sum = 0.0,
        i = 1,
        res = 0.0;
    x = parseInt(main_form.t_x.value);
    y = parseInt(main_form.t_y.value);
    for (var i = 1; i <= 12; i++)
        res = Math.pow(-1, i + 1) * ((i + 3) / factorial(x + y));
    sum += res;
    main_form.t_c.value = "" + sum;
}