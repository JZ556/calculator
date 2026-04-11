

const MathEngine = (num1:number, num2:number, operator:string): string => {

    let result: number = 0;

    if(operator === "+"){
        result = num1 + num2;
    }else if(operator === "-"){
        result = num1 - num2;
    }else if(operator === "x"){
        result = num1 * num2; 
    }else if (operator === "÷"){
        if(num2 === 0){
            result = 0;
        }else{
            result = num1/num2;
        }
    }else if (operator === "%"){
        result = num1%num2;
    }

    return result.toString();
}

export default MathEngine