/* 
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: �d�����̲�衣
 * ����ʱ��: 2015/2/10
 */
importPackage(net.sf.odinms.client);
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -5) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb = "��ӭ����#r�̲�ð�յ�#k���������ǵ�ȯ�һ���!����Ҫ��æ����?\r\n";
            gsjb += "#r�õ�ȯ���ɼ����֮ǰ������ı��������������Ƿ��п�λ#k\r\n";
            gsjb += "#L3##b#z4001126#�һ����#r[Hot]          #b���� - (#r1 = 1#b)#l\r\n";
            gsjb += "#L1##b#z4000463#�һ����         #b���� - (#r1 = 500#b)#l#l\r\n";
            gsjb += "#L0##b����һ�#z4000463#         #b���� - (#r500 = 1#b)#l#l\r\n";
            gsjb += "#L4##b#z4031549#�һ����#g[New]  #b���� - (#r1 = 1500#b)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(0) / 500 == 0) {
                    cm.sendNext("�����ʻ���������޷��һ��������ҡ�");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#r���#k�һ�#b#z4000463##k������:\r\n#b���� - (#r500 = 1#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) / 500);

                }

            
            } else if (selection == 1) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("�����ʻ�#z4000463#��������һ������");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("������#b#z4000463##k�һ�#r���#k������:\r\n#b���� - (#r1 = 500#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + "    \r\n", 1, 1, iter.next().getQuantity());

                }
            } else if (selection == 3) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("�����ʻ�#z4001126#��������һ������");
                    status = -1;
                } else {
                    beauty = 3;
                    cm.sendGetNumber("������#b#z4001126##k�һ�#r���#k������:\r\n#b���� - (#r1= 1#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + "   \r\n", 1, 1, iter.next().getQuantity());

                }
 	   } else if (selection == 4) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4031549).iterator();
                if (cm.haveItem(4031549) == 0) {
                    cm.sendNext("�����ʻ�#z4031549#��������һ������");
                    status = -1;
                } else {
                    beauty = 4;
                    cm.sendGetNumber("������#b#z4031549##k�һ�#r���#k������:\r\n#b���� - (#r1 = 1500#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + "    \r\n", 1, 1, iter.next().getQuantity());

                }
            }


        } else if (status == 2) {
            if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("����Ķһ����ִ���");
                    cm.dispose();
                /*
                } else if (selection >= 200) {
                    sl = (selection / 200) + 1;
                } else {
                    sl = 3;
                }

                //if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
                if (cm.getSpace(4) < sl) {
                    cm.sendOk("��ı������������ռ䲻��!��������" + sl + "���ռ�����.\r\n��������г���С���Ļ�����λ!\r\n�磺����<������7.5���ռ�����>��ô������Ҫ��8���ռ�!");
                    cm.dispose();
*/
                } else if (cm.getPlayer().getCSPoints(0) >= selection * 500) {
                    cm.gainNX(-selection * 500);
                    cm.gainItem(4000463, selection);
                    cm.sendOk("���ɹ��� #r " + (selection * 500) + " #k��� �һ��� ��������#v4000463# x #r" + selection + " #k")
                } else {
                    cm.sendNext("�һ�" + selection + "��#z4000463##v4000463# ��Ҫ#r " + (selection * 500) + "#k�������û���㹻�ĵ����");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000463, selection)) {
                    cm.gainItem(4000463, -selection);
                    cm.gainNX(+500 * selection);
                    cm.sendOk("���ɹ���#z4000463##v4000463# x #r" + selection + " #k��Ϊ#r " + (500 * selection) + " #k�����");
                } else {
                    cm.sendNext("������������������޷��һ������");
                    cm.dispose();
                }

            } else if (beauty == 3) {
                if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
                    cm.gainNX(+1*selection);
                    cm.sendOk("���ɹ���#z4001126##v4001126# x #r" + selection + " #k��Ϊ#r " + (1*selection) + " #k�����");
                } else {
                    cm.sendNext("������������������޷��һ������");
                    cm.dispose();
                }
} else if (beauty == 4) {
                if (cm.haveItem(4031549, selection)) {
                    cm.gainItem(4031549, -selection);
                    cm.gainNX(+1500 * selection);
                    cm.sendOk("���ɹ���#z4031549##v4031549# x #r" + selection + " #k��Ϊ#r " + (1500 * selection) + " #k�����");
                } else {
                    cm.sendNext("������������������޷��һ������");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}