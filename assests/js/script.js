
    function changeBG(newcolor,newTheme){
             document.body.style.backgroundColor = newcolor;
         localStorage.setItem('theme', newTheme);
         let currentTheme = localStorage.getItem('theme');
         document.documentElement.setAttribute('data-theme', currentTheme);
         if(newcolor == "#ffffff"){
            document.body.style.color = "#000";
         } else {
             document.body.style.color = "#ffffff";
         }
    }

    function setTheme(){
        let currentTheme = localStorage.getItem('theme');
         document.documentElement.setAttribute('data-theme', currentTheme);
    }
