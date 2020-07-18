(function(){
    
    function filterSelection(id) {
        var
        listItem = document.getElementsByClassName('listItem'),
        skillItem = document.getElementsByClassName('skillItem');
    
    
        for(var i = 0; i < listItem.length; i++) {
            //removeClass(listItem[i], 'active');
            listItem[i].classList.remove('active');
        }
        addClass(document.getElementById(id), 'active');
    
        if(id === 'all') {
            id = '';
        }
        for(var i = 0; i < skillItem.length; i++) {
            skillItem[i].classList.remove('show');
            if(skillItem[i].className.indexOf(id) > -1) {
                addClass(skillItem[i], 'show');
                //skillItem.classList.add('show');
            }
        }
    }
    
    function addClass(element, name) {
    
        // 찾는 값이 없다면 해당 요소에 쇼를 더한다..!
        if(element.className.indexOf(name) == -1) {
            element.className += " " + name;
        }    
    }
    
    function removeClass(element, name) {
        var arr;
        arr = element.className.split(" ");
    
        while(arr.indexOf(name) > -1) {
            arr.splice(arr.indexOf(name), i);
        }
        element.className = arr.join(" ");    
    }
    
    filterSelection('all');
    
    document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
    document.getElementById('html').addEventListener('click', filterSelection.bind(null, 'html'));
    document.getElementById('css').addEventListener('click', filterSelection.bind(null, 'css'));
    document.getElementById('js').addEventListener('click', filterSelection.bind(null, 'js'));

})();
