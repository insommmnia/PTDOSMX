var setting = document.getElementById("setting");
setting.addEventListener("click", function() {

    document.querySelector(".settings").style.display = "block";
});
var back_btn_set = document.getElementById("back_btn_set");
back_btn_set.addEventListener("click", function() {

    document.querySelector(".settings").style.display = "none";


});
var btn_balance = document.getElementById("balance");
btn_balance.addEventListener("click", function() {
    document.querySelector(".balance_link").style.color = "#0DA7FC";
    document.querySelector(".transfer_link").style.color = "#687585";
    document.querySelector(".exchange_link").style.color = "#687585";
    document.querySelector(".history_link").style.color = "#687585";
    document.querySelector(".balance").style.display = "block";
    document.querySelector(".transfer").style.display = "none";
    document.querySelector(".exchange").style.display = "none";
    document.querySelector(".history").style.display = "none";

    document.getElementById("balance_img").src = "img/b_d.svg";
    document.getElementById("history_img").src = "img/h_a.svg";
    document.getElementById("exchange_img").src = "img/e_a.svg";
    document.getElementById("transfer_img").src = "img/t_a.svg";
});
var btn_transfer = document.getElementById("transfer");
btn_transfer.addEventListener("click", function() {
    document.querySelector(".balance_link").style.color = "#687585";
    document.querySelector(".transfer_link").style.color = "#0DA7FC";
    document.querySelector(".exchange_link").style.color = "#687585";
    document.querySelector(".history_link").style.color = "#687585";
    document.querySelector(".balance").style.display = "none";

    document.getElementById("balance_img").src = "img/b_a.svg";
    document.getElementById("history_img").src = "img/h_a.svg";
    document.getElementById("exchange_img").src = "img/e_a.svg";
    document.getElementById("transfer_img").src = "img/t_d.svg";

    document.querySelector(".balance").style.display = "none";
    document.querySelector(".transfer").style.display = "block";
    document.querySelector(".exchange").style.display = "none";
    document.querySelector(".history").style.display = "none";


});
var btn_exchange = document.getElementById("exchange");
btn_exchange.addEventListener("click", function() {
    document.querySelector(".balance_link").style.color = "#687585";
    document.querySelector(".transfer_link").style.color = "#687585";
    document.querySelector(".exchange_link").style.color = "#0DA7FC";
    document.querySelector(".history_link").style.color = "#687585";
    document.querySelector(".balance").style.display = "none";

    document.getElementById("balance_img").src = "img/b_a.svg";
    document.getElementById("history_img").src = "img/h_a.svg";
    document.getElementById("exchange_img").src = "img/e_d.svg";
    document.getElementById("transfer_img").src = "img/t_a.svg";

    document.querySelector(".balance").style.display = "none";
    document.querySelector(".transfer").style.display = "none";
    document.querySelector(".exchange").style.display = "block";
    document.querySelector(".history").style.display = "none";


});
var btn_history = document.getElementById("history");
btn_history.addEventListener("click", function() {
    document.querySelector(".balance_link").style.color = "#687585";
    document.querySelector(".transfer_link").style.color = "#687585";
    document.querySelector(".exchange_link").style.color = "#687585";
    document.querySelector(".history_link").style.color = "#0DA7FC";
    document.querySelector(".balance").style.display = "none";

    document.getElementById("balance_img").src = "img/b_a.svg";
    document.getElementById("history_img").src = "img/h_d.svg";
    document.getElementById("exchange_img").src = "img/e_a.svg";
    document.getElementById("transfer_img").src = "img/t_a.svg";

    document.querySelector(".balance").style.display = "none";
    document.querySelector(".transfer").style.display = "none";
    document.querySelector(".exchange").style.display = "none";
    document.querySelector(".history").style.display = "block";


});
var back_btn_b2_2 = document.querySelector(".back_btn_b2_2");
back_btn_b2_2.addEventListener("click", function() {

    document.querySelector(".transfer_form").style.display = "none";
    document.querySelector(".transfer_choose").style.display = "block";


});
var transfer_item = document.getElementById("transfer_item");
transfer_item.addEventListener("click", function() {

    document.querySelector(".transfer_form").style.display = "block";
    document.querySelector(".transfer_choose").style.display = "none";


});
var back_btn_b2_b2 = document.querySelector(".back_btn_b2_b2");
back_btn_b2_b2.addEventListener("click", function() {

    document.querySelector(".exchange_payment").style.display = "none";
    document.querySelector(".exchange_choose").style.display = "block";


});
var exchange_btn = document.getElementById("exchange_btn");
exchange_btn.addEventListener("click", function() {

    document.querySelector(".exchange_payment").style.display = "block";
    document.querySelector(".exchange_choose").style.display = "none";


});
var button_back2 = document.querySelector(".back_btn2");
button_back2.addEventListener("click", function() {
    document.querySelector(".balance_link").style.color = "#0DA7FC";
    document.querySelector(".transfer_link").style.color = "#687585";
    document.querySelector(".exchange_link").style.color = "#687585";
    document.querySelector(".history_link").style.color = "#687585";
    document.querySelector(".balance").style.display = "block";
    document.querySelector(".transfer").style.display = "none";
    document.querySelector(".exchange").style.display = "none";
    document.querySelector(".history").style.display = "none";

    document.getElementById("balance_img").src = "img/b_d.svg";
    document.getElementById("history_img").src = "img/h_a.svg";
    document.getElementById("exchange_img").src = "img/e_a.svg";
    document.getElementById("transfer_img").src = "img/t_a.svg";


});
var button_back2_1 = document.querySelector(".back_btn2_1");
button_back2_1.addEventListener("click", function() {
    document.querySelector(".balance_link").style.color = "#0DA7FC";
    document.querySelector(".transfer_link").style.color = "#687585";
    document.querySelector(".exchange_link").style.color = "#687585";
    document.querySelector(".history_link").style.color = "#687585";
    document.querySelector(".balance").style.display = "block";
    document.querySelector(".transfer").style.display = "none";
    document.querySelector(".exchange").style.display = "none";
    document.querySelector(".history").style.display = "none";

    document.getElementById("balance_img").src = "img/b_d.svg";
    document.getElementById("history_img").src = "img/h_a.svg";
    document.getElementById("exchange_img").src = "img/e_a.svg";
    document.getElementById("transfer_img").src = "img/t_a.svg";
});
var button_back2_2 = document.querySelector(".back_btn2_2");
button_back2_2.addEventListener("click", function() {
    document.querySelector(".balance_link").style.color = "#0DA7FC";
    document.querySelector(".transfer_link").style.color = "#687585";
    document.querySelector(".exchange_link").style.color = "#687585";
    document.querySelector(".history_link").style.color = "#687585";
    document.querySelector(".balance").style.display = "block";
    document.querySelector(".transfer").style.display = "none";
    document.querySelector(".exchange").style.display = "none";
    document.querySelector(".history").style.display = "none";

    document.getElementById("balance_img").src = "img/b_d.svg";
    document.getElementById("history_img").src = "img/h_a.svg";
    document.getElementById("exchange_img").src = "img/e_a.svg";
    document.getElementById("transfer_img").src = "img/t_a.svg";


});
var button_back3 = document.querySelector(".back_btn3");
button_back3.addEventListener("click", function() {

    document.querySelector(".crypto_list").style.display = "none";
});
var btn_get_c = document.getElementById("get_currency");
btn_get_c.addEventListener("click", function() {
    document.querySelector(".crypto_list").style.display = "block";
});
var btn_give_c = document.getElementById("give_currency");
btn_give_c.addEventListener("click", function() {
    document.querySelector(".crypto_list").style.display = "block";
});