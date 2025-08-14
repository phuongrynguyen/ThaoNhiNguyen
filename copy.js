 document.addEventListener("copy", function (e) {
    e.preventDefault();
    alert("Không được sao chép nội dung!");
    window.location.href='canhbao.html';
  });

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Chuột phải đã bị vô hiệu hóa!");
    window.location.href='canhbao.html';
  });

   document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("mousedown", function (e) {
    if (e.button === 2 || e.button === 1) {
      e.preventDefault();
    }
  });

  const imgs = document.querySelectorAll("img");
  imgs.forEach(img => {
    img.setAttribute("draggable", "false");
    img.addEventListener("contextmenu", e => e.preventDefault());
  });