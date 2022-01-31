
    function changeBG(newcolor,newTheme){
        document.body.style.backgroundColor = newcolor;
    localStorage.setItem('theme', newTheme);
      document.getElementById("boxbg").style.backgroundColor = "f0ead6";
      let currentTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(newcolor == "#eaeaea"){
       document.body.style.color = "#000";
      document.getElementById("boxbg").style.backgroundColor = "#f0ead6";
       document.getElementById("previewbg").style.backgroundColor = "#eaeaea";
       document.getElementById("secondbg").style.backgroundColor = "rgb(218, 216, 216)";
       document.getElementById("secondbg2").style.backgroundColor = "rgb(218, 216, 216)";
    } 
    else if(newcolor == "#192734"){
       document.body.style.color = "#ffffff";
       document.getElementById("previewbg").style.backgroundColor = "#192734";
      document.getElementById("boxbg").style.backgroundColor = "#111921";
      document.getElementById("secondbg").style.backgroundColor = "rgb(34, 48, 60)";
      document.getElementById("secondbg2").style.backgroundColor = "rgb(34, 48, 60)";
    }
    else if(newcolor == "#78866b"){
       document.body.style.color = "#ffffff";
       document.getElementById("previewbg").style.backgroundColor = "#78866b";
      document.getElementById("boxbg").style.backgroundColor = "#585e51";
      document.getElementById("secondbg").style.backgroundColor = "rgb(148, 160, 137)";
      document.getElementById("secondbg2").style.backgroundColor = "rgb(148, 160, 137)";
     }
     else if(newcolor == "#7e4c74"){
       document.body.style.color = "#ffffff";
       document.getElementById("previewbg").style.backgroundColor = "#7e4c74";
      document.getElementById("boxbg").style.backgroundColor = "#5a3954";
      document.getElementById("secondbg").style.backgroundColor = "rgb(139, 99, 131)";
      document.getElementById("secondbg2").style.backgroundColor = "rgb(139, 99, 131)";
     }
    else {
        document.body.style.color = "#ffffff";
       document.getElementById("previewbg").style.backgroundColor = "#eaeaea";
      document.getElementById("boxbg").style.backgroundColor = "#f0ead6";
      document.getElementById("secondbg").style.backgroundColor = "rgb(218, 216, 216)";
      document.getElementById("secondbg2").style.backgroundColor = "rgb(218, 216, 216)";
    }
}

    function setTheme(){
        let currentTheme = localStorage.getItem('theme');
         document.documentElement.setAttribute('data-theme', currentTheme);
    }