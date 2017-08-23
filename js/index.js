
window.onload = function() {
	//文字左右滚动函数
	rolling();              
	//导航条2号下拉菜单小横线添加
	divider();
	//底部表单链接
	gohref();
}

//文字左右滚动函数
function rolling() {
	//获取container本身宽度
	var conWidth = $("#con-rolling").width();
	//获取文字span宽度   number类型
	var spanWidth = $("#rolling").width();
	//container - span 宽度             489此时正好在container右侧
	var width = conWidth - spanWidth;
	//设置文字span的起始位置
	$("#rolling").css("padding-left",width + "px");
	var roll = setInterval(function(){
		//通过改变padding-left的边距进行移动
		width--;
	    $("#rolling").css("padding-left",width + "px");
	    //当文字移动到头，即padding-left = 0的时候
	    if(width == 0) {
	    	$("#rolling").css("padding-left",(conWidth - spanWidth) + "px");
	    	rolling();
	    }
	},50);
}

//导航条2号下拉菜单小横线添加
//由于一个设备的宽度是固定的，所以当他打开这个页面的时候判断一次其分辨率宽度即可
function divider() {
	//此方法无法给第二个li添加divider类
//	//获取要添加小横线的li
//	var divider = document.getElementsByClassName("divider-js");
//	//如果页面的宽度小于768px，就添加divider类。否则不添加
//	//isIE&&!window.XMLHttpRequest判断是不是ie6,如果是则在标准模式有效，混杂模式用document.body.clientWidth
//	if(document.documentElement.clientWidth < 768) {
//		for(var i = 0; i < divider.length; i++) {
//			divider[i].className = "divider";
//		}
//	}else {
//		for(var i = 0; i < divider.length; i++) {
//			divider[i].className = "";
//		}
//	}
    //获取要添加小横线的li
    var divider1 = document.getElementById("divider-1");
    var divider2 = document.getElementById("divider-2");
    //如果页面的宽度小于768px，就添加divider类。否则不添加
	//isIE&&!window.XMLHttpRequest判断是不是ie6,如果是则在标准模式有效，混杂模式用document.body.clientWidth
	if(document.documentElement.clientWidth < 768) {
			divider1.className = "divider";
			divider2.className = "divider";
	}else {
			divider1.className = "";
			divider1.className = "";
	}
}

//底部表单链接
function gohref() {
	//获取所有select的id对象
	var gohrefs = document.querySelectorAll(".gohref");
	//遍历所有选择的select对象
	for(var i = 0; i < gohrefs.length; i++) {
		//某个select对象的状态改变后触发事件
		gohrefs[i].onchange = (function(index) {
			return function() {
				//获取value打开链接
//				alert(gohrefs[index].options[gohrefs[index].selectedIndex].value);
			    window.open(gohrefs[index].options[gohrefs[index].selectedIndex].value);
			}
		})(i);
	}

//  //第一个select
//  var gohref1 = document.querySelector("#gohref1");
//  gohref1.onchange = function() {
//  	window.open(gohref1.options[gohref1.selectedIndex].value);
//  }
//  //第二个select
//  var gohref2 = document.querySelector("#gohref2");
//  gohref2.onchange = function() {
//  	window.open(gohref2.options[gohref2.selectedIndex].value);
//  }
//  //第三个select
//  var gohref2 = document.querySelector("#gohref2");
//  gohref2.onchange = function() {
//  	window.open(gohref2.options[gohref2.selectedIndex].value);
//  }
}
