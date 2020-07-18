(function(){

    var viewPortfolio = function(event) {
        var userClick = event.target;
    
        if(userClick.tagName == "I") {
            userClick = userClick.parentNode;
        }
    
        var overlayNode = userClick;
        var imageNode = overlayNode.nextElementSibling;
    
        var itemNode = overlayNode.parentNode;
        var mainNode = itemNode.nextElementSibling;
        var subNode = mainNode.nextElementSibling;
        var textNode = subNode.nextElementSibling;
    
    
        document.getElementById('modalImage').src = imageNode.src;
        document.getElementById('modalTitle').innerHTML = mainNode.innerHTML;
        document.getElementById('modalSub').innerHTML = subNode.innerHTML;
        document.getElementById('modalText').innerHTML = textNode.innerHTML;
    
        document.getElementById('portfolioModal').classList.remove('hidden');
        document.getElementsByClassName('modalOverlay')[0].addEventListener('click', function(){
            document.getElementById('portfolioModal').classList.add('hidden');
        })
    
    }
    
    document.getElementById('modalClose').addEventListener('click', function(){
        document.getElementById('portfolioModal').classList.add('hidden');
    });
    
    var folioItem = document.getElementsByClassName('overlay');
    
    for(var i = 0; i < folioItem.length; i++) {
        folioItem[i].addEventListener('click', viewPortfolio);
    }


})();

