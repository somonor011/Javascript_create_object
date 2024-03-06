// create object person 

const person = {
    name : "Somonor",
    age : 18,
    hasRelationship : true,
    writing : function write(){
        return "I can wrting code .."
    },
    array : ["smos","smos","mnor smos"]
};

console.log(person.array[2]);
console.log(person.writing());

person.name = "YuYu"; // reassign value name

console.log(person.name);