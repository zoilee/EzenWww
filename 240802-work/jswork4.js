

function ext(filename){
    // const arrFilename = filename.split(".");
    // const extname = arrFilename[arrFilename.length-1];

    const extname = filename.lastIndexOf(".");
    if(extname !== -1){
        console.log("확장자는" + filename.slice(extname + 1) + "입니다.");
    }
    //console("확장자는" + extname + "입니다.");
}

ext("감사합.니다.exe")