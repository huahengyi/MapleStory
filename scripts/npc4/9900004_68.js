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

            cm.sendOk("��л��Ĺ��٣�");
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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d��������/������x5��������x5��С��x1������װ��Ҫ��3��λ��. ����֮��ȥˮ��������[����]�� ������񼴿ɡ�#l\r\n\r\n"//3
            text += "#L1##r�������񲹸�.20������Ҷһ����ɡ�#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4000463,20)){
				cm.gainItem(4000463, -20);
				cm.gainItem(4031507, 5);//ñ��
				cm.gainItem(4031508, 5);//���㽶�׷�
				cm.gainItem(1902000, 1);//Ь��
				//cm.gainMeso(500000);
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]������520ð�յ� �������񲹸���");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
		}
    }
}

