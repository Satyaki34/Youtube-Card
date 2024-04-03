function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr
  if (views < 1000) {
      viewStr = views;
  }
  else if (views > 1000000) {
      viewStr = views / 1000000 + "M";
  }
  else {
      viewStr = views / 1000 + "K";
  }
  let html = `<div class="card">
  <div class="image">
      <img src="${thumbnail}"
          alt="">
      <div class="capsule">${duration}</div>
  </div>
  <div class="text">
      <h1>${title}</h1>
      <p>${cName} <b>.</b> ${viewStr} views <b>.</b> ${monthsOld} months ago</p>
  </div> 
</div>`

  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

document.querySelector('button').addEventListener('click',()=>{

    createCard("2 Game Mumbai Hojaye | Giveaway Now | ITS FREE DONT GIVE ANY MONEY TO ANY1 !! | Watchparty 8.30!!", "8bit Binks69", 1200000, 3, "3:21:22", "https://i.ytimg.com/vi/YhFDzXIP7Ro/hqdefault_live.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm5RUoxo11icJ3ZwAurRJ5kXx4ng")
})
