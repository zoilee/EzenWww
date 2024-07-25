const mymap = new Map();
mymap.set("name", "홍길동");
mymap.set("age", 500);
mymap.set("height", 185);
mymap.set("weight", 70);
console.log(mymap);

//map.get(key)을 통해 반환받을 수 있다.
console.log(mymap.get("name"));
if(mymap.has('address')){
    console.log("주소를 알 수 있다.")
}else{
    console.log("주소를 모른다.");
}
mymap.delete("weight");
console.log(mymap);

// for(const [key, value] of mymap) {
//     console.log(`${key}: ${value}`);
// }

// mymap.forEach(key => {
//     console.log(`${key}: ${value}`);
// });

const student = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let fName = student.firstName;
let lName = student.lastName;

let { firstName, lastName} = student;

console.log(`${fName} ${lName}`);
console.log(`${firstName} ${lastName}`);
