// Method for target of event
function getTarget(e){
     if (!e) {
          e = window.event;
     }
     return e.target || e.srcElement;
}

//Method for removing the elements of the list
function itemDone(e){
     var target, targetParent, targetGrandParent;
     target = e.getTarget(e);
     targetParent = target.parentNode;
     targetGrandParent = target.parentNode.parentNode;
     targetGrandParent.removeChild(targetParent);

// Method for preventing the link from taking anywhere
     if(e.preventDefault){
          e.preventDefault();
     }
     else {
          e.returnValue = false;
     }
}

var el = document.getElementById('shoppingList');

if(el.addEventListener){
     el.addEventListener('click',function(e){itemDone(e);},false);
}
else {
     el.attachEvent('onclick',function(e){itemDone(e);});
}
