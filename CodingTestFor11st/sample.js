//Ensure
function ensure(value){
    if(value !== undefined){
        return value;
    }
    else
        throw new Error('an error is find')
}

//Remove Property
function removeProperty(obj, prop){
    if(prop in obj){
        delete obj[prop]
        return true;
    }
    else
        return false;
}

//Remove Property
function removeProperty(obj, prop){
    if(obj[prop] !== undefined){
        return true;
    }
    else
        return false;
}

//check digit
function createCheckDigit(membershipId){
    if(membershipId.length === 1){
        return membershipId
    }
    else{
        while(membershipId.length > 1){
            let sum = 0;
            for(value of membershipId) Sum += parseInt(value);
            membershipId = Sum + '';
            //membershipId.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b));
        }
        return membershipId;
    }
}

//Date

function formatDate(userDate){
    let result;
    let splitDate = userDate.split('/');

    let sp0 = splitDate[0];
    let sp1 = splitDate[1];
    let sp2 = splitDate[2];
    // if(sp0.length == 1){
    //     sp0 = '0' + sp0;
    // }
    // if(sp1.length == 1){
    //     sp1 = '0' + sp1;
    // }
    // if(sp2.length == 1){
    //     sp2 = '0' + sp2;
    // }
    for(let i = 0; i < splitDate.length; i++){
        if(splitDate[i].length == 1){
            splitDate[i] += '0';
        }
    }

    for(let i=0; i < splitDate.length; i++){
        result += splitDate[i];
    }
    return result;
}



