

function convertToFC(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function convertToCF(fahrenheit){
    const celsius = (celsius - 32) * 5/9;
    return celsius;
}

console.log("섭씨 25도는 화씨" + convertToFC(25) + "입니다" );

console.log("화씨 95도는 섭씨" + convertToCF(95) + "입니다" );