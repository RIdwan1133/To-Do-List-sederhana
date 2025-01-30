document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const text = input.value.trim();
        if (text === "") return;

        const li = document.createElement("li");
        li.textContent = text;

       
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");

        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = "";


        li.addEventListener("dblclick", () => {
            li.classList.toggle("completed");
        });

     
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });
    });
});
