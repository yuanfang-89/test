/**
 * 轮播部分
 */
let banner = document.getElementsByClassName("banner-nav")[0];//获得获取官方和合作的按钮
let btn = banner.getElementsByTagName("a"); //获取官方和合作的按钮
let Box1 = document.getElementsByClassName("bannerBox1")[0];//获得官方轮播体
let Box2 = document.getElementsByClassName("bannerBox2")[0];//获得官方轮播体

//获得是官方按钮还是合作按钮
function getBtn(){
    for(let i=0; i<btn.length; i++){
        btn[i].onclick = ()=>{
            for(let j=0; j<btn.length; j++){
                btn[j].className = "";
            }
            btn[i].className = "on";
            //console.log("当前btn为"+i);
            if(i==0){
                Box1.className = "bannerBox bannerBox1 on";
                Box1.style.display = "block";
                Box2.className = "bannerBox bannerBox2";
                Box2.style.display = "none";
            }else{
                Box1.className = "bannerBox bannerBox1";
                Box1.style.display = "none";
                Box2.className = "bannerBox bannerBox1 on";
                Box2.style.display = "block";
            }

        }
    }
}
getBtn();

/* 官方轮播 */
function rotation(){
    let auto = null;    //获得循环播放函数的id
    let bannerBoxBd1 = document.getElementsByClassName("bannerBoxBd1")[0];//获得官方的轮播框
    let tempWrap = document.getElementsByClassName("tempWrap")[0];
    let bannerBoxHd1 = document.getElementsByClassName("bannerBoxHd1")[0];//得到轮播条
    let dots = bannerBoxHd1.getElementsByTagName("span");//得到轮播条的每个点
    let index = 1;  //标记当前轮播的位置
    let left = 0;   //当前轮播的left值
    let status = false; //标记动画的运行状态，true为在运行，反之

    //向后轮播
    function next_btn(){
        if(status == true){
            return false;
        }
        left = parseInt(bannerBoxBd1.style.left);
        let new_left = left - 557;

        if(new_left < -3899){
            bannerBoxBd1.style.left = "-557px";
            new_left = -1114;
        }
        index = ++index > 6? 1:index;
        animate(new_left);

    }

    // 点击小点时进行的操作
    for(let i=0; i<dots.length; i++){
        dots[i].onmouseover = ()=>{
            if(index == i+1 || status){
                return false;
            }
            let new_index = i+1;
            let new_left = (i+1)*-557;
            index = new_index;
            animate(new_left);
        }
        
    }

    //轮播播放的动画
    function animate(new_left){
        status = true;      // 把动画执行状态设为true
        let left = parseInt(bannerBoxBd1.style.left);
        let offset = new_left - left;           //计算移动的距离
        let interval = 10;                      // 速度的单位时间
        let speed = offset/(557/interval);      // 在总移动距离下每个单位时间内移动的距离，也就是速度
        
        function go(){
            
            left = parseInt(bannerBoxBd1.style.left);       //当前位置
            let next_left = left + speed;               //当前位置加上速度就是下一个单位时间的位置
            bannerBoxBd1.style.left = next_left + "px";
            if(speed<0 && next_left >= new_left || speed>0 && next_left <= new_left){
                setTimeout(()=>{
                    go();
                },interval);  
            }else{
                //由于移动可能会有一部偏差，所以最后时把list的位置强制放到终点上
                if(new_left <= -4456){
                    bannerBoxBd1.style.left = -1114 + "px";
                }
                if(new_left >= 0){
                    bannerBoxBd1.style.left = -3899 + "px";
                }
                bannerBoxBd1.style.left = new_left + "px";  
                changeDot();
                status = false;
            }
        }
        
        go();
    }

    // 当鼠标移进轮播时，轮播停止
    tempWrap.onmouseover = ()=>{
        clearInterval(auto);
    }
    // 当鼠标移出轮播时，轮播重新开始
    tempWrap.onmouseout = ()=>{
        autoPlay();
    }

    //该变轮播条的位置
    function changeDot(){
        // console.log("进入changeDot");
        for(let i=0; i<dots.length; i++){
            dots[i].className = "";
        }
        dots[index-1].className = "on";
        
    }

    //自动播放
    function autoPlay() {
        auto = setInterval(() => {
            next_btn();
        }, 3000);
    }

    autoPlay();
}
rotation();


