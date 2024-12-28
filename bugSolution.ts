function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Accessing the first element of the array
console.log(greeter(user[0])); // Correct! Outputs: Hello, Jane Doe

// Solution 2: Handling array input explicitly
function greeterArray(people: string[]): string {
    return people.map(person => "Hello, " + person).join("\n");
}
console.log(greeterArray(user)); // Correct! Outputs: Hello, Jane Doe
Hello, John Smith

//Solution 3: Using Type Assertion (use with caution)
console.log(greeter(user as unknown as string)); //This is not recommended as it bypasses type checking