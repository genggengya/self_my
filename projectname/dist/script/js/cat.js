var _createClass=function(){function e(i,o){for(var n=0;n<o.length;n++){var e=o[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}return function(i,o,n){return o&&e(i.prototype,o),n&&e(i,n),i}}();function _classCallCheck(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}!function(s){function i(){_classCallCheck(this,i),this.$jian=s(".num-left"),this.$add=s(".num-right"),this.$hehe=s(".car-num-box"),this.$all=s(".all"),this.$suan=s(".suan"),this.$box=s(".shop-car-box")}(new(_createClass(i,[{key:"init",value:function(){this.add(this),this.jian(this),this.inpu(),this.all()}},{key:"all",value:function(){var n=0,i=s.cookie("cookienum").split(",");s.each(i,function(i,o){n+=parseInt(o)}),this.$all.html(n)}},{key:"inpu",value:function(){var a=this;s(".car-num-box").on("input",function(){var i=s(this).parents(".goods").find(".money i").text(),o=s(this).parents(".goods").find(".car-num-box").val(),n=s(this).parents(".goods").find(".car-pic-left").find("img").attr("sid"),e=s.cookie("cookiesid").split(","),t=s.cookie("cookienum").split(","),c=parseInt(s(this).val());/^\d+$/g.test(c)?99<=c?s(this).val(99):c<=0?s(this).val(1):s(this).val(c):s(this).val(1),s(this).parents(".goods").find(".car-money i").text(i*o),parseInt(t[s.inArray(n,e)]=o),s.cookie("cookienum",t,{expires:7}),a.all()})}},{key:"add",value:function(){var c=this;this.$add.on("click",function(){var i=s(this).parents(".goods").find(".money i").text(),o=s(this).parents(".goods").find(".car-num-box").val(),n=s(this).parents(".goods").find(".car-pic-left").find("img").attr("sid"),e=s.cookie("cookiesid").split(","),t=s.cookie("cookienum").split(",");o<99?o++:o=99,s(this).parents(".goods").find(".car-num-box").val(o),s(this).parents(".goods").find(".car-money i").text(i*o),parseInt(t[s.inArray(n,e)]=o),s.cookie("cookienum",t,{expires:7}),c.all()})}},{key:"jian",value:function(){var c=this;this.$jian.on("click",function(){var i=s(this).parents(".goods").find(".money i").text(),o=s(this).parents(".goods").find(".car-num-box").val(),n=s(this).parents(".goods").find(".car-pic-left").find("img").attr("sid"),e=s.cookie("cookiesid").split(","),t=s.cookie("cookienum").split(",");1<o?o--:o=1,s(this).parents(".goods").find(".car-num-box").val(o),s(this).parents(".goods").find(".car-money i").text(i*o),parseInt(t[s.inArray(n,e)]=o),s.cookie("cookienum",t,{expires:7}),c.all()})}}]),i)).init()}(jQuery),function(c){function i(){_classCallCheck(this,i),this.$dele=c(".dele")}(new(_createClass(i,[{key:"init",value:function(){this.cook(),this.pri(),this.$dele.on("click",function(){c(".shop-car-xuan").find("input").prop("checked")&&(c.cookie("cookienum",0,{expires:-1}),c.cookie("cookiesid",0,{expires:-1}),confirm("是否全部删除"),window.location.reload())})}},{key:"ajax",value:function(e,t){var n=this;c.ajax({url:"http://10.31.163.75:1234/projectname/php/cat/cat.php",dataTape:"json",success:function(i){var o=JSON.parse(i);c.each(o,function(i,o){if(e==o.sid){var n=c(".goods:hidden").clone(!0,!0);n.find(".car-pic-left").find("img").attr("src",o.url),n.find(".car-pic-left").find("img").attr("sid",o.sid),n.find(".title").find("a").html(o.title),n.find(".money").find("i").html(o.money),n.find(".car-money").find("i").html(o.money*t),n.find(".car-num-box").val(t),n.css({display:"block"}),c(".shop-car-box").append(n)}}),n.xuan()}})}},{key:"cook",value:function(){var o=this;if(c.cookie("cookiesid")&&c.cookie("cookienum")){var n=c.cookie("cookiesid").split(","),e=c.cookie("cookienum").split(",");c.each(n,function(i){o.ajax(n[i],e[i])})}}},{key:"xuan",value:function(){c(".shop-car-xuan input").on("change",function(){c(".goods:visible").find(":checkbox").prop("checked",c(this).prop("checked")),c(".shop-car-xuan input").prop("checked",c(this).prop("checked"))});var i=c(".shop-car-box:visible").find("input:checkbox");console.log(c(".goods:visible").find("input:checkbox").length),c(".goods input").on("change",i,function(){c(".goods:visible").find("input:checkbox").length==c(".goods:visible").find("input:checked").length?c(".shop-car-xuan input").attr("checked",!0):c(".shop-car-xuan input").attr("checked",!1)})}},{key:"pri",value:function(){c(".goods input").on("change",function(){if(c(this).prop("checked")){var i=parseInt(c(".right-nav").find(".mon").text()),o=parseInt(c(this).parents(".goods").find(".car-money").find("i").text());c(".right-nav").find(".mon").text(i+o)}})}}]),i)).init()}(jQuery),function(i){i(".goods:visible").find("input:checked")&&i(".suan").addClass("active"),i(".suan").on("click",function(){i.cookie("cookienum",0,{expires:-1}),i.cookie("cookiesid",0,{expires:-1}),confirm("是否结算"),window.location.reload()})}(jQuery),function(){var i=[],o=[];$(".goods").on("click",".car-del a",function(){$.cookie("cookiesid")&&$.cookie("cookienum")&&(i=$.cookie("cookiesid").split(","),o=$.cookie("cookienum").split(",")),confirm("你确定要删除吗？")&&$(this).first().parents(".goods").remove(),function(n,i){var e=-1;$.each(i,function(i,o){n==o&&(e=i)}),i.splice(e,1),o.splice(e,1),$.cookie("cookiesid",i.toString(),7),$.cookie("cookienum",o.toString(),7)}($(this).first().parents(".goods").find(".car-pic-left img").attr("sid"),i)})}();