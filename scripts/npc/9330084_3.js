function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d钻石股东奖励领取处：\r\n奖励包含：\r\n#v1112246#全属性+15.攻/魔+15.HP/MP+500.#l\r\n#v1112139#全属性+15.攻/魔+15.HP/MP+500.#l\r\n\r\n#l"//3
            text += "#L1##r兑换3000元累计奖励#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4031685,1)){
				cm.gainItem(4031685, -1);
				//cm.gainItem(1142742,50,50,50,50,2000,2000,50,55,200,200,50,50,15,15);
				cm.gainItem(1112138,15,15,15,15,500,500,15,15,0,0,0,0,0,0);
				cm.gainItem(1112245,15,15,15,15,500,500,15,15,0,0,0,0,0,0);
                                //cm.gainNX(+600000);
				//cm.gainMeso(100000);
            cm.sendOk("兑换成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取【世纪3000元消费累计奖励】.感谢您的鼎立支持！！！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
		}
    }
}


