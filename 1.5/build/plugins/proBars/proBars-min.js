/*!build time : 2013-09-24 6:44:50 PM*/
KISSY.add("gallery/uploader/1.5/plugins/proBars/proBars",function(a,b,c,d){function e(a){var b=this;e.superclass.constructor.call(b,a)}var f=b.all,g="J_ProgressBar_";return a.mix(e,{event:{RENDER:"render"}}),a.extend(e,c,{pluginInitializer:function(a){if(!a)return!1;var b=this;a.on("start",function(a){b.add(a.file.id)}),a.on("progress",b._uploaderProgressHandler,b),a.on("success",b._uploaderSuccessHandler,b),b.fire(e.event.RENDER)},_uploaderProgressHandler:function(a){var b=this,c=a.file,d=c.id,e=a.loaded,f=a.total,g=Math.ceil(100*(e/f)),h=b.get("bars")[d];h&&h.set("value",g)},_uploaderSuccessHandler:function(b){var c=this,d=b.file,e=d.id,h=c.get("bars")[e],i=c.get("isHide");h&&h.set("value",100),i&&a.later(function(){var a=f("."+g+b.file.id);a.hide()},500)},add:function(b){if(!a.isString(b))return!1;var c=this,e=f("."+g+b),h=f(".J_ProgressCount_"+b),i=c.get("speed"),j=new d(e,{width:c.get("width"),speed:i});h.length&&j.on("change",function(a){h.text(a.value+"%")}),j.render();var k=c.get("bars");return k[b]=j}},{ATTRS:{pluginId:{value:"proBars"},bars:{value:{}},width:{value:"auto"},isHide:{value:!0},speed:{value:.2}}}),e},{requires:["node","base","gallery/gallery/uploader/1.5/plugins/proBars/progressBar"]});