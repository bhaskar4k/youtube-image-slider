let size = files.length;

let list = "";
for (let i = 0; i < size; i++) {
    let child_div = document.createElement("div");
    child_div.className = "child";
    child_div.id = "child" + i;

    child_div.style.left = (i * 400) + "px";

    let image_element = document.createElement("img");
    image_element.className = "photo";
    image_element.src = "./Images/" + files[i];

    child_div.appendChild(image_element);
    list += child_div.outerHTML;
}

document.getElementById("parent").innerHTML = list;
document.getElementById("prev_btn").style.visibility = "hidden";

function get_integer_from_position(cur_pos) {
    let val = "";
    for (let i = 0; i < cur_pos.length - 2; i++) {
        val += cur_pos[i];
    }

    return parseInt(val);
}

function prev_btn() {
    for (let i = 0; i < size; i++) {
        let cur_pos = document.getElementById("child" + i).style.left;
        let new_pos = get_integer_from_position(cur_pos) + 400;
        document.getElementById("child" + i).style.left = new_pos + "px";
    }

    if (document.getElementById("child0").style.left === "0px") {
        document.getElementById("prev_btn").style.visibility = "hidden";
    }

    if (document.getElementById("next_btn").style.visibility === "hidden") {
        document.getElementById("next_btn").style.visibility = "visible";
    }
}

function next_btn() {
    for (let i = 0; i < size; i++) {
        let cur_pos = document.getElementById("child" + i).style.left;
        let new_pos = get_integer_from_position(cur_pos) - 400;
        document.getElementById("child" + i).style.left = new_pos + "px";
    }

    document.getElementById("prev_btn").style.visibility = "visible";

    if (document.getElementById("child" + (size - 1)).style.left === "0px") {
        document.getElementById("next_btn").style.visibility = "hidden";
    }
}