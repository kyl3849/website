let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news() {
  list.innerHTML =
    list.innerHTML +
    `
  <div class="news">
  <h2>${title.value}</h2>
  <p>${content.value}</p><hr> 
  </div> 
  `;
}
let i = 0,
  imgArr = new Array();
imgArr[0] = "https://www.ncyu.edu.tw/files/site_content/ncyu/ncyulogo2.bmp";

imgArr[1] =
  "https://akstatic.streetvoice.com/profile_images/sp/ar/sparkling_snow_d0p/PsVCMCLQUKKukhy8M9sPtb.jpg?x-oss-process=image/resize,m_fill,h_360,w_360,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg";
imgArr[2] =
  "https://memeprod.sgp1.digitaloceanspaces.com/user-resource/45398ade229869791a71172e25a93349.png";

function showImg() {
  document.getElementById("ico").src = imgArr[i];
  i = (i + 1) % 3;
}

function show() {
  setInterval(showImg, 2000);
}