/* 合作轮播 */
function rotation2(){
    let auto = null;    //获得循环播放函数的id
    let bannerBoxBd2 = document.getElementsByClassName("bannerBoxBd2")[0];//获得官方的轮播框
    let tempWrap = document.getElementsByClassName("tempWrap")[1];
    let bannerBoxHd2 = document.getElementsByClassName("bannerBoxHd2")[0];//得到轮播条
    let dots = bannerBoxHd2.getElementsByTagName("span");//得到轮播条的每个点
    let index = 1;  //标记当前轮播的位置
    let left = 0;   //当前轮播的left值
    let status = false; //标记动画的运行状态，true为在运行，反之

    //向后轮播
    function next_btn(){
        if(status == true){
            return false;
        }
        left = parseInt(bannerBoxBd2.style.left);
        let new_left = left - 557;

        if(new_left < -2785){
            bannerBoxBd2.style.left = "-557px";
            new_left = -1114;
        }
        index = ++index > 4? 1:index;
        animate(new_left);

    }
    
    // 点击小点时进行的操作
    for(let i=0; i<dots.length; i++){
        dots[i].onmouseover = ()=>{
            if(index == i+1 || status){
                return false;
            }
            let new_index = i+1;
            let new_left = (i+1)*-557;

            index = new_index;
            animate(new_left);
        }
        
    }

    //轮播播放的动画
    function animate(new_left){
        status = true;      // 把动画执行状态设为true
        let left = parseInt(bannerBoxBd2.style.left);
        let offset = new_left - left;           //计算移动的距离
        let interval = 10;                      // 速度的单位时间
        let speed = offset/(557/interval);      // 在总移动距离下每个单位时间内移动的距离，也就是速度
        
        function go(){
            
            left = parseInt(bannerBoxBd2.style.left);       //当前位置
            let next_left = left + speed;               //当前位置加上速度就是下一个单位时间的位置
            bannerBoxBd2.style.left = next_left + "px";
            if(speed<0 && next_left >= new_left || speed>0 && next_left <= new_left){
                setTimeout(()=>{
                    go();
                },interval);  
            }else{
                //由于移动可能会有一部偏差，所以最后时把list的位置强制放到终点上
                if(new_left <= -3342){
                    bannerBoxBd2.style.left = -1114 + "px";
                }
                if(new_left >= 0){
                    bannerBoxBd2.style.left = -2785 + "px";
                }
                bannerBoxBd2.style.left = new_left + "px";  
                changeDot();
                status = false;
            }
        }
        
        go();
    }

    // 当鼠标移进轮播时，轮播停止
    tempWrap.onmouseover = ()=>{
        clearInterval(auto);
    }
    // 当鼠标移出轮播时，轮播重新开始
    tempWrap.onmouseout = ()=>{
        autoPlay();
    }

    //该变轮播条的位置
    function changeDot(){
        // console.log("进入changeDot");
        for(let i=0; i<dots.length; i++){
            dots[i].className = "";
        }
        dots[index-1].className = "on";
        
    }

    //自动播放
    function autoPlay() {
        auto = setInterval(() => {
            next_btn();
        }, 3000);
    }

    autoPlay();
}

rotation2();




/**
 * 新闻部分
 */
function newsTurn(){

    let index = 0;  //标记现在在哪个部分的位置
    let new_index = 0;//标记新的位置
    let status =false; //标记动画的运行状态，true为在运行，反之
    let newsHd = document.getElementsByClassName("newsHd")[0];//获得头部
    let lista = newsHd.getElementsByTagName("a");
    let newsBd = document.getElementsByClassName("newsBd")[0];//获得ul
    let left = 0;//获得当前ul的位置
    
    lista[index].className = "newsHdItem on";
    for(let i=0; i<lista.length-1; i++){
        if(status){
            break;
        }
        //当鼠标进入进行的操作
        lista[i].onmouseover = ()=>{
            new_index = i;
            //console.log("new_index为："+new_index);
            for(let j=0; j<lista.length-1; j++){
                lista[j].className = "newsHdItem";
            }
            lista[i].className = "newsHdItem on";

            let new_left = (new_index)*-368;
            
            newsAnimation(new_left);
        }
    }

    //新闻的ul进行移动的动画
    function newsAnimation(new_left){
        status = true;
        let offset = new_left - left;//距离
        let interval = 8;          //单位时间，368/8为所花费的时间
        let speed = offset/(368/interval);  //速度
        
        function go(){
            left = parseInt(newsBd.style.left);
            let next_left = left + speed;
            newsBd.style.left = next_left + "px";
    
            if(speed<0 && next_left>=new_left || speed>0 && next_left<=new_left){
                setTimeout(()=>{
                    go();
                },interval);
            }else{
                newsBd.style.left = new_left + "px";
                status = false;
                index = new_index;
            }
        }
        go();
    }

}
newsTurn();

