// binding DOM nodes
let hourlySaleryInput = document.querySelector("#hourly-salery");
let breakDown = document.querySelectorAll(".break-down");
let monthlyBreakDown = document.querySelectorAll(".break-down-monthly");
//asbt = annual salery befor taxes
let asbt = document.getElementById("annual-salery-befor-tax");
//asat = annual salery after taxes
let asat = document.getElementById("annual-salery-after-tax");
// amsat = annual monthly salery after tax
let amsat = document.getElementById("annual-monthly-salery-after-tax");
// number bindings
let hourlySalery = 0;
let annualSalery = 0;
let netIncome = 0;

//grab input of hourly-salery id in DOM and set it equal to hourlySalery binding
hourlySaleryInput.addEventListener("change", function(){
    hourlySalery = Number(this.value);
    //calculates annual based on hourly input
    annualSalery = ((hourlySalery * 40) * 52).toFixed(2);
    // display the annual saley in the span with id annual-salery-befor-tax
    asbt.textContent = numberWithCommas(annualSalery);
    // take the taxes out to get net income
    netIncome =(annualSalery - ((annualSalery / 100) * (8.58 + 7.65))).toFixed(2);
    // display net income on span with id annual-salery-after-tax
    asat.textContent = numberWithCommas(netIncome);
    //display net monthly income
    amsat.textContent = numberWithCommas((netIncome / 12).toFixed(2));

//update houseing
    updateBreakDowns(0, .35);
//update debt
    updateBreakDowns(1, .15);
//update transportation
    updateBreakDowns(2, .15);
//update other
    updateBreakDowns(3, .15);
//update savings
    updateBreakDowns(4, .10);

/* i saw the lines below and refactored into function updateBreakDowns
    // display each break down calc into each section
    breakDown[0].textContent = `${(netIncome * .35).toFixed(2)}`;
    breakDown[1].textContent = `${(netIncome * .15).toFixed(2)}`;
    breakDown[2].textContent = `${(netIncome * .15).toFixed(2)}`;
    breakDown[3].textContent = `${(netIncome * .25).toFixed(2)}`;
    breakDown[4].textContent = `${(netIncome * .10).toFixed(2)}`;
    // display each break down calc by month into each section
    monthlyBreakDown[0].textContent = `${((netIncome * .35) / 12).toFixed(2)}`;
    monthlyBreakDown[1].textContent = `${((netIncome * .15) / 12).toFixed(2)}`;
    monthlyBreakDown[2].textContent = `${((netIncome * .15) / 12).toFixed(2)}`;
    monthlyBreakDown[3].textContent = `${((netIncome * .25) / 12).toFixed(2)}`;
    monthlyBreakDown[4].textContent = `${((netIncome * .10) / 12).toFixed(2)}`;
*/

});

    const updateBreakDowns = (index, percent) => {
        breakDown[index].textContent = `${numberWithCommas((Number(netIncome) * percent).toFixed(2))}`;
        monthlyBreakDown[index].textContent = `${numberWithCommas(((Number(netIncome) * percent) / 12).toFixed(2))}`;
    }
// below code located on stack over flow
//(https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)
// implement this function after the last mathimatical computation is completed as it will stringify the number.
    const numberWithCommas = (x) => {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
}