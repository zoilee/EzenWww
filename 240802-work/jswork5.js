

function st(x, y){

    if( x==y){
        return 3*(x+y);
    }else{
        return x + y;

    }

}

function test6(x , y){
    return (x === 50 || y === 50 || (x+y == 50))


}

function test7(x,y){
    return (x < 0 && y >0) || (x > 0 && y < 0 )
}


function test10(str){
    if(str ===null || str === undefined || str.substring(0,4)=='Java'){
        return str;
    }
    return "Java" + str;
}

console.log(st(10,30));
console.log(st(30,30));

console.log(test6(20,30));

console.log(test7(20,30));
console.log(test7(-20,30));

console.log(test10("Javascript"));
console.log(test10("script"));