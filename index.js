function receivesAFunction (callBack){
    callBack()
}
function returnsANamedFunction(){
    return function greet(){
        return "hello!"
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Wow!"
    }
}