    let a=10;
    function parent(){
        return function child(){
            return function subChild(){
                console.log(a);
            }
        }
    }
    parent()()();