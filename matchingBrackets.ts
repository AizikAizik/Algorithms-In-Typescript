/*
    write a function that takes pair of parantheses in a string
    make sure the string includes only ()
    then return true if the parantheses match and false if otherwise
*/

function checkForParenthesesOnly(str:string):boolean{
    const a:string = "(";
    const b:string = ")";

    for(let i=0; i < str.length; i++){
        if(str.charAt(i) !== a && str.charAt(i) !== b){
            return false;
        }
    }

    return true;
}

function isParanthesesValid(str:string):boolean{
    if(!checkForParenthesesOnly(str)){
        console.log('string must contain only parantheses only');
        return false;
    }

    if(str.startsWith(")")){
        return false;
    }

    let arr: Array<string> = [];
    for(let i=0; i < str.length; i++){
        if(str.charAt(i) === "("){
            arr.push(str.charAt(i));
        }else{
            arr.pop();
        }
    }

    return arr.length ? false : true
}

console.log(isParanthesesValid('()(()())'));