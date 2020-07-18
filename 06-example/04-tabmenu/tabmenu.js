(function(){

    const tabList = document.querySelector('.tab_list');
    // 굳이 하나 더 DOM에 접근할 필요는 없다. 
    const tabMore = document.querySelectorAll('.more')
    let tabActive = null;
    let moreActive = null;


    function activate(currentTarget) {
        currentTarget.parentNode.classList.add('active');
        // moreText.classList.add('active');

        tabActive = currentTarget.parentNode;
        // moreActive = currentTarget.nextSibling.nextSibling.nextSibling.nextSibling;
    }

    function inactivate() {
        tabActive.classList.remove('active');
        // moreActive.classList.remove('active');                
    }

    function tabListHandler(e) {
        

        if(e.target.classList.contains('list_title')) {
            const currentTarget = e.target;
            // const moreText = currentTarget.nextSibling.nextSibling.nextSibling.nextSibling;
            
            if(tabActive) {
                inactivate();
            }                    
            if(!currentTarget.parentNode.classList.contains('active')) {
                // activate(currentTarget, moreText)
                activate(currentTarget)

            }
        }

    }

    // 처음 하나를 활성화해야 하는데...!
    // activate(document.querySelector('.list_title'), document.querySelector('.more'));
    activate(document.querySelector('.list_title'));
    
    // document.querySelector('.m1').classList.add('active')
    // document.querySelector('.more').classList.add('active')            
    tabList.addEventListener('click', tabListHandler);            


    
})();