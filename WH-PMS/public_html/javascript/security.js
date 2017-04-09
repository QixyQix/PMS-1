/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validateInput(input){
    var scriptPatt = /<script>/;
    var scriptPatt2 = /<\/script>/;
    
    if(input.trim() !== null || input.trim()!== ""){
        if(scriptPatt.test(input) || scriptPatt2.test(input)){
            return false;
        }else{
            return true;
        }
    }
    return false;
}

function validateUUID(uuid){
    var UUIDPattern = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[34][0-9a-fA-F]{3}-[89ab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/;
    return (UUIDPattern.test(uuid));
}
