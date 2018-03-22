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
     target = getTarget(e);
     targetParent = target.parentNode;
     targetGrandParent = targetParent.parentNode;
     targetGrandParent.removeChild(targetParent);

     // if ( target.nodeName.toLowerCase() == "a" ) {  // If user clicked on an a element
     //    elListItem = target.parentNode;              // Get its li element
     //    elList = elListItem.parentNode;              // Get the ul element
     //    elList.removeChild(elListItem);              // Remove list item from list
     //  }
     //  if ( target.nodeName.toLowerCase() == "em" ) { // If the user clicked on an em element
     //    elListItem = target.parentNode.parentNode;   // Get its li element
     //    elList = elListItem.parentNode;              // Get the ul element
     //    elList.removeChild(elListItem);              // Remove list item from list
     //  }

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
