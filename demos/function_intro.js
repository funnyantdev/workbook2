function greet() {
    const message = "Salutations"
    console.log(message);
}

greet();


function greetSomeone(firstName, lastName){
    const message = "Salutations " + firstName + " " + lastName;
    console.log(message);
}

greetSomeone("Sasha", "McBride");