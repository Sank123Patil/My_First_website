
function addStudent() {
    let name = document.getElementById("name").value;
    let status = document.getElementById("status").value;

    if (name.trim() === "") {
        alert("Enter student name");
        return;
    }

    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let statusCell = document.createElement("td");

    nameCell.textContent = name;
    statusCell.textContent = status;

    row.append(nameCell, statusCell);
    document.getElementById("records").appendChild(row);

    document.getElementById("name").value = "";
}
