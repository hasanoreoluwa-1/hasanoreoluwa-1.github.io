let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let cancel = document.getElementById("cancel");
menu.onclick = () => {
    sidebar.style.right = "0";
};
cancel.onclick = () => {
    sidebar.style.right = "600px";
}