var animalArr=["Elephant","Giraffe","Dog","Horse","Gorilla","Lion","Tiger","Cheetah","Rabbit","Monkey","Panda","koala"];
addButton();
$("#submitButton").on("click",function(){
    var animalText=$("#animalName").val();
    console.log(animalText);
    animalArr.push(animalText);
    console.log(animalArr);
    addButton();
});
function addButton(){
    $("#buttonAdd").empty();
for(i=0;i<animalArr.length;i++){
    var animalButton=$("<button>");
    animalButton.text(animalArr[i]);
 $("#buttonAdd").append(animalButton);
}
}

