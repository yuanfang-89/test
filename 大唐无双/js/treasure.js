/**
 * 根据服务器选择，更改服务器名称的区域
 */

 function changeArea(){
    let area_list_panel = document.getElementById("area_list_panel");   //获取服务区选择的id 
    let arealista = area_list_panel.getElementsByTagName("a");  //获取服务区的个数
    let index = 0;  //设置当前服务区选择的为第一个
    let server_list_panel = document.getElementById("server_list_panel");   //获取服务器名称的id
    let html = server_list_panel.innerHTML;     //获取服务器名称的当前html

    // 设置服务名称
    let html1 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="纵横天下" data_serverid="1" data_server_name="天下无双(剑门蜀道)">天下无双(剑门蜀道)</a>
                </li>
                <li>
                    <a href="#" id="server_el_1" class="" data_area_name="纵横天下" data_serverid="2" data_server_name="义薄云天(饮马长江)">义薄云天(饮马长江)</a>
                </li>
                <li>
                    <a href="#" id="server_el_2" class="" data_area_name="纵横天下" data_serverid="3" data_server_name="天下莫敌(江湖路)">天下莫敌(江湖路)</a>
                </li>
                <li>
                    <a href="#" id="server_el_3" class="" data_area_name="纵横天下" data_serverid="4" data_server_name="独步天下(逐鹿中原)">独步天下(逐鹿中原)</a>
                </li>
                <li>
                    <a href="#" id="server_el_4" class="" data_area_name="纵横天下" data_serverid="5" data_server_name="刀剑笑(碧血剑)">刀剑笑(碧血剑)</a>
                </li>
                <li>
                    <a href="#" id="server_el_5" class="" data_area_name="纵横天下" data_serverid="6" data_server_name="且笑红尘(铁血战魂)">且笑红尘(铁血战魂)</a>
                </li>
                <li>
                    <a href="#" id="server_el_6" class="" data_area_name="纵横天下" data_serverid="7" data_server_name="英雄凯旋(海誓山盟)">英雄凯旋(海誓山盟)</a>
                </li>`;
                
                
    let html2 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="经典区" data_serverid="1" data_server_name="江山如画(断桥残雪)">江山如画(断桥残雪)</a>
                </li>`;
    let html3 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="盖世无双" data_serverid="1" data_server_name="军令如山(情谊永恒)">军令如山(情谊永恒)</a>
                </li>
                <li>
                    <a href="#" id="server_el_1" class="" data_area_name="盖世无双" data_serverid="2" data_server_name="天罡北斗(武林至尊)">天罡北斗(武林至尊)</a>
                </li>
                <li>
                    <a href="#" id="server_el_2" class="" data_area_name="盖世无双" data_serverid="3" data_server_name="功成名就(流芳千载)">功成名就(流芳千载)</a>
                </li>
                <li>
                    <a href="#" id="server_el_3" class="" data_area_name="盖世无双" data_serverid="4" data_server_name="万马奔腾(风云英雄)">万马奔腾(风云英雄)</a>
                </li>`;
    let html4 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="浴火重生" data_serverid="1" data_server_name="独步青云(纵横齐鲁)">独步青云(纵横齐鲁)</a>
                </li>
                <li>
                    <a href="#" id="server_el_1" class="" data_area_name="浴火重生" data_serverid="2" data_server_name="傲视天下(问鼎天下)">傲视天下(问鼎天下)</a>
                </li>
                <li>
                    <a href="#" id="server_el_2" class="" data_area_name="浴火重生" data_serverid="3" data_server_name="纵横莫当(锋芒毕露)">纵横莫当(锋芒毕露)</a>
                </li>
                <li>
                    <a href="#" id="server_el_3" class="" data_area_name="浴火重生" data_serverid="4" data_server_name="天涯海角(扬鞭策马)">天涯海角(扬鞭策马)</a>
                </li>`;            
    let html5 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="凌云之志" data_serverid="1" data_server_name="生死与共(友情岁月)">生死与共(友情岁月)</a>
                </li>
                <li>
                    <a href="#" id="server_el_1" class="" data_area_name="凌云之志" data_serverid="2" data_server_name="剑啸九天(京华烟云)">剑啸九天(京华烟云)</a>
                </li>
                <li>
                    <a href="#" id="server_el_2" class="" data_area_name="凌云之志" data_serverid="3" data_server_name="醉忆江南(倚天剑)">醉忆江南(倚天剑)</a>
                </li>`;   
    let html6 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="群雄逐鹿" data_serverid="1" data_server_name="龙虎争雄(天衣无缝)">龙虎争雄(天衣无缝)</a>
                </li>`;      
    let html7 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="天下大势" data_serverid="1" data_server_name="四海承风(有凤来仪)">四海承风(有凤来仪)</a>
                </li>
                <li>
                    <a href="#" id="server_el_1" class="" data_area_name="天下大势" data_serverid="2" data_server_name="长夜未央(千秋一梦)">长夜未央(千秋一梦)</a>
                </li>
                <li>
                    <a href="#" id="server_el_2" class="" data_area_name="天下大势" data_serverid="3" data_server_name="千秋万世(八方来朝)">千秋万世(八方来朝)</a>
                </li>
                <li>
                    <a href="#" id="server_el_3" class="" data_area_name="天下大势" data_serverid="4" data_server_name="守望相助(共克时艰)">守望相助(共克时艰)</a>
                </li>
                <li>
                    <a href="#" id="server_el_4" class="" data_area_name="天下大势" data_serverid="5" data_server_name="紫气东来(同心协力)">紫气东来(同心协力)</a>
                </li>`;  
    let html8 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="演武九州" data_serverid="1" data_server_name="武动苍穹(逆转乾坤)">武动苍穹(逆转乾坤)</a>
                </li>
                <li>
                    <a href="#" id="server_el_1" class="" data_area_name="演武九州" data_serverid="2" data_server_name="刀破轻云(名震天下)">刀破轻云(名震天下)</a>
                </li>
                <li>
                    <a href="#" id="server_el_2" class="" data_area_name="演武九州" data_serverid="3" data_server_name="登峰造极(山呼海啸)">登峰造极(山呼海啸)</a>
                </li>
                <li>
                    <a href="#" id="server_el_3" class="" data_area_name="演武九州" data_serverid="4" data_server_name="巧变制敌">巧变制敌</a>
                </li>
                <li>
                    <a href="#" id="server_el_4" class="" data_area_name="演武九州" data_serverid="5" data_server_name="与子同袍(生死之地)">与子同袍(生死之地)</a>
                </li>
                <li>
                    <a href="#" id="server_el_5" class="" data_area_name="演武九州" data_serverid="6" data_server_name="不动如山">不动如山</a>
                </li>
                <li>
                    <a href="#" id="server_el_6" class="" data_area_name="演武九州" data_serverid="7" data_server_name="攻其无备(百战不殆)">攻其无备(百战不殆)</a>
                </li>`;
    let html9 = `<li>
                    <a href="#" id="server_el_0" class="" data_area_name="千军万阵" data_serverid="1" data_server_name="万阵战烈">万阵战烈</a>
                </li>
                <li>
                    <a href="#" id="server_el_1" class="" data_area_name="千军万阵" data_serverid="2" data_server_name="九州名扬">九州名扬</a>
                </li>
                <li>
                    <a href="#" id="server_el_2" class="" data_area_name="千军万阵" data_serverid="3" data_server_name="虎虎生威">虎虎生威</a>
                </li>
                <li>
                    <a href="#" id="server_el_3" class="" data_area_name="千军万阵" data_serverid="4" data_server_name="一骑绝尘">一骑绝尘</a>
                </li>
                <li>
                    <a href="#" id="server_el_4" class="" data_area_name="千军万阵" data_serverid="5" data_server_name="器宇轩昂">器宇轩昂</a>
                </li>
                <li>
                    <a href="#" id="server_el_5" class="" data_area_name="千军万阵" data_serverid="6" data_server_name="击剑酣歌">击剑酣歌</a>
                </li>
                <li>
                    <a href="#" id="server_el_6" class="" data_area_name="千军万阵" data_serverid="7" data_server_name="烽烟未尽">烽烟未尽</a>
                </li>
                <li>
                    <a href="#" id="server_el_7" class="" data_area_name="千军万阵" data_serverid="8" data_server_name="刹那生灭">刹那生灭</a>
                </li>
                <li>
                    <a href="#" id="server_el_8" class="" data_area_name="千军万阵" data_serverid="9" data_server_name="烈火永生">烈火永生</a>
                </li>
                <li>
                    <a href="#" id="server_el_9" class="" data_area_name="千军万阵" data_serverid="10" data_server_name="无间无我">无间无我</a>
                </li>`;

    arealista[index].className = "on";
    for(let i=0; i<arealista.length; i++){
        
        arealista[i].onclick = ()=>{
            index = i;
            for(let j=0; j<arealista.length; j++){
                arealista[j].className = "";
            }
            arealista[index].className = "on";

            switch(index){
                case 0:
                    server_list_panel.innerHTML = html1;
                break;
                case 1:
                    server_list_panel.innerHTML = html2;
                break;
                case 2:
                    server_list_panel.innerHTML = html3;
                break;
                case 3:
                    server_list_panel.innerHTML = html4;
                break;
                case 4:
                    server_list_panel.innerHTML = html5;
                break;
                case 5:
                    server_list_panel.innerHTML = html6;
                break;
                case 6:
                    server_list_panel.innerHTML = html7;
                break;
                case 7:
                    server_list_panel.innerHTML = html8;
                break;
                case 8:
                    server_list_panel.innerHTML = html9;
                break;
            }

        }

    }
    
 }
 changeArea();