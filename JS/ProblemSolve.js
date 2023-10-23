var str="{}";

function isBalanced(str) {
    let stack = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        } else if(stack.length===0){
return false;
        }else if (
            (str[i] === ")" && stack.pop() !== "(") ||
            (str[i] === "}" && stack.pop() !== "{") ||
            (str[i] === "]" && stack.pop() !== "[")
        ) {
            return false; 
        }
    }
    
    return stack.length === 0; 
}


console.log(isBalanced(str));
