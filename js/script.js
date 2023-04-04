function handleMenu() {
  var menu = document.getElementById("dropdown");
  var menuBtn = document.querySelector(".header-bars i");
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    menu.style.display = "block";
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-x");
  } else {
    menu.style.display = "none";
    menuBtn.classList.remove("fa-x");
    menuBtn.classList.add("fa-bars");
  }
}

$(document).ready(function () {
  $("#form1").submit(function () {
    var parentName = $.trim($("#parentName").val());
    var email = $.trim($("#email").val());
    var phone = $.trim($("#phone").val());
    var name = $.trim($("#name").val());
    var date = $.trim($("#date").val());
    var courses = $.trim($("#courses").val());
    var area = $.trim($("#area").val());

    $(".form-err").hide();

    $("#form1 input").css("border", "none");
    $("#form1 select").css("border", "none");

    var flag = true;
    if (!parentName) {
      $("#parentName").css("border", "1px solid red");
      $("#parentName + .form-err").show();
      flag = false;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      $("#email").css("border", "1px solid red");
      $("#email + .form-err").show();
      flag = false;
    }

    if (!/^[0-9\-\+]{9,15}$/.test(phone)) {
      $("#phone").css("border", "1px solid red");
      $("#phone + .form-err").show();
      flag = false;
    }

    if (!name) {
      $("#name").css("border", "1px solid red");

      $("#name + .form-err").show();
      flag = false;
    }

    if (!date) {
      $("#date").css("border", "1px solid red");
      $("#date + .form-err").show();
      flag = false;
    }

    if (!courses) {
      $("#courses").css("border", "1px solid red");
      $("#courses + .form-err").show();
      flag = false;
    }

    if (!area) {
      $("#area").css("border", "1px solid red");
      $("#area + .form-err").show();
      flag = false;
    }

    return flag;
  });
});
