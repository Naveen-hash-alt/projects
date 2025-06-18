function resultButton() {
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var course = document.getElementById("course").value;
      var email = document.getElementById("email").value;
      var gender = document.querySelector('input[name="gender"]:checked')?.value || "";

      var row = document.createElement("div");
      row.className = "whle-box";

      row.innerHTML = `
        <div class="n-box" style="font-size:14px; color:rgb(119, 118, 118);">${name}</div>
        <div class="n-box" style="font-size:14px; color:rgb(119, 118, 118);">${age}</div>
        <div class="n-box" style="font-size:14px; color:rgb(119, 118, 118);">${gender}</div>
        <div class="n-box" style="font-size:14px; color:rgb(119, 118, 118);">${course}</div>
        <div class="n-box" style="color:rgb(119, 118, 118); width:130px; font-size:12px; ">${email}</div>
        <div class="n-box" style="color:rgb(119, 118, 118); width:85px">
          <button class="delete-button" onclick="deleteItem(event)" style="margin-left:-1px; cursor:pointer;">Delete</button>
        </div>
      `;

      document.getElementById("mainBox").appendChild(row);
    }

    function deleteItem(event) {
      event.target.closest(".whle-box").remove();
    }