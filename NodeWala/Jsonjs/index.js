const bioData={
    name:"Pravinya",
    age:26,
    college:"DYPCOE,AK"
};
const jsondata=JSON.stringify(bioData);
console.log(jsondata);

const originaldata=JSON.parse(jsondata);
console.log(originaldata);
