var contenent = new Array(6);

contenent[0] = "Європа";
contenent[1] = "Африка";
contenent[2] = "Північна Америка";
contenent[3] = "Південна Америка";
contenent[4] = "Австралія";
contenent[5] = "Азія";

var density = new Array(6);

density[0] = 72.51;
density[1] = 33.66;
density[2] = 24.25;
density[3] = 22.00;
density[4] = 3.12;
density[5] = 95.03;

var area = new Array(6);

area[0] = 10180;
area[1] = 30370;
area[2] = 24709;
area[3] = 17840;
area[4] = 8600;
area[5] = 44579;



function fun1() {
    var str = document.getElementById("myEntry").value;
    for (var i = 0; i <= 5; i++)
        if (str == contenent[i]) {
            entryForm.density.value = density[i];
            entryForm.area.value = area[i];
            temp = i;
        }
}


function fun2() {
    entryForm.population.value = density[temp] * area[temp];
}
ґ