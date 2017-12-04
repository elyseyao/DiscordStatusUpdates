//META{"name":"onlinePlugin"}*//
//By Elyse

var onlinePlugin = function() {};

onlinePlugin.prototype.start = function() {


    var x = $(".friends-online").html();
    var online = [];


    updateC(); 
    populate();




    function populate() {
        console.log("Populating...");
        var orig = window.location.href.substr(23);
        var switched = false;


        if (window.location.href != "https://discordapp.com/channels/@me") {
            $('a[href="/"]').addClass('click');
            try {
                document.getElementsByClassName("click")[0].click();

            } catch (err) {
                $('a[href*="channels/@me"]').addClass('click');
                document.getElementsByClassName("click")[0].click();
                
            }

            switched = true;
        }

        $(".discord-tag").children(".username").each(function(i, el) {
            var m = $(el).text();
            online.push(m);
        });
        console.log("Initialized: " + online);

        if (switched) {
            $('[href*="' + orig + '"]').addClass("selected");
            document.getElementsByClassName("selected")[0].click();
        }

    }


    function updateC() {

        content = $(".friends-online").html();


    }



    function checkFriends() {
        var orig = window.location.href.substr(23);
        var switched = false;
        var checkthis = [];

        if (window.location.href != "https://discordapp.com/channels/@me") {
            $('a[href="/"]').addClass('click');
            try {
                document.getElementsByClassName("click")[0].click();

            } catch (err) {
                $('a[href*="channels/@me"]').addClass('click');
                document.getElementsByClassName("click")[0].click();
                
            }

            switched = true;
        }

        $(".discord-tag").children(".username").each(function(i, el) {
            var x = $(el).text();
            checkthis.push(x);
        });
        console.log("Friends Updated");
        console.log(checkthis);
        if (switched) {
            $('[href*="' + orig + '"]').addClass("selected");
            document.getElementsByClassName("selected")[0].click();
        }

        var nowoff = [];
        var nowon = [];

        for (i = 0; i < checkthis.length; i++) {
            if (!online.includes(checkthis[i])) nowon.push(checkthis[i]);
        }

        for (i = 0; i < online.length; i++) {
            if (!checkthis.includes(online[i])) nowoff.push(online[i]);
        }
        var onstring;
        var offstring;

        onstring = nowon.toString().replace(/"[/]/, '');
        offstring = nowoff.toString().replace(/"[/]/, '');


        	if (offstring.length != 0){
            let myNotification = new Notification('Now Offline', {
                body: offstring
            })

            myNotification.onclick = () => {
                console.log('Notification clicked')
            }
        }

        if(onstring.length !=0){
        	let myNotification = new Notification('Now Online', {
                body: onstring 
            })

            myNotification.onclick = () => {
                console.log('Notification clicked')
            }
        }
        
        online = checkthis;
        checkthis = [];

    }


    window.setInterval(function() {

        if ($(".friends-online").html() != content) {
            updateC();
            checkFriends();

        }
    }, 500);



};

onlinePlugin.prototype.load = function() {

};

onlinePlugin.prototype.unload = function() {};

onlinePlugin.prototype.stop = function() {

};

onlinePlugin.prototype.onMessage = function() {

};

onlinePlugin.prototype.onSwitch = function() {

};

onlinePlugin.prototype.observer = function(e) {

};

onlinePlugin.prototype.getSettingsPanel = function() {
    return "";
};

onlinePlugin.prototype.getName = function() {
    return "Online Notification";
};

onlinePlugin.prototype.getDescription = function() {
    return "Adds online notifications to Discord";
};

onlinePlugin.prototype.getVersion = function() {
    return "0.1.0";
};

onlinePlugin.prototype.getAuthor = function() {
    return "Elyse/Raliryx";
};