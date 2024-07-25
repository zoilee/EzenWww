// const suseok = {
//     birth: "1999",
//     height: "174cm",
//     weight: "62kg",
//     firstName: "오",
//     lastName: "수석",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log("이름은?" + suseok.fullName());

// console.log("내 '이름'은 \"김철수\"입니다.")
// console.log(`내 '이름'은 "김철수"입니다.`);


// let x = 999999999999999;
// let y = BigInt(9999999999999999);

// console.log(x);
// console.log(y);
const arr = [1, 3, 5, 6, 7, 10]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// for of "반복가능한 객체를 순회 a of //객체 객체의 값을 하나씩 a에 담음"
for (const value of arr){
    console.log(value)
}

// for in key가 있는 객체
const obj = { a:1, b:2, c:3};
for(const key in obj){
    console.log(key);
    console.log(obj[key]);
}

const myset = new Set();
myset.add("철수");
myset.add("영희");
myset.add("순이");
console.log(myset);
myset.delete("영희");
console.log(myset);

if(myset.has("민수")){
    myset.add("영수");
}else{
    myset.add("민수");
}
//myset.clear();
console.log(myset.size);

for(const rs of myset){
    console.log(rs);
}

myset.forEach( function(rs, index) {
    console.log(rs + ":" + index);
});

const mysetArr = [...myset];
console.log(mysetArr);