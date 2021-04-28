function TreeConstruct(strArr) {
    let parent = {};
    let child = {};

    for(i = 0; i < strArr.length; i++){
        var pair = strArr[i].replace(/[()]/g,"").split(",");
        let varCh = pair[0];
        let varPa = pair[1];

        if(parent[varPa]){
            parent[varPa].push(varCh);
        } else{
            parent[varPa] = [varCh];
        }
        if(parent[varPa].length > 2){
            return false;
        }

        if(child[varCh]){
            return false;
        } else{
            child[varCh] = varPa;
        }
    }
    return true;
}

let tree = ["(1,2)","(2,4)","(7,2)"];
let verify = TreeConstruct(tree);
console.log(verify);