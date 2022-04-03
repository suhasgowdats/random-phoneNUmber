const fs=require('fs')


let phoneNumber=()=>{
    let numbers=[];
    for (let i=0; i<10000;i++){
        let num="9413"
        let random=Math.floor(Math.random()*1000000);
        num=num+random;
        if(num.length===10){
            numbers.push(num);
        }
    }
    storeData("phonebook1.txt",`${numbers}`)
}

let storeData=(filename,data)=>{
    data=`${data}\n`;
    fs.appendFile(filename,data, 'utf8',(err)=>{
        if (err) throw err;
        console.log("phone number added successfully")
    })    
}

module.exports={phoneNumber}