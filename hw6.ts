import inquirer from "inquirer";

let input = await inquirer.prompt({
    name: "name",
    message: "Enter your number here",
});

if (input.name == 0) {
    console.log(1);
} else if (input.name >= 2) {
    let calculate = input.name;

    function calc_fact(calculate:any):any {
        if (calculate === 0 || calculate === 1) {
            return 1;
        } else {
            return calculate * calc_fact(calculate - 1);
        }
    }

    console.log(calc_fact(calculate));
} else {
    console.log("Wrong format");
}