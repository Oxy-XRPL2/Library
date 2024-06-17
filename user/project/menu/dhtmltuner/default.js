//Apycom.com DHTML-Tuner StyleNames
//ItemStyles
//Java Style
//Java Items Style
//Contacts
//End of ItemStyles
//SmStyles
//JavaScript Submenu
//Submenu Style
//End of SmStyles
//End of StyleNames

var blankImage="img/blank.gif";
var isHorizontal=0;
var menuWidth="0";
var absolutePos=1;
var posX=20;
var posY=10;
var floatable=0;
var floatIterations=5;
var movable=1;
var moveCursor="move";
var moveImage="img/movepic4.gif";
var moveWidth=12;
var moveHeight=18;
var fontStyle="normal 8pt Tahoma";
var fontColor=["#000000","#0000FF"];
var fontDecoration=["none","underline"];
var itemBackColor=["#E2EEFF","#FFFFFF"];
var itemBorderWidth=1;
var itemAlign="left";
var itemBorderColor=["#C0E0FF","#80A0FF"];
var itemBorderStyle=["solid","solid"];
var itemBackImage=["",""];
var itemSpacing=1;
var itemPadding=3;
var itemCursor="hand";
var itemTarget="_blank";
var iconTopWidth=16;
var iconTopHeight=16;
var iconWidth=16;
var iconHeight=16;
var menuBackImage="";
var menuBackColor="#FFFFFF";
var menuBorderColor="";
var menuBorderStyle=["solid"];
var menuBorderWidth=0;
var subMenuAlign="left";
var transparency=100;
var transition=6;
var transDuration=300;
var shadowColor="#FFFFFF";
var shadowLen=0;
var arrowImageMain=["img/arrow_r.gif","img/arrow_r.gif"];
var arrowImageSub=["img/arrow_r.gif","img/arrow_r.gif"];
var arrowWidth=7;
var arrowHeight=7;
var separatorImage="img/separ1.gif";
var separatorWidth="100%";
var separatorHeight="5";
var separatorAlignment="center";
var separatorVImage="img/separv1.gif";
var separatorVWidth="5";
var separatorVHeight="100%";
var statusString="text";
var pressedItem=-2;

var itemStyles = [
   ["fontStyle=bold 8pt Tahoma","fontColor=#000000,#FFFFFF","fontDecoration=none,none","itemBackColor=#CCFDCE,#52ED45","itemBorderColor=#8DDA74,#8DDA74","itemBorderWidth=2","itemBorderStyle=outset,inset",],
   ["fontColor=#000000,#000000","fontDecoration=none,none","itemBackColor=#CCFDCE,#52ED45","itemBorderColor=#28F717,#F9FFF9","itemBorderWidth=2","itemBorderStyle=outset,solid",],
   ["fontColor=#000000,#000000","fontDecoration=none,none","itemBackColor=#BDDAFD,#FFFFFF","itemBorderColor=#569FFA,#569FFA",],
];

var menuStyles = [
   ["menuBackColor=#A9F99B","menuBorderWidth=1","menuBorderStyle=dotted",],
   ["menuBorderColor=#6AA6FF","menuBorderWidth=2","menuBorderStyle=dotted",],
];

var menuItems = [
   ["Home","testlink.html","img/new1-05.gif","img/new1-05.gif","Home Tip","_blank",,],
   ["Our Products","testlink.html","img/new1-08.gif","img/new1-08.gif","Our Products Tip",,,],
   ["|Product 1","testlink.html","img/b011.gif","img/b01.gif","Product 1 Tip",,,],
   ["|Product 2","testlink.html","img/b011.gif","img/b01.gif","Product 2 Tip",,,],
   ["||Description","testlink.html","img/b061.gif","img/b06.gif","",,,"1"],
   ["||Setup","testlink.html","img/b061.gif","img/b06.gif","",,,],
   ["|||Parameters","testlink.html","img/b021.gif","img/b02.gif","",,,],
   ["|||Tutorial","testlink.html","img/b021.gif","img/b02.gif","",,,],
   ["||Help","testlink.html","img/b061.gif","img/b06.gif","",,,],
   ["|Product 3","testlink.html","img/b011.gif","img/b01.gif","Product 3 Tip",,,],
   ["|Product 4","testlink.html","img/b011.gif","img/b01.gif","Product 4 Tip",,,],
   ["|Product 5","testlink.html","img/b011.gif","img/b01.gif","Product 5 Tip",,,],
   ["||Description","testlink.html","img/b061.gif","img/b06.gif","",,,],
   ["||How to Setup","testlink.html","img/b061.gif","img/b06.gif","",,,],
   ["|||Parameters","testlink.html","img/b021.gif","img/b02.gif","",,,],
   ["|||Tutorial","testlink.html","img/b021.gif","img/b02.gif","",,,],
   ["||Help","testlink.html","img/b061.gif","img/b06.gif","",,,],
   ["|Product 6","testlink.html","img/b011.gif","img/b01.gif","Product 6 Tip",,,],
   ["Javascript calls","","img/new4-038.gif","","",,"0",],
   ["|Click to call<br>message box","javascript:alert('Hello world!')","img/b09.gif","img/b092.gif","",,"1","0"],
   ["|Click to call<br>confirmation<br>dialog","javascript:confirm('Do you want to confirm?')","img/b09.gif","img/b092.gif","",,"1",],
   ["|Open 'Testlink'<br>page in 680x600<br>window","javascript:open('testlink.html','_blank','scrollbars,width=680,height=600')","img/b09.gif","img/b092.gif","",,"1",],
   ["Contact Us","mailto:support@apycom.com","img/new4-098.gif","img/new4-098.gif","Contact Us Tip",,"2",],
];

apy_init();
