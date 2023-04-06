document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".payeer_descr2").style.marginTop = "-10px";
    document.querySelector(".payeer_descr2").style.opacity = "1";

});
var button_login = document.querySelector(".btn_login");
button_login.addEventListener("click", function() {
    document.querySelector(".textbox_main").style.top = "-70%";
    document.querySelector(".textbox_main").style.opacity = "0";
    document.querySelector(".btnbox_main").style.top = "-12%";
    document.querySelector(".form_log_box").style.top = "1%";
    document.querySelector(".form_log_box").style.opacity = "1";
    document.querySelector(".back_btn").style.opacity = "1";
    document.querySelector(".btn_create").style.opacity = "0";


});
var button_create = document.querySelector(".btn_create");
button_create.addEventListener("click", function() {
    document.querySelector('.main').style.transform = "translateX(-100%)";
    document.querySelector('.create_main').style.transform = "translateX(0%)";
    document.querySelector(".back_btn2").style.opacity = "1";
    document.querySelector(".back_btn2").style.zIndex = 1;



});
var button_back = document.querySelector(".back_btn");
button_back.addEventListener("click", function() {
    document.querySelector(".textbox_main").style.top = "-10%";
    document.querySelector(".btn_create").style.opacity = "1";

    document.querySelector(".textbox_main").style.opacity = "1";
    document.querySelector(".btnbox_main").style.top = "-12%";
    document.querySelector(".form_log_box").style.top = "-80%";
    document.querySelector(".back_btn").style.opacity = "0";
    document.querySelector(".form_log_box").style.opacity = "0";

});
var button_back2 = document.querySelector(".back_btn2");
button_back2.addEventListener("click", function() {
    console.log("dfdjslnvl");
    document.querySelector('.main').style.transform = "translateX(0%)";
    document.querySelector('.create_main').style.transform = "translateX(100%)";
    document.querySelector(".back_btn2").style.opacity = "0";
    document.querySelector(".back_btn2").style.zIndex = -1;


});
var button_change = document.querySelector(".btn_change");
button_change.addEventListener("click", function() {
    document.querySelector(".form_create_input_pass").style.pointerEvents = "all";
    document.querySelector(".form_create_input_pass").style.borderBottom = "1px solid #0DA7FC";


});