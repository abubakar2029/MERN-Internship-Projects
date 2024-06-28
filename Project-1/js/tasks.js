async function getAllTask() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  console.log(data);
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = data
    .map((task) => {
      return `
      <div class="task-row">
        <div class="flex gap-y-10 justify-between items-start container">
          <div class="flex gap-y-10 justify-evenly grow-1">
            <label class="check-container pointer">
              <input type="checkbox" class="mt-8 cursor-pointer" />
              <span class="checkmark"> </span>
            </label>
            <div class="pointer">
              <h3 class="my-0">${task.title}</h3>
              <p class="my-0">${task.body}</p>
            </div>
          </div>
          <div class="flex gap-y-10 px-10">
            <button class="temp2 btn font-med cursor-default">
              In progress
            </button>
            <button class="temp btn font-med">Remove</button>
          </div>
        </div>
        <div style="background-color: black; margin: 2px 10px; height: 1px"></div>
      </div>
    `;
    })
    .join("");
}

async function createTask(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  console.log(title, description);

  //   let form = document.getElementById("create-form");

  //   let apiResponse = fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "",
  //       body: "",
  //       id: "",
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   }).then((response) => response.json());
  //   console.log("apiResponse", apiResponse);
}

function closeForm() {
  const formElement = document.getElementById("formElement");
  formElement.style.display = "none";
}
function displayForm() {
  const formElement = document.getElementById("formElement");
  formElement.style.display = "flex";
}
