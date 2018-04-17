System.register("app.html!github:systemjs/plugin-text@0.0.8.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",'<template>\n\n    <style type="text/css">\n\n        @font-face {\n            font-family: \'BLOCK\'; /*a name to be used later*/\n            src: url(\'fonts/custom_square6.ttf\'); /*URL to font*/\n        }\n        \n        #top {\n            position: absolute;\n            height: 150px;\n            left: 0px;\n            right: 0px;\n            border-bottom: 1px solid black;\n        }\n\n        #main-vp {\n            position: absolute;\n            \n            top: 150px;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n        }\n\n        code-editor {\n            position: absolute;\n\n            right: 250px;\n            left: 0px;\n            top: 0px;\n            bottom: 0px;\n\n            border-right: 1px solid #dddddd; \n        }\n\n        code-minimap {\n            position: absolute;\n\n            right: 0px;\n            width: 250px;\n            top: 0px;\n            bottom: 0px;\n        }\n\n        .styled-background { \n            background-color: rgb(255, 255, 119); /* FALLBACK */\n            background-color: rgba(255, 255, 119, 1);\n        }\n\n        .top-spacer-10px {\n            margin-top: 10px;\n        }\n\n        .top-spacer-15px {\n            margin-top: 15px;\n        }\n\n        .top-spacer-20px {\n            margin-top: 20px;\n        }\n\n        .bottom-spacer-10px {\n            margin-bottom: 10px;\n        }\n\n        .bottom-spacer-15px {\n            margin-bottom: 15px;\n        }\n\n        .bottom-spacer-20px {\n            margin-bottom: 20px;\n        }\n\n        .reset-margin-bottom {\n            margin-bottom: 0px;\n        }\n\n        .currentQuestionOptionsRadio {\n\n        }\n\n    </style>\n\n    <require from="./editor"></require>\n    <require from="./minimap"></require>\n\n    <div id="top">\n        <div class="container">\n\n            <div class="row top-spacer-20px bottom-spacer-10px" style="font-size: 18px;">\n                <div class="col-xs-10">\n                    <span innerhtml.bind="cq.text"></span>\n                </div>\n\n                <div class="col-xs-2">\n                    ${cq_index+1}/${q_count}\n                </div>\n            </div>\n\n            <div class="row" style="font-size:16px;">\n                <div class="col-xs-10">\n                    <div class="row">\n                        <div class="col-xs-6" repeat.for="option of cq.options">\n                            <div class="radio reset-margin-bottom" id="radio-${cq.id}-${option.id}">\n                                <label>\n                                    <input type="radio" name="currentQuestionOptionsRadio" change.delegate="radioChange()" checked.bind="cq.user_answer" model.bind="option.id">\n                                    <span innerhtml.bind="option.text"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="col-xs-2">\n                    <div class="btn-group btn-group-justified" role="group"">\n                        <div class="btn-group" role="group">\n                            <button type="button" class="btn btn-default" click.delegate="previous()">\n                                <i class="fa fa-arrow-left"></i>\n                            </button>\n                        </div>\n                        <div class="btn-group" role="group">\n                            <button type="button" class="btn btn-default" click.delegate="next()">\n                                <i class="fa fa-arrow-right"></i>\n                            </button>\n                        </div>\n                    </div>\n\n                    <button type="button" class="btn btn-default btn-block" click.delegate="check()">\n                        Check Answer\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id="main-vp">\n        \n        <code-editor></code-editor>\n        <code-minimap></code-minimap>\n\n    </div>\n\n</template>')}}}),System.register("questions_file1.js",[],function(a,b){"use strict";var c,d,e,f,g;return{setters:[],execute:function(){c={text:'The variable <code>value</code> (line <code>39</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"2",file:"1",options:[],user_answer:""},c.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),c.options.push({id:"2",text:"The scope of <code>collect()</code> (line <code>26</code>)"}),c.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>38</code>)"}),c.options.push({id:"4",text:"The scope of <code>if()</code> (line <code>41</code>)"}),d={text:'The variable <code>len</code> (line <code>13</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"3",file:"1",options:[],user_answer:""},d.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),d.options.push({id:"2",text:"The scope of <code>while()</code> (line <code>15</code>)"}),d.options.push({id:"3",text:"The scope of <code>append()</code> (line <code>5</code>)"}),d.options.push({id:"4",text:"The scope of <code>collect()</code> (line <code>26</code>)"}),e={text:'The variable <code>temp</code> (line <code>42</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"4",file:"1",options:[]},e.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),e.options.push({id:"2",text:"The scope of <code>if()</code> (line <code>41</code>)"}),e.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>38</code>)"}),e.options.push({id:"4",text:"The scope of <code>collect()</code> (line <code>26</code>)"}),f={text:'The variable <code>res</code> (line <code>60</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"4",file:"1",options:[]},f.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),f.options.push({id:"2",text:"The scope of <code>makeIterator()</code> (line <code>51</code>)"}),f.options.push({id:"3",text:"The scope of <code>switch()</code> (line <code>56</code>)"}),f.options.push({id:"4",text:"The scope of <code>function(val, i, arr)</code> (line <code>58</code>)"}),a("questions",g=[c,d,e,f]),a("questions",g)}}}),System.register("questions_file2.js",[],function(a,b){"use strict";var c,d,e,f,g;return{setters:[],execute:function(){c={text:'The variable <code>val</code> (line <code>39</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"3",file:"2",options:[]},c.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),c.options.push({id:"2",text:"The scope of <code>gather()</code> (line <code>26</code>)"}),c.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>38</code>)"}),c.options.push({id:"4",text:"The scope of <code>if()</code> (line <code>41</code>)"}),d={text:'The variable <code>length</code> (line <code>13</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"3",file:"2",options:[]},d.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),d.options.push({id:"2",text:"The scope of <code>while()</code> (line <code>15</code>)"}),d.options.push({id:"3",text:"The scope of <code>affix()</code> (line <code>5</code>)"}),d.options.push({id:"4",text:"The scope of <code>gather()</code> (line <code>26</code>)"}),e={text:'The variable <code>temp_value</code> (line <code>42</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"2",file:"2",options:[]},e.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),e.options.push({id:"2",text:"The scope of <code>if()</code> (line <code>41</code>)"}),e.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>38</code>)"}),e.options.push({id:"4",text:"The scope of <code>gather()</code> (line <code>26</code>)"}),f={text:'The variable <code>result</code> (line <code>60</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"4",file:"2",options:[]},f.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),f.options.push({id:"2",text:"The scope of <code>makeRepeatable()</code> (line <code>51</code>)"}),f.options.push({id:"3",text:"The scope of <code>switch()</code> (line <code>56</code>)"}),f.options.push({id:"4",text:"The scope of <code>function(val, i, arr)</code> (line <code>58</code>)"}),a("questions",g=[c,d,e,f]),a("questions",g)}}}),System.register("questions_file3.js",[],function(a,b){"use strict";var c,d,e,f,g,h;return{setters:[],execute:function(){c={text:'The variable <code>temp</code> (line <code>106</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"3",file:"3",options:[],user_answer:""},c.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),c.options.push({id:"2",text:"The scope of <code>forOwn()</code> (line <code>103</code>)"}),c.options.push({id:"3",text:"The scope of <code>function(val, key)</code> (line <code>104</code>)"}),c.options.push({id:"4",text:"The scope of <code>if()</code> (line <code>105</code>)"}),d={text:'The variable <code>ctor</code> (line <code>161</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"4",file:"3",options:[],user_answer:""},d.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),d.options.push({id:"2",text:"The scope of <code>if()</code> (line <code>160</code>)"}),d.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>164</code>)"}),d.options.push({id:"4",text:"The scope of <code>calc()</code> (line <code>145</code>)"}),e={text:'The variable <code>r</code> (line <code>74</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"3",file:"3",options:[]},e.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),e.options.push({id:"2",text:"The scope of <code>else if()</code> (line <code>72</code>)"}),e.options.push({id:"3",text:"The scope of <code>calc()</code> (line <code>62</code>)"}),e.options.push({id:"4",text:"The scope of <code>typecast()</code> (line <code>55</code>)"}),f={text:'The variable <code>res</code> (line <code>44</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"3",file:"3",options:[]},f.options.push({id:"1",text:"The scope of <code>function(aValue)</code> (line <code>43</code>)"}),f.options.push({id:"2",text:"The scope of <code>encode()</code> (line <code>33</code>)"}),f.options.push({id:"3",text:"The scope of <code>function(val, key)</code> (line <code>36</code>)"}),f.options.push({id:"4",text:"The scope of <code>if()</code> (line <code>37</code>)"}),g={text:'The variable <code>t</code> (line <code>22</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"3",file:"3",options:[]},g.options.push({id:"1",text:"The scope of <code>if()</code> (line <code>16</code>)"}),g.options.push({id:"2",text:"The scope of <code>else</code> (line <code>21</code>)"}),g.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>9</code>)"}),g.options.push({id:"4",text:"The scope of <code>decode()</code> (line <code>2</code>)"}),a("questions",h=[c,d,e,f,g]),a("questions",h)}}}),System.register("questions_file4.js",[],function(a,b){"use strict";var c,d,e,f,g,h;return{setters:[],execute:function(){c={text:'The variable <code>result</code> (line <code>106</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"4",file:"4",options:[],user_answer:""},c.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),c.options.push({id:"2",text:"The scope of <code>forOwn()</code> (line <code>103</code>)"}),c.options.push({id:"3",text:"The scope of <code>function(val, key)</code> (line <code>104</code>)"}),c.options.push({id:"4",text:"The scope of <code>if()</code> (line <code>105</code>)"}),d={text:'The variable <code>c</code> (line <code>161</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"2",file:"4",options:[],user_answer:""},d.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),d.options.push({id:"2",text:"The scope of <code>if()</code> (line <code>160</code>)"}),d.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>164</code>)"}),d.options.push({id:"4",text:"The scope of <code>calc()</code> (line <code>145</code>)"}),e={text:'The variable <code>res</code> (line <code>76</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"2",file:"4",options:[]},e.options.push({id:"1",text:"The <code>global</code> scope (line <code>1</code>)"}),e.options.push({id:"2",text:"The scope of <code>else</code> (line <code>75</code>)"}),e.options.push({id:"3",text:"The scope of <code>calc()</code> (line <code>62</code>)"}),e.options.push({id:"4",text:"The scope of <code>typecast()</code> (line <code>55</code>)"}),f={text:'The variable <code>result</code> (line <code>44</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"4",file:"4",options:[]},f.options.push({id:"1",text:"The scope of <code>function(aValue)</code> (line <code>43</code>)"}),f.options.push({id:"2",text:"The scope of <code>encode()</code> (line <code>33</code>)"}),f.options.push({id:"3",text:"The scope of <code>function(val, key)</code> (line <code>36</code>)"}),f.options.push({id:"4",text:"The scope of <code>if()</code> (line <code>37</code>)"}),g={text:'The variable <code>temp</code> (line <code>22</code>) belongs to <span id="qfitb">_________________________</span>.',answer:"1",file:"4",options:[]},g.options.push({id:"1",text:"The scope of <code>if()</code> (line <code>16</code>)"}),g.options.push({id:"2",text:"The scope of <code>else</code> (line <code>21</code>)"}),g.options.push({id:"3",text:"The scope of <code>while()</code> (line <code>9</code>)"}),g.options.push({id:"4",text:"The scope of <code>decode()</code> (line <code>2</code>)"}),a("questions",h=[c,d,e,f,g]),a("questions",h)}}}),System.register("questions.js",["./questions_file1.js","./questions_file2.js","./questions_file3.js","./questions_file4.js"],function(a,b){"use strict";function c(a){for(var b,c,d=a.length;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a}var d,e,f,g,h,i,j,k,l,j,m,n;return{setters:[function(a){d=a.questions},function(a){e=a.questions},function(a){f=a.questions},function(a){g=a.questions}],execute:function(){for(a("QUESTIONS",h=d.concat(e,f,g)),i=1,j=h,k=Array.isArray(j),l=0,j=k?j:j[Symbol.iterator]();;){if(k){if(l>=j.length)break;m=j[l++]}else{if(l=j.next(),l.done)break;m=l.value}n=m,n.id="Q"+i.toString(),n.options=c(n.options)}a("QUESTIONS",h)}}}),System.register("app.js",["aurelia-framework","./services/log","aurelia-event-aggregator","../data/experiment_code/file1.js!text","../data/experiment_code/file2.js!text","../data/experiment_code/file3.js!text","../data/experiment_code/file4.js!text","./questions.js","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j,k,l,m,n,o,p,q;return{setters:[function(a){d=a.inject,e=a.TaskQueue,f=a.BindingEngine},function(a){g=a.log},function(a){h=a.EventAggregator},function(a){i=a.default},function(a){j=a.default},function(a){k=a.default},function(a){l=a.default},function(a){m=a.QUESTIONS},function(a){n=a.default}],execute:function(){a("App",(o=d(h,e,f),q=o(p=function(){function a(b,d,e){c(this,a),this.eventAggregator=b,this.taskQueue=d,this.bindingEngine=e,this.subscriptions=[],this.cq_index=-1,this.current_file,this.files={1:i,2:j,3:k,4:l}}return a.prototype.attached=function(){var a=this;g.info("App attached"),this.q_count=m.length;var b=this.bindingEngine.propertyObserver(this,"current_answer").subscribe(function(b,c){a.correct=""});this.subscriptions.push(b),this.taskQueue.queueMicroTask(function(){a.next()})},a.prototype.detached=function(){for(var a=this.subscriptions,b=Array.isArray(a),c=0,a=b?a:a[Symbol.iterator]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{if(c=a.next(),c.done)break;d=c.value}var e=d;e.dispose()}},a.prototype.next=function(){n("#qfitb").popover("destroy"),this.cq_index++,this.cq_index>=this.q_count&&(this.cq_index=this.q_count-1),this.cq&&(n("#radio-"+this.cq.id+"-1").removeClass("alert-success"),n("#radio-"+this.cq.id+"-2").removeClass("alert-success"),n("#radio-"+this.cq.id+"-3").removeClass("alert-success"),n("#radio-"+this.cq.id+"-4").removeClass("alert-success"),n("#radio-"+this.cq.id+"-1").removeClass("alert-danger"),n("#radio-"+this.cq.id+"-2").removeClass("alert-danger"),n("#radio-"+this.cq.id+"-3").removeClass("alert-danger"),n("#radio-"+this.cq.id+"-4").removeClass("alert-danger")),this.cq=m[this.cq_index],this.cq.file!==this.current_file&&(this.current_file=this.cq.file,this.eventAggregator.publish("load_code",{data:this.files[this.current_file]})),this.taskQueue.queueMicroTask(function(){var a={content:"Please select one of the options below",trigger:"hover"};n("#qfitb").popover(a)})},a.prototype.previous=function(){this.cq_index--,this.cq_index<0&&(this.cq_index=0),this.cq=m[this.cq_index],this.cq.file!==this.current_file&&(this.current_file=this.cq.file,this.eventAggregator.publish("load_code",{data:this.files[this.current_file]})),this.taskQueue.queueMicroTask(function(){var a={content:"Please select one of the options below",trigger:"hover"};n("#qfitb").popover(a)})},a.prototype.check=function(){this.cq.user_answer===this.cq.answer?n("#radio-"+this.cq.id+"-"+this.cq.user_answer).addClass("alert-success"):n("#radio-"+this.cq.id+"-"+this.cq.user_answer).addClass("alert-danger")},a.prototype.optionMouseover=function(a){},a.prototype.optionMouseout=function(a){},a}())||p)),a("App",q)}}}),System.register("editor.js",["aurelia-framework","aurelia-event-aggregator","./services/log","d3","CodeMirror","CodeMirror/mode/javascript/javascript.js","CodeMirror/lib/codemirror.css!css","CodeMirror/addon/fold/foldcode.js","CodeMirror/addon/fold/foldgutter.js","CodeMirror/addon/fold/brace-fold.js","CodeMirror/addon/fold/foldgutter.css!css"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j,k,l,m,n;return{setters:[function(a){d=a.inject,e=a.noView,f=a.bindable},function(a){g=a.EventAggregator},function(a){h=a.log},function(a){i=a},function(a){j=a.default},function(a){},function(a){},function(a){},function(a){},function(a){},function(a){}],execute:function(){a("CodeEditorCustomElement",(k=d(Element,g),l=e(),n=k(m=l(m=function(){function a(b,d,e){c(this,a),h.info("code-editor created"),this.element=b,this.eventAggregator=d,this.subs=[],this.markers=[]}return a.prototype.attached=function(){var a=this;h.info("code-editor attached");var b=j(this.element,{mode:"javascript",lineNumbers:!0,foldGutter:!0,scrollbarStyle:"null",gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]});b.setSize("100%","100%"),b.on("change",function(b,c){h.info("codemirror change event");var d=[];b.eachLine(function(a){var c=a.lineNo(),e=b.getLineTokens(a.lineNo(c));e.row=c,d.push(e)}),a.eventAggregator.publish("draw_001",{lines:d,content:b.getValue()})}),b.on("cursorActivity",function(c){h.info("codemirror cursorActivity event");var d=b.getCursor();a.eventAggregator.publish("cursorActivity",{line:d.line,column:d.ch});var e=b.getSelection();e.trim().length>=1&&a.eventAggregator.publish("editorTextSelection",{selection:e})}),b.on("scroll",function(){var c=b.getScrollInfo(),d=b.lineAtHeight(Math.ceil(c.top),"local"),e=b.lineAtHeight(Math.ceil(c.top+c.clientHeight+20),"local");a.eventAggregator.publish("cm_editor_scroll",{info:c,start_line:d,end_line:e})});var c=this.eventAggregator.subscribe("load_code",function(c){b.setValue(c.data);var d=b.getScrollInfo(),e=b.lineAtHeight(d.top,"local"),f=b.lineAtHeight(d.top+d.clientHeight,"local");a.eventAggregator.publish("cm_editor_scroll",{info:d,start_line:e,end_line:f})}),d=this.eventAggregator.subscribe("highlight_scope",function(c){var d=c.range,e=b.markText({line:d.start.line,ch:d.start.column},{line:d.end.line,ch:d.end.column},{className:"styled-background"});a.markers.push(e)}),e=this.eventAggregator.subscribe("unhighlight_scope",function(b){for(var c=a.markers,d=Array.isArray(c),e=0,c=d?c:c[Symbol.iterator]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{if(e=c.next(),e.done)break;f=e.value}var g=f;g.clear()}a.markers=[]}),f=this.eventAggregator.subscribe("move_cursor",function(a){var c=a.line;b.scrollIntoView({line:c,ch:0}),b.focus()}),g=this.eventAggregator.subscribe("scroll_wheel_event",function(a){var c=b.getScrollInfo(),d=0,e=c.top+a.deltaY;b.scrollTo(d,e)}),k=this.eventAggregator.subscribe("trigger_change",function(){var c=[];b.eachLine(function(a){var d=a.lineNo(),e=b.getLineTokens(a.lineNo(d));e.row=d,c.push(e)}),a.eventAggregator.publish("draw_001",{lines:c,content:b.getValue()});var d=b.getCursor();a.eventAggregator.publish("cursorActivity",{line:d.line,column:d.ch});var e=b.getSelection();e.trim().length>=1&&a.eventAggregator.publish("editorTextSelection",{selection:e});var f=b.getScrollInfo(),g=b.lineAtHeight(Math.ceil(f.top),"local"),h=b.lineAtHeight(Math.ceil(f.top+f.clientHeight+20),"local");a.eventAggregator.publish("cm_editor_scroll",{info:f,start_line:g,end_line:h})}),l=this.eventAggregator.subscribe("mousemove_event",function(a){var c=b.getScrollInfo(),d=i.scaleLinear().domain([0,a.total_h]).range([0,c.height]),e=0,f=c.top+d(a.deltaY);b.scrollTo(e,f)});this.subs.push(c),this.subs.push(d),this.subs.push(e),this.subs.push(f),this.subs.push(g),this.subs.push(k),this.subs.push(l)},a.prototype.detached=function(){h.info("code-editor detached");for(var a=this.subs,b=Array.isArray(a),c=0,a=b?a:a[Symbol.iterator]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{if(c=a.next(),c.done)break;d=c.value}var e=d;e.dispose()}},a}())||m)||m)),a("CodeEditorCustomElement",n)}}}),System.register("main.js",["aurelia-framework","aurelia-logging-console","bootstrap"],function(a,b){"use strict";function c(a){a.use.standardConfiguration(),a.start().then(function(){return a.setRoot("app")})}var d,e;return a("configure",c),{setters:[function(a){d=a.LogManager},function(a){e=a.ConsoleAppender},function(a){}],execute:function(){d.addAppender(new e),d.setLevel(d.logLevel.debug)}}}),System.register("services/log.js",["aurelia-framework"],function(a,b){"use strict";var c,d;return{setters:[function(a){c=a.LogManager}],execute:function(){a("log",d=c.getLogger("insight")),a("log",d)}}}),System.register("parser.js",["esprima","escope","escodegen"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(){c(this,a)}return a.prototype.parse_ast=function(a){var b=d.parseScript(a,{loc:!0,tolerant:!0});return b},a.prototype.parse_scope=function(a){var b=e.analyze(a,{ecmaVersion:6}),c=b.acquire(a);return c},a.prototype.traverse_scope=function(a,b){var c=0,d=function a(b,d,e){b.upper?b.uuid=b.upper.uuid+"-"+e:b.uuid=e,d&&d(b,c);for(var f=0,g=b.childScopes,h=Array.isArray(g),i=0,g=h?g:g[Symbol.iterator]();;){var j;if(h){if(i>=g.length)break;j=g[i++]}else{if(i=g.next(),i.done)break;j=i.value}var k=j;c++,a(k,d,f),c--,f++}};d(a,b,0)},a.prototype.tokenize=function(a){var b={loc:!0,comment:!0},c=d.tokenize(a,b);return c},a.prototype.generate_code=function(a){var b=f.generate(a);return b},a}(),a("default",new g)}}}),System.register("minimap_helpers.js",[],function(a,b){"use strict";var c,d;return{setters:[],execute:function(){a("MINIMAP_CHAR_STYLES",c={default:{keyword:"#708",atom:"#219",number:"#164",def:"#00f",variable:"black",punctuation:"black",property:"black",operator:"black","variable-2":"#05a","variable-3":"#085",type:"#085",comment:"#a50",string:"#a11","string-2":"#f50",meta:"#555",qualifier:"#555",builtin:"#30a",bracket:"#997",tag:"#170",attribute:"#00c",hr:"#999",link:"#00c",error:"#f00",invalidchar:"#f00",character:"black",whitespace:"none"}}),a("SCOPE_STYLES",d={current:{background:"#FFFF77"},hoisting:{background:"white",border:"red"}}),a("MINIMAP_CHAR_STYLES",c),a("SCOPE_STYLES",d)}}}),System.register("minimap.js",["aurelia-framework","aurelia-event-aggregator","./services/log","./parser.js","jquery","d3","./minimap_helpers.js"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){var c=!1,d=!1;return a.line===b.start.line?a.column>b.start.column&&(c=!0):a.line>b.start.line&&(c=!0),a.line===b.end.line?a.column<b.end.column&&(d=!0):a.line<b.end.line&&(d=!0),!(!c||!d)}var e,f,g,h,i,j,k,l,m,n,o,p,q,r;return{setters:[function(a){e=a.inject,f=a.noView,g=a.bindable},function(a){h=a.EventAggregator},function(a){i=a.log},function(a){j=a.default},function(a){k=a.default},function(a){l=a},function(a){m=a.MINIMAP_CHAR_STYLES,n=a.SCOPE_STYLES}],execute:function(){a("CodeMinimapCustomElement",(o=e(Element,h),p=f(),r=o(q=p(q=function(){function a(b,d,e){c(this,a),i.info("code-minimap created"),this.element=b,this.eventAggregator=d,this.subs=[],this.local_s_marker,this.var_s_marker,this.layout_info={line_spacing:4,char_h:3,char_w:2},this.scopes=[],this.scopeTree={},this.currentScope=null,this.mousedown=!1,this.mouseDownOnViewPort=!1}return a.prototype.attached=function(){var a=this;i.info("code-minimap attached"),i.info("Inizialising SVG @ "+this.element.clientWidth+" x "+this.element.clientHeight),this.svg=l.select(this.element).append("svg").attr("width",this.element.clientWidth).attr("height",this.element.clientHeight).style("display","block").on("click",function(){a.svg_click(l.event)}).on("wheel",function(){a.svg_wheel(l.event)}).on("mousedown",function(){a.svg_mousedown(l.event)}).on("mouseup",function(){a.svg_mouseup(l.event)}).on("mousemove",function(){a.svg_mousemove(l.event)});var b=this.svg.append("g").attr("id","baseLayer").attr("transform","translate( 4, 4 )");b.append("g").attr("id","layer-1"),b.append("g").attr("id","layer-3"),b.append("g").attr("id","layer-2"),b.append("g").attr("id","layer-4").attr("pointer-events","none").append("rect").attr("id","current_viewport");var c=this.eventAggregator.subscribe("draw_001",function(b){i.info("code-minimap -- draw_001 event");var c=b.content,d=b.lines,e=a.calculate_minimap_layout(d);a.draw_minimap(e);var f=j.parse_ast(c),g=j.parse_scope(f);a.scopes=[],a.scopeTree=g,j.traverse_scope(g,function(b,c){var e=b.block.loc.start.line-1,f=b.block.loc.start.column,g=b.block.loc.end.line-1,h=b.block.loc.end.column,i={};i="global"===b.type?{start:{line:0,column:-(1/0)},end:{line:d.length-1,column:1/0}}:{start:{line:e,column:f},end:{line:g,column:h}},b.block.loc2=i,a.scopes.push(b)})}),d=this.eventAggregator.subscribe("cursorActivity",function(b){i.info("code-minimap -- cursorActivity event"),a.svg.select("#layer-3").selectAll("*").remove();var c=a.find_scope_range(b),d=a.calculate_scope_layout(c.block.loc2);a.draw_scope(d,c.block.loc2),a.currentScope=c}),e=this.eventAggregator.subscribe("editorTextSelection",function(b){i.info("code-minimap -- editorTextSelection event");var c=a.find_var_in_current_scope(a.currentScope,b.selection);if(c){var d=a.calculate_scope_layout(c);a.draw_var_scope(d,c)}else a.svg.select("#layer-3").selectAll("*").remove()}),f=this.eventAggregator.subscribe("cm_editor_scroll",function(b){var c=b.info,d=a.svg.select("#layer-1").selectAll(".line").size(),e=d*(a.layout_info.char_h+a.layout_info.line_spacing),f=l.scaleLinear().domain([0,c.height]).range([0,e]),g=e/c.height,h=c.clientHeight*g,i=a.svg.attr("width"),j=0,k=f(c.top);if(a.draw_viewport(j,k,i,h),e>c.clientHeight){f=l.scaleLinear().domain([0,c.height-c.clientHeight]).range([4,-(e-c.clientHeight)]);var m=f(c.top);a.svg.select("#baseLayer").attr("transform","translate( 4, "+m+" )")}}),g=this.eventAggregator.subscribe("change_char_h",function(b){a.layout_info.char_h=parseInt(b),a.eventAggregator.publish("trigger_change")}),h=this.eventAggregator.subscribe("change_line_h",function(b){a.layout_info.line_spacing=parseInt(b),a.eventAggregator.publish("trigger_change")}),k=this.eventAggregator.subscribe("change_char_w",function(b){a.layout_info.char_w=parseInt(b),a.eventAggregator.publish("trigger_change")});this.subs.push(c),this.subs.push(d),this.subs.push(e),this.subs.push(f),this.subs.push(g),this.subs.push(h),this.subs.push(k)},a.prototype.detached=function(){i.info("code-minimap detached");for(var a=this.subs,b=Array.isArray(a),c=0,a=b?a:a[Symbol.iterator]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{if(c=a.next(),c.done)break;d=c.value}var e=d;e.dispose()}},a.prototype.calculate_minimap_layout=function(a){for(var b=this.layout_info.line_spacing,c=this.layout_info.char_h,d=this.layout_info.char_w,e=[],f=b/2,g=a,h=Array.isArray(g),i=0,g=h?g:g[Symbol.iterator]();;){var j;if(h){if(i>=g.length)break;j=g[i++]}else{if(i=g.next(),i.done)break;j=i.value}for(var k=j,l={x:0,y:f,row:k.row,blocks:[]},m=0,n=k,o=Array.isArray(n),p=0,n=o?n:n[Symbol.iterator]();;){var q;if(o){if(p>=n.length)break;q=n[p++]}else{if(p=n.next(),p.done)break;q=p.value}var r=q,s={x:m,y:0,h:c,w:d*(r.end-r.start),type:r.type,string:r.string,start:r.start,end:r.end,row:k.row};null===r.type&&(0===r.string.trim().length?s.type="whitespace":s.type="character"),l.blocks.push(s),m+=d*(r.end-r.start)}e.push(l),f+=c+b}return e},a.prototype.draw_minimap=function(a){var b=this.svg.select("#layer-1");b.selectAll("*").remove();var c=b.selectAll("lines").data(a).enter().append("g").attr("id",function(a){return"line "+(a.row+1)}).attr("class","line").attr("transform",function(a){return"translate( "+a.x+", "+a.y+" )"});c.selectAll("blocks").data(function(a){return a.blocks}).enter().append("rect").attr("x",function(a){return a.x}).attr("y",function(a){return a.y}).attr("width",function(a){return a.w}).attr("height",function(a){return a.h}).attr("fill",function(a){return m.default[a.type]}).attr("fill-opacity",function(a){return"whitespace"==a.type?0:.65})},a.prototype.draw_scope=function(a,b){var c=this,d=this.svg.select("#layer-2");d.selectAll("*").remove();var e=l.line().x(function(a){return a.x}).y(function(a){return a.y});d.selectAll("scope").data([a]).enter().append("path").attr("d",e).attr("fill",n.current.background).attr("fill-opacity",.7).on("mouseover",function(){c.eventAggregator.publish("highlight_scope",{range:b})}).on("mouseout",function(){c.eventAggregator.publish("unhighlight_scope",{range:b})})},a.prototype.draw_var_scope=function(a,b){var c=this,d=this.svg.select("#layer-3");d.selectAll("*").remove();var e=l.line().x(function(a){return a.x}).y(function(a){return a.y});d.selectAll("scope").data([a]).enter().append("path").attr("d",e).attr("stroke",n.hoisting.border).attr("fill",n.hoisting.background).attr("fill-opacity",0).on("mouseover",function(){c.eventAggregator.publish("highlight_scope",{range:b})}).on("mouseout",function(){c.eventAggregator.publish("unhighlight_scope",{range:b})})},a.prototype.draw_viewport=function(a,b,c,d){var e=this.svg.select("#layer-4").select("#current_viewport");e.attr("x",a).attr("y",b).attr("width",c).attr("height",d).attr("fill","#94a7ba").attr("opacity","0.2")},a.prototype.find_scope_range=function(a){for(var b=null,c=this.scopes,e=Array.isArray(c),f=0,c=e?c:c[Symbol.iterator]();;){var g;if(e){if(f>=c.length)break;g=c[f++]}else{if(f=c.next(),f.done)break;g=f.value}var h=g;d(a,h.block.loc2)&&(b=h)}return b},a.prototype.calculate_scope_layout=function(a){function b(a,b){if(0===a.length){var c=b*(j+h)+h/2;return{s:{x:0,y:c},e:{x:i,y:c}}}for(var d={x:+(1/0),y:+(1/0)},e={
x:-(1/0),y:-(1/0)},f=a,g=Array.isArray(f),k=0,f=g?f:f[Symbol.iterator]();;){var l;if(g){if(k>=f.length)break;l=f[k++]}else{if(k=f.next(),k.done)break;l=k.value}var m=l,n=m.start*i,o=m.end*i,p=m.row*(j+h)+h/2;n<d.x&&(d.x=n,d.y=p),o>e.x&&(e.x=o,e.y=p)}return{s:d,e:e}}var c=[],d=this.svg.select("#layer-1").selectAll(".line"),e=d.filter(function(b){return b.row===a.start.line}),f=d.filter(function(b){return b.row>a.start.line&&b.row<a.end.line}),g=d.filter(function(b){return b.row===a.end.line}),h=this.layout_info.line_spacing,i=this.layout_info.char_w,j=this.layout_info.char_h,k=h/2,l=j+h/2,m=b(e.datum().blocks.filter(function(b){return b.start>=a.start.column}),e.datum().row);if(c.push({x:m.s.x,y:m.s.y+l}),c.push({x:m.s.x,y:m.s.y-k}),c.push({x:m.e.x,y:m.e.y-k}),c.push({x:m.e.x,y:m.e.y+l}),e.datum().row===g.datum().row)return c.push({x:m.s.x,y:m.s.y+l}),c.push({x:m.s.x,y:m.s.y-k}),c;f.each(function(a){var d=b(a.blocks,a.row);c.push({x:d.e.x,y:d.e.y-k}),c.push({x:d.e.x,y:d.e.y+l})});var n=b(g.datum().blocks.filter(function(b){return b.end<=a.end.column}),g.datum().row);return c.push({x:n.e.x,y:n.e.y-k}),c.push({x:n.e.x,y:n.e.y+l}),c.push({x:n.s.x,y:n.s.y+l}),c.push({x:n.s.x,y:n.s.y-k}),m.s.x>0?(c.push({x:n.s.x,y:m.s.y+l}),c.push({x:m.s.x,y:m.s.y+l}),c.push({x:m.s.x,y:m.s.y-k})):c.push({x:n.s.x,y:m.s.y+l}),c},a.prototype.find_var_in_current_scope=function(a,b){return function a(b,c){for(var d=b.variables,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var h=g;if(c===h.name)return b.block.loc2}if(b.upper)return a(b.upper,c)}(a,b)},a.prototype.svg_click=function(a){if(this.svg_mousedown(a))return void(this.mouseDownOnViewPort=!1);var b=(a.layerX,a.layerY),c=this.layout_info.char_h,d=this.layout_info.line_spacing,e=this.svg.select("#layer-1").selectAll(".line").size(),f=e*(c+d)-d/2;if(!(b>f)){var g=0;this.svg.select("#layer-1").selectAll(".line").each(function(a){var e=a.y,f=a.y+c+d;b>=e&&b<=f&&(g=a.row)});var h=this.svg.select("#layer-4").select("#current_viewport"),i=parseInt(h.attr("height"))/(c+d);if(b<parseInt(h.attr("y"))){var j=Math.round(g-i/2);j<0&&(j=0),this.eventAggregator.publish("move_cursor",{line:j})}else{var k=Math.round(g+i/2);k>e&&(k=e-1),this.eventAggregator.publish("move_cursor",{line:k})}}},a.prototype.svg_wheel=function(a){a.preventDefault(),a.stopPropagation(),this.eventAggregator.publish("scroll_wheel_event",{deltaX:a.deltaX,deltaY:a.deltaY})},a.prototype.svg_mousedown=function(a){this.mousedown=!0;var b=this.svg.select("#layer-4").select("#current_viewport"),c=a.layerY,d=parseInt(b.attr("y")),e=d+parseInt(b.attr("height"));if(c>=d&&c<=e)return this.mouseDownOnViewPort=!0,!0},a.prototype.svg_mouseup=function(){this.mousedown=!1,this.mouseDownOnViewPort=!1},a.prototype.svg_mousemove=function(a){if(this.mousedown&&this.mouseDownOnViewPort){var b=this.svg.select("#layer-1").selectAll(".line").size(),c=b*(this.layout_info.char_h+this.layout_info.line_spacing);this.eventAggregator.publish("mousemove_event",{total_h:c,deltaX:a.movementX,deltaY:a.movementY})}},a}())||q)||q)),a("CodeMinimapCustomElement",r)}}});