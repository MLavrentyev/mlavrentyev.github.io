
$(setHeader);
$(window).resize(setHeader);

function setHeader() {
    let name = $("#profileName");
    let pic = $("#profilePic");

    if ($(window).width() < 440) {
        name.text("mark");
        showHamburger();
        shrinkTitle();
    } else if ($(window).width() < 850) {
        name.text("mark");
        showHamburger();
        growTitle();
    } else if ($(window).width() < 1150) {
        name.text("mark");
        hideHamburger();
        growTitle();
    } else {
        // name.text("mlavrentyev");
        name.text("mark")
        hideHamburger();
        growTitle();
    }
}

function hideHamburger() {
    closeSideNav();
    $("#links").show();
    $("#hamburgerIcon").hide();
}
function showHamburger() {
    $("#links").hide();
    $("#hamburgerIcon").show();
}

function shrinkTitle() {
    let name = $("#profileName");
    let pic = $("#profilePic");

    name.css("fontSize", 50);
    pic.css("height", 60);
    pic.css("width", 60);
}
function growTitle() {
    let name = $("#profileName");
    let pic = $("#profilePic");

    name.css("fontSize", 60);
    pic.css("height", 100);
    pic.css("width", 100);
}


$("#hamburgerIcon").click(function() {
    $("#hamburgerMenu")
});


let sideNavOpen = false;
function toggleSideNav() {
    if (sideNavOpen) {
        sideNavOpen = false;
        closeSideNav();
    } else {
        sideNavOpen = true;
        openSideNav();
    }
}
function openSideNav() {
    $("#sideNav").show();
    $("#main").css("right", "250px");
    $("#hamburger").hide();
    $("#closeHamburger").show();
}
function closeSideNav() {
    $("#main").css("right", "0");
    $("#main").bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
        if (!sideNavOpen) {
            $("#sideNav").hide();
        }
    });
    $("#closeHamburger").hide();
    $("#hamburger").show();
}
