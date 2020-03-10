function findTax(income, savings) {
    income = Number(income);
    savings = Number(savings);
    if((income > 0) && (savings >= 0)) {
        var deduction = 0, tax = 0;
        if(income < 500000) {
            deduction = savings * 50 / 100;
        }
        else if(income < 1000000) {
            deduction = savings * 30 / 100;
        }
        else {
            deduction = savings * 10 / 100;
            deduction = (deduction > 50000) ? 50000 : deduction;
        }
        income -= deduction;
        if(income > 250000) {
            if(income <= 500000) {
                tax += (income - 250000) * 10 / 100;
            }
            else {
                tax += 25000;//10% of 250000
                if(income <= 1000000) {
                    tax += (income - 500000) * 20 / 100;
                }
                else {
                    tax += 100000; //20% of 500000;
                    tax += (income - 1000000) * 30 / 100;
                }
            }
        }
        return tax;
    }
    else {
        return -1;//-1 means the income provided is not Valid.
    }
}
var tIncome = 1100000;
var tSavings = 100000;
console.log("The tax on", tIncome, "income and", tSavings, "savings is", findTax(tIncome, tSavings));