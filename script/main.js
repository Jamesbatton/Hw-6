window.onload = function() {
    var todolist = [];

    function addItems() {
        var item = {};
        if (item.todo = document.getElementById("myCase").value === "") {
            alert("Дело не назначено!!!");
        } else {
            item.todo = document.getElementById("myCase").value;
            item.check = false;
            todolist.push(item);
            show(item);
            add_item = document.getElementById("myCase").value = ""
        }
    }

    add_item.addEventListener("click", addItems);

    function show(item) {
        var show_li = document.createElement("li");
        show_li.innerHTML = item.todo;
        show_ul.appendChild(show_li);
    }

    function checkedElt(el) {

        if (el.target.tagName === 'LI') {
            el.target.classList.toggle('checked');
        }

    }
    var list = document.querySelector('ul');
    list.addEventListener('click', checkedElt, false);


    function deleteList() {
        todolist.length = 0;

        while (list.lastChild) {
            list.removeChild(list.lastChild);
        }
    }

    clear_item.addEventListener("click", deleteList);
}
