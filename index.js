var numOfButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numOfButtons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", handClick);

  function handClick(){
    alert("I got clicked");
  }

}