/**
 * 派别部分
 */

/** 门派图标的选择*/
function selectSectsIcon(){
    let roleItem = document.getElementsByClassName("roleItem");
    let roleIcon = document.getElementsByClassName("roleHd")[0].getElementsByClassName("roleIcon");
    let index = 0;
    //默认显示的为第一个风华派
    roleItem[0].style.display = "block";
    //默认门派图标为第一个风华派
    roleIcon[0].className = "roleIcon roleIcon1 on";

    for(let i=0; i<roleIcon.length; i++){
        roleIcon[i].onmouseover = ()=>{
            for(let j=0; j<roleIcon.length; j++){
                roleIcon[j].className = "roleIcon roleIcon"+(j+1);
                roleItem[j].style.display = "none";
            }
            roleIcon[i].className = "roleIcon roleIcon"+(i+1)+" on";
            roleItem[i].style.display = "block";

            //调用男女图片改变的函数
            index = i;
            changeSex(index);
        }
    }
}
selectSectsIcon();

 /** 男女图片转换函数 */
 function changeSex(index){
    let roleMan = document.getElementsByClassName("roleSex")[index].getElementsByClassName("roleMan");
    let roleItem = document.getElementsByClassName("roleItem")[index];
    
    for(let i=0; i<roleMan.length; i++){
        roleMan[i].onclick = ()=>{
            for(let j=0; j<roleMan.length; j++){
                roleMan[j].className = "roleMan";
            }
            roleMan[i].className = "roleMan active";
            if(i == 0){
                roleItem.className = "roleItem";
            } else{
                roleItem.className = "roleItem roleWoman";
            }
        }
        
    }
    
 }


 /**
  * 近期热点  PK趣闻
  */
 function jqrd(){
    let hotHdItem = document.getElementsByClassName("hotHdItem");
    let hotBd = document.getElementsByClassName("hotBd")[0];
    let index = 0;
    let new_index = 0;
    let left = 0;   //获取当前left的位置

    //默认为近期热点
    hotHdItem[index].className = "hotHdItem on";
    hotBd.style.left = "0px";
    for(let i=0; i<hotHdItem.length; i++){
        hotHdItem[i].onmouseover = ()=>{
            for(let j=0; j<hotHdItem.length; j++){
                hotHdItem[j].className = "hotHdItem";
            }
            hotHdItem[i].className = "hotHdItem on";
            new_index = i;
            let new_left = new_index * -327;
            jqrdanimation(new_left);
        }
    }

    function jqrdanimation(new_left){
        let offset = new_left - left;//距离
        let interval = 10;          //单位时间，368/8为所花费的时间
        let speed = offset/(327/interval);  //速度
        
        function go(){
            left = parseInt(hotBd.style.left);
            let next_left = left + speed;
            hotBd.style.left = next_left + "px";
    
            if(speed<0 && next_left>=new_left || speed>0 && next_left<=new_left){
                setTimeout(()=>{
                    go();
                },interval);
            }else{
                hotBd.style.left = new_left + "px";
                index = new_index;
            }
        }
        go();
    }
 }
 
jqrd();



/**
 * 第三部分的ul悬浮移动轮播
 */
