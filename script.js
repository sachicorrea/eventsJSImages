// Event to eliminate photos from computer science branch selection

document.querySelector('.gallery').addEventListener('click', function(e){
    console.log(e);
    //e.preventDefault();

    if(e.target.tagName === 'IMG'){
        var howMany = this.querySelectorAll('li').length;

        if(howMany > 1){
            var removeTarget = e.target.parentNode;
            removeTarget.parentNode.removeChild(removeTarget);
        }
        else {
            var photoTitle = e.target.alt;
            document.querySelector('.computers p').innerHTML = "<p>You've picked " + photoTitle + "</p>"; 
        }  
    }
}, false);