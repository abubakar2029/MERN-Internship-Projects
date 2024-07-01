async function getAllTask() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  console.log(data);
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = data
    .slice(0, 4)
    .map((task, index) => {
      return `
              <tr class="task-row">
                  <td style="padding-top: 25px;">
                      <label class="check-container pointer">
                          <input type="checkbox" class="mt-8 cursor-pointer" />
                          <span class="checkmark"> </span>
                      </label>
                  </td>
                  <td class="pointer">
                      <h3 class="my-0">${task.title}</h3>
                      <p class="my-0">${task.body}</p>
                  </td>
                  <td>
                      <p class="temp2 btn font-med cursor-default">
                          In progress
                      </p>
                  </td>
                  <td><button class="temp btn font-med" onclick="deleteTask(${task.id})">Remove</button></td>
              </tr>
          `;
    })
    .join("");
}

async function createTask(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (title.length == 0) {
    alert("Add a Title");
    return;
  } else if (description.length == 0) {
    alert("Add a description");
    return;
  }
  console.log(title, description);

  try {
    let apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: description,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let jsonResponse = await apiResponse.json();
    console.log("apiResponse", jsonResponse);
    alert("Created Successfully");
  } catch (error) {
    alert("Failed to create task");
  }
}

async function deleteTask(id) {
  console.log(id);

  try {
    let apiResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    alert("Deleted Successfully");
  } catch (error) {
    alert("Failed to delete task");
  }
}

function stopPropagate(e) {
  e.stopPropagation();
}
function closeForm(e) {
  const formElement = document.getElementById("formElement");
  formElement.style.display = "none";
}

function displayForm() {
  const formElement = document.getElementById("formElement");
  formElement.style.display = "flex";
}
