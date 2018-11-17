function loadMenu(){
    $("#Logo").remove();
    $("#StartButton").remove();
    $("#StartLink").remove();
    createBoard();
}
    alert("Please Allow This Game To Get Your Current Location BEFORE Starting");
    getLocation();
    var Latitude = 0;
    var Longitude = 0;
    var username;
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        Latitude = (position.coords.latitude);
        Longitude = (position.coords.longitude);
        console.log(Latitude+" "+Longitude);
    }

function createBoard(){
    var newElement = document.createElement("div"); 
    newElement.id ="PanelA";
    $(".InteractiveScreen").append(newElement);

    var newElement = document.createElement("h1");
    var textnode = document.createTextNode("Wargo");
    newElement.appendChild(textnode); 
    newElement.id ="GameText";
    $("#PanelA").append(newElement);

    var newElement = document.createElement("div"); 
    newElement.id ="PanelB";
    $(".InteractiveScreen").append(newElement);

        var newElement = document.createElement("h4");
        var textnode = document.createTextNode("Game Mode: Not Chosen");
        newElement.appendChild(textnode); 
        newElement.id ="GameMode";
        $("#PanelB").append(newElement);

        var newElement = document.createElement("h4");
        var textnode = document.createTextNode("Username: --");
        newElement.appendChild(textnode); 
        newElement.id ="Username";
        $("#PanelB").append(newElement);

        var newElement = document.createElement("h4");
        var textnode = document.createTextNode("Location: --");
        newElement.appendChild(textnode); 
        newElement.id ="Location";
        $("#PanelB").append(newElement);

        var newElement = document.createElement("h4");
        var textnode = document.createTextNode("Score: --");
        newElement.appendChild(textnode); 
        newElement.id ="Location";
        $("#PanelB").append(newElement);


    var newElement = document.createElement("div"); 
    newElement.id ="PanelC";
    $(".InteractiveScreen").append(newElement);

        var newElement = document.createElement("div"); 
        newElement.id ="PanelD";
        $("#PanelC").append(newElement);

            var newElement = document.createElement("a"); 
            var textnode = document.createTextNode("Play Multiplayer");
            newElement.appendChild(textnode); 
            newElement.id ="MultiButton";
            $("#PanelD").append(newElement);

        var newElement = document.createElement("div"); 
        newElement.id ="PanelE";
        $("#PanelC").append(newElement);
   
            var newElement = document.createElement("a"); 
            var textnode = document.createTextNode("Play Solo");
            newElement.appendChild(textnode); 
            newElement.id ="SoloButton";
            $("#PanelE").append(newElement);
        
    createBoardaddAttr();
}

function createBoardaddAttr(){
    console.log("Loading Menu...");
    $("#PanelA").css("border-bottom","1px solid black");
    $("#PanelA").css({'position':'absolute','height':'15%','width':'100%','left':'0%','top':'0%'});

    $("#GameText").css("font-size","1.5em");
    $("#GameText").css("position","relative");
    $("#GameText").css("top","15%");

    $("#PanelB").css("border-right","1px solid black");
    $("#PanelB").css({'position':'absolute','height':'85%','width':'20%','left':'0%','top':'15%'});
    
    $("#PanelC").css("border-top","1px solid black");
    $("#PanelC").css("border-left","1px solid black");
    $("#PanelC").css({'position':'absolute','height':'85%','width':'80%','left':'20%','top':'15%'});

    $("#PanelD").css("background-color","gold");
    $("#PanelD").css({'position':'absolute','height':'100%','width':'50%','left':'0%','top':'0%'});
        $("#SoloButton").css("font-size","1.25em");
        $("#SoloButton").css("position","relative");
        $("#SoloButton").css("top","45%");
        $("#SoloButton").attr("href","#");
        $("#SoloButton").attr("onclick","playSolo()");


    $("#PanelE").css("background-color","lightgray");
    $("#PanelE").css({'position':'absolute','height':'100%','width':'50%','left':'50%','top':'0%'});
    $("#GameText").css("font-size","1.5em");
        $("#MultiButton").css("font-size","1.25em");
        $("#MultiButton").css("position","relative");
        $("#MultiButton").css("top","45%");
        $("#MultiButton").attr("href","#");
        $("#MultiButton").attr("onclick","playMulti()");
}

function playSolo(){
    console.log("Playing Solo...");
    $("#PanelD").remove();
    $("#SoloButton").remove();
    $("#GameMode").text("Game Mode: Solo");
    $("#GameMode").css("font-size","0.9em");
    $("#PanelE").css({'height':'100%','width':'100%','left':'00%','top':'0%'});
    makeUser();
}

