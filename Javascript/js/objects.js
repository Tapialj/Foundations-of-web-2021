var person = {
    name: {
        first: "Bob",
        last: "Smith"
    },
    age: 32,
    gender: "male",
    interest: ["music", "hiking"],
    bio: function() {
        alert(this.name.first + " " + this.name.last + " is " + this.age + " years old. He likes " + this.interest[0]+ " and " + this.interest[1] + ".");
    },
    greeting: function() {
        alert("Hi! I\'m " + this.name[0] + ".");
    }
}

let myDataName = "height";
let myDataValue = "1.75m";
person [myDataName] = myDataValue;

//let myDataName = nameInput.value;
//let myDataValue = nameValue.value;

//person[myDataName] = myDataValue;