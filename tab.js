const App = {
  
  Data: [
    {
      img: "avatar.png",
      name: "[HOT] Chia sẻ Src Code , Web Game Miễn phí",
      text: "Xin chào, anh em mình lại share cho anh em một cái src game, web ngon hơn người yêu của bạn",
      taixuong: "Tải xuống",
      trangthai: "Miễn phí",
      url: "#",
    },
  ],
  
  Log: function()
  {
    const html = this.Data.map(onlog =>{
      return `<div class="tab">
          <div class="img">
            <img src="${onlog.img}" alt="" />
          </div>
          <h3>${onlog.name}</h3>
          <p>${onlog.text}</p>
          
          <!-- btn -->
          <div class="btn">
            <button id="supot" onclick="location.href='${onlog.url}'">${onlog.taixuong} &nbsp;<i class="fa-solid fa-download"></i></button>
            <button id="coinlog">${onlog.trangthai}&nbsp; <i class="fa-solid fa-heart"></i></button>
          </div>
          
        </div>`;
    });
    
    let you = "Hiện tại chưa có srouce code!";
    
    let your = true;
    
    let data = your;
    data = !data;
    
    document.querySelector(".code").innerHTML = data ? html.join() : you;
    
  },
  
  Add: function()
  {
    this.Log();
  },
}

App.Add();