function playMulti(){
    console.log("Playing Multi...");
    $("#PanelE").remove();
    $("#MultiButton").remove();
    $("#GameMode").text("Game Mode: Multiplayer");
    $("#GameMode").css("font-size","0.9em");
    $("#PanelD").css({'height':'100%','width':'100%','left':'00%','top':'0%'});
    var newElement = document.createElement("h2"); 
    var textnode = document.createTextNode("Is This Your Current Location?");
    newElement.appendChild(textnode); 
    newElement.id ="LocationQuestion";
    $("#PanelD").append(newElement);
    var newElement = document.createElement("div"); 
    newElement.id ="map";
    $("#PanelD").append(newElement);
    $("#map").css({'height':'60%','width':'80%','left':'10%','top':'15%','position':'absolute' ,'background':'grey'});
    moveMapToLocation(map, Latitude, Longitude);
    $("#Location").css("font-size","0.9em");
    $("#Location").html("Current Location:<br> "+Longitude+" "+ Latitude);

    var newElement = document.createElement("button"); 
    newElement.id ="YesButton";
    $("#PanelD").append(newElement);
    $("#YesButton").html('Yes');
    $("#YesButton").attr("onclick","makeUser()");
    $("#YesButton").css({'height':'10%','width':'20%','left':'20%','top':'80%','position':'absolute'});

    var newElement = document.createElement("button"); 
    newElement.id ="NoButton";
    $("#PanelD").append(newElement);
    $("#NoButton").html('No');
    $("#NoButton").attr("onclick","location.reload();");
    $("#NoButton").css({'height':'10%','width':'20%','left':'60%','top':'80%','position':'absolute'});

}

    function makeUser(){
        $("#map").remove();
        $("#NoButton").remove();
        $("#YesButton").remove();
        $("#LocationQuestion").remove();

        jQuery(this).prev("#PanelE").attr("id","#PanelC");
        jQuery(this).prev("#PanelD").attr("id","#PanelC");

        var newElement = document.createElement("h3"); 
        newElement.id ="UserNameQuestion";
        newElement.innerHTML = "What Do You Want Your Username To Be?";
        $("#PanelC").append(newElement);
        $("#UserNameQuestion").css("position","relative");
        $("#UserNameQuestion").css("top","10%");
        $("#UserNameQuestion").css("text-align","center");

        var newElement = document.createElement("form");
        newElement.id ="usernameform";
        $("#PanelC").append(newElement);

        var newElement = document.createElement("input"); 
        newElement.id ="usernamechoice";
        newElement.type="text";
        newElement.required;
        $("#usernameform").append(newElement);

        $("#usernamechoice").css({'height':'10%','width':'40%'});
        $("#usernamechoice").css("position","absolute");
        $("#usernamechoice").css("top","30%");
        $("#usernamechoice").css("left","30%");
        $("#usernamechoice").css("text-align","center");
    
        var newElement = document.createElement("input"); 
        newElement.id ="submit";
        newElement.type="submit";
        $("#usernameform").append(newElement);
        
        $("#submit").attr("onclick","saveUserName();");
        $("#submit").css({'height':'10%','width':'30%'});
        $("#submit").css("position","absolute");
        $("#submit").css("top","60%");
        $("#submit").css("left","35%");
        $("#submit").css("text-align","center");

        

    }

    function saveUserName(){
        var input = document.getElementById("usernamechoice").value;
        console.log(input);
        var username = input;
        $("#Username").text("Username: "+username);
        $("#Username").css("font-size","0.9em");
        startGame();
    }

    function startGame(){
        $("#usernameform").remove();
        $("#submit").remove();
        $("#UserNameQuestion").remove();
    }





        //| MAPBOX API |
        function moveMapToLocation(map, Longitude, Latitude){ 
          
          //Step 1: initialize communication with the platform
          var platform = new H.service.Platform({
            app_id: 'devportal-demo-20180625',
            app_code: '9v2BkviRwi9Ot26kp2IysQ',
            useHTTPS: true
          });
          var pixelRatio = window.devicePixelRatio || 1;
          var defaultLayers = platform.createDefaultLayers({
            tileSize: pixelRatio === 1 ? 256 : 512,
            ppi: pixelRatio === 1 ? undefined : 320
          });
          
          //Step 2: initialize a map  - not specificing a location will give a whole world view.
          var map = new H.Map(document.getElementById('map'),
            defaultLayers.normal.map, {pixelRatio: pixelRatio});
          
          //Step 3: make the map interactive
          // MapEvents enables the event system
          // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
          var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
          
          // Create the default UI components
          var ui = H.ui.UI.createDefault(map, defaultLayers);
          Longitude.toFixed(6); 
          Latitude.toFixed(6); 
          map.setCenter({lat:Longitude, lng:Latitude});
          map.setZoom(14); 

        }