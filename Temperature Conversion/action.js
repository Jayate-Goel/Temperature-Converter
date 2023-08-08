const calculate = () => {
    let str = document.getElementById("type").value;
    // console.log(str);
    // let selectedValue = $("selectVal option:selected").text();
   let temp = Number.parseInt(document.getElementById("input-val").value);
//    console.log(typeof(temp));
//    console.log(temp);
    // document.getElementById("ram").innerHTML = temp;
    if(str === "celsius")
    {
        let f = temp*9/5 + 32;
        document.getElementById("ans1").innerHTML = temp;
        document.getElementById("ans2").innerHTML = Math.round(f*100)/100;
        document.getElementById("ans3").innerHTML = Math.round((temp + 273.15)*100)/100;
    }
    else if(str === "fahrenheit")
    {
        let c = (temp-32)*5/9;
        document.getElementById("ans1").innerHTML = Math.round(c*100)/100;;
        document.getElementById("ans2").innerHTML = temp;
        document.getElementById("ans3").innerHTML = Math.round((c+ 273.15)*100)/100 ;
    }
    else
    {
        let c = temp-273.15;
        let f = c*9/5 + 32;
        document.getElementById("ans1").innerHTML = Math.round(c*100)/100;
        document.getElementById("ans2").innerHTML = Math.round(f*100)/100;
        document.getElementById("ans3").innerHTML = temp;
    }
}
// const fun = ()=>{
//     document.getElementById("ram").innerHTML = 'heyhjkhfakdsahjkfhdsskjfhjkdsahfdshf';
//     return false;
// }






// function fun(){
//     console.log("ram ji");
//     document.getElementById("ram").innerHTML += "hey";
// }