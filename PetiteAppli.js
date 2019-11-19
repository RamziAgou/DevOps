module.exports = {

    add : function(...args){

        var total = 0;
        for(var i of args){
            if(isNaN(i)){
                console.log("je suis erreur");
                throw new Error("Parameter is not a number");
            }
            total += i
        }
        return total;
    },

    multiplication : function(...args){
        var result = 1;
        for(var i of args){
            result = result * i;
        }
        return result;
    }
}


