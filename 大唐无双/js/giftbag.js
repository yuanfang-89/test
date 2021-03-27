/**
 * 视频播放
 */
function giftbag(){
    let playbtn = document.getElementsByClassName("video-btn")[0];  //获得播放按钮
    let bg = document.getElementsByClassName("bg")[0]  //获得遮罩层
    let popdialog = document.getElementsByClassName("pop-dialog")[0];   //获得视频弹层
    let ctn =  document.getElementsByClassName("ctn")[0]   //获得视频播放区
    let videoWrap = document.getElementById("videoWrap");
    let closebtn = document.getElementsByClassName("close-btn")[0]    //获得关闭按钮
    let html =  videoWrap.innerHTML   //获得视频区的html

    console.log("playbtn的class名为："+playbtn.className);
    console.log("popdialog的display为："+popdialog.style.display);
    console.log("closebtn的name值为："+closebtn.className);
    playbtn.onclick = ()=>{
        popdialog.style.display = "block";
        videoWrap.innerHTML = html;
        closebtn.onclick = ()=>{
            popdialog.style.display = "none";
            videoWrap.innerHTML = "";
        }
    }
}
giftbag();