function part3Rotation(){
    let JpicNewsItem = document.getElementsByClassName("picHd")[0].getElementsByClassName("JpicNewsItem");
    let picBd = document.getElementsByClassName("picBd")[0];
    let left = 0;
    let index = 0;
    let new_index = 0;

    JpicNewsItem[index].className = "picNewsItem JpicNewsItem on";
    picBd.style.left = "0px";
    for(let i=0; i<JpicNewsItem.length; i++){
        JpicNewsItem[i].onmouseover = ()=>{
            for(let j=0; j<JpicNewsItem.length; j++){
                JpicNewsItem[j].className = "picNewsItem JpicNewsItem";
            }
            JpicNewsItem[i].className = "picNewsItem JpicNewsItem on";
            new_index = i;

            let new_left = new_index * -638;
            part3Animation(new_left);
        }
    }

    function part3Animation(new_left){
        let offset = new_left - left;
        let interval = 30;
        let speed = offset/(638/interval);

        function go(){
            left = parseInt(picBd.style.left);
            let next_left = left + speed;
            picBd.style.left = next_left + "px";

            if(speed<0 && next_left>=new_left || speed>0 && next_left<=new_left){
                setTimeout(()=>{
                    go();
                },interval);
            }else{
                picBd.style.left = new_left + "px";
                index = new_index;
            }
        }
        go();
    }
    
}
part3Rotation();



/**
 * 第四部分
 */

/**客户服务部分 */
function part4Khfw(){
    let khfw = document.getElementsByClassName("khfwHd")[0].getElementsByTagName("li");
    let khfwBd = document.getElementsByClassName("khfwBd")[0];
    let left = 0;
    let index = 0;
    let new_index = 0;

    khfw[index].className = "on";
    khfwBd.style.left = "0px";
    for(let i=0; i<khfw.length; i++){
        khfw[i].onmouseover = ()=>{
            for(let j=0; j<khfw.length; j++){
                khfw[j].className = "";
            }
            khfw[i].className = "on";
            new_index = i;

            let new_left = new_index * -202;
            part4KhfwAnimation(new_left);
        }
    }

    function part4KhfwAnimation(new_left){
        let offset = new_left - left;
        let interval = 10;
        let speed = offset/(202/interval);

        function go(){
            left = parseInt(khfwBd.style.left);
            let next_left = left + speed;
            khfwBd.style.left = next_left + "px";

            if(speed<0 && next_left>=new_left || speed>0 && next_left<=new_left){
                setTimeout(()=>{
                    go();
                },interval);
            }else{
                khfwBd.style.left = new_left + "px";
                index = new_index;
            }
        }
        go();
    }
    
}
part4Khfw();


/**轮播部分*/
function part4Rotation(){
    let JvideoNewsItem = document.getElementsByClassName("videoHd")[0].getElementsByClassName("JvideoNewsItem");
    let videoBd = document.getElementsByClassName("videoBd")[0];
    let left = 0;
    let index = 0;
    let new_index = 0;

    JvideoNewsItem[index].className = "videoNewsItem JvideoNewsItem on";
    videoBd.style.left = "0px";
    for(let i=0; i<JvideoNewsItem.length; i++){
        JvideoNewsItem[i].onmouseover = ()=>{
            for(let j=0; j<JvideoNewsItem.length; j++){
                JvideoNewsItem[j].className = "videoNewsItem JvideoNewsItem";
            }
            JvideoNewsItem[i].className = "videoNewsItem JvideoNewsItem on";
            new_index = i;

            let new_left = new_index * -924;
            part4Animation(new_left);
        }
    }

    function part4Animation(new_left){
        let offset = new_left - left;
        let interval = 10;
        let speed = offset/(924/interval);

        function go(){
            left = parseInt(videoBd.style.left);
            let next_left = left + speed;
            videoBd.style.left = next_left + "px";

            if(speed<0 && next_left>=new_left || speed>0 && next_left<=new_left){
                setTimeout(()=>{
                    go();
                },interval);
            }else{
                videoBd.style.left = new_left + "px";
                index = new_index;
            }
        }
        go();
    }
    
}
part4Rotation();


/**
 * 视频播放部分
 */
let play = document.getElementsByClassName("video_button playVideo")[0];    //获得播放键按钮
let Layer = document.getElementsByClassName("Layer")[0];  //获得遮罩层
let videopop = document.getElementById("video-pop");    //获得视频播放弹层
let videobox = document.getElementsByClassName("video-box")[0];  //获得视频播放区
let close = document.getElementsByClassName("close")[0];  //获得关闭按钮
let html = document.getElementsByClassName("video-box")[0].innerHTML; //获得视频播放区的html

play.onclick = ()=>{
    Layer.className = "Layer on";
    videopop.style.display = "block";
    videobox.innerHTML = html;
    close.onclick = ()=>{
        //console.log("点击了close");
        Layer.className = "Layer";
        videopop.style.display = "none";
        videobox.innerHTML = "";
    }
}
