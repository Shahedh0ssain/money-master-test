
// fun with function :
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseInt(inputFieldText);
    inputField.value = '';
 
    if(isNaN(inputAmount) || inputAmount < 0){
    
    return alert('plase input a valid number');
    // inputField.value = '';
 
    }else{
    
    return inputAmount;
    }
 
 
 }
 // finction calculation
 
 
 document.getElementById('totalCalculation').addEventListener('click',function(){
 
 // total income :
 const income = getInputValue('income');
 // total food price
 const footprice = getInputValue('food');
 // total rent price
 const rentprice = getInputValue('rent');
 // total cloths price
 const clothsprice = getInputValue('cloths');
 
 const totalExpensives = footprice + rentprice + clothsprice;
 const totaAmount = income - totalExpensives;
 
 // total expensive
 const totalEx  = document.getElementById('totalExpensive');
 totalEx.innerText = totalExpensives;
 // console.log();
 //total Balance :
 const totlBalance = document.getElementById('totalBalance') ;
 totlBalance.innerText = totaAmount;
 })
 
 document.getElementById('money-save').addEventListener('click',function(){
 
 const moneytext = document.getElementById('save-input');
 const saveAmount = parseInt(moneytext.value);
 
 const saves = income.value / 100;
 const moneySave = saves * saveAmount;
 moneytext .value = '';
 
 //show the saving amount
 const savemoneyText =  document.getElementById("s-money");
 savemoneyText.innerText = moneySave;
 
 //show the remainimg amount:
 // const totlBalance = document.getElementById('totalBalance').value ;
 // const remainimgAmountText = document.getElementById('remming-money');
 // remainimgAmountText.innerText = remainimgAmount;
 // remainimgAmountText.value = '';
 
 
 })