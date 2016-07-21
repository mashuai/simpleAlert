"use strict"
var simpleAlert = (function(){
    var confirm = function(options){
        var that = this;
        that.options = {}
        that.default = {
            okValue: 'OK',
            cancelValue: 'Cancel',
            title: "default title",
            content: 'default content',
            ok: function(event){console.log('click ok')},
            cancel: function(event){console.log('click cancel')},
            context: document.body,
            addShade: true
        };
        that.options = Object.assign({}, that.default, options);
        var ok = document.createElement("button");
        ok.classList.add("simple-alert-button");
        ok.classList.add("simple-alert-ok");
        ok.innerText = that.options.okValue;
        ok.addEventListener('click', function(event){
            that.options.ok(event);
            that.options.context.removeChild(alertContainer);
        });
        var cancel = document.createElement("button");
        cancel.classList.add("simple-alert-button");
        cancel.classList.add("simple-alert-cancel");
        cancel.innerText = that.options.cancelValue;
        cancel.addEventListener('click', function(event){
            that.options.cancel(event);
            that.options.context.removeChild(alertContainer);
        });
        var buttons = document.createElement("div");
        buttons.classList.add("simple-alert-buttons");
        buttons.appendChild(cancel);
        buttons.appendChild(ok);
        var title = document.createElement("div");
        title.classList.add("simple-alert-title");
        title.innerText = that.options.title;
        var content = document.createElement("div");
        content.classList.add("simple-alert-content");
        content.innerText = that.options.content;
        var alert = document.createElement("div");
        alert.classList.add("simple-alert-alert");
        alert.appendChild(title);
        alert.appendChild(content);
        alert.appendChild(buttons);
        var alertContainer = document.createElement("div");
        alertContainer.classList.add("simple-alert-alert-container");
        if(that.options.addShade){
            var shadeDiv = document.createElement("div");
            shadeDiv.classList.add("simple-alert-shadeDiv");
            alertContainer.appendChild(shadeDiv);
        }
        alertContainer.appendChild(alert);
        that.options.context.insertBefore(alertContainer, that.options.context.firstChild);
    };
    var alert = function(options){
        var that = this;
        that.options = {}
        that.default = {
            okValue: "Ok",
            content: 'default content',
            context: document.body,
            addShade: true
        };
        that.options = Object.assign({}, that.default, options);
        var ok = document.createElement("button");
        ok.classList.add("simple-alert-button");
        ok.classList.add("simple-alert-ok");
        ok.innerText = that.options.okValue;
        ok.addEventListener('click', function(event){
            that.options.context.removeChild(alertContainer);
        });
        var buttons = document.createElement("div");
        buttons.classList.add("simple-alert-buttons");
        buttons.classList.add("simple-alert-buttons-alert");
        buttons.appendChild(ok);
        var content = document.createElement("div");
        content.classList.add("simple-alert-content");
        content.classList.add("simple-alert-content-alert");
        content.innerText = that.options.content;
        var alert = document.createElement("div");
        alert.classList.add("simple-alert-alert");
        alert.appendChild(content);
        alert.appendChild(buttons);
        var alertContainer = document.createElement("div");
        alertContainer.classList.add("simple-alert-alert-container");
        if(that.options.addShade){
            var shadeDiv = document.createElement("div");
            shadeDiv.classList.add("simple-alert-shadeDiv");
            alertContainer.appendChild(shadeDiv);
        }
        alertContainer.appendChild(alert);
        that.options.context.insertBefore(alertContainer, that.options.context.firstChild);
    };
    var prompt = function(options){
        var that = this;
        that.options = {}
        that.default = {
            okValue: 'OK',
            cancelValue: 'Cancel',
            title: "default title",
            defaultValue: "please input anything",
            ok: function(event){console.log('click ok')},
            cancel: function(event){console.log('click cancel')},
            context: document.body,
            addShade: true
        };
        that.options = Object.assign({}, that.default, options);
        var ok = document.createElement("button");
        ok.classList.add("simple-alert-button");
        ok.classList.add("simple-alert-ok");
        ok.innerText = that.options.okValue;
        ok.addEventListener('click', function(event){
            event.promptVlaue = input.value;
            that.options.ok(event);
            that.options.context.removeChild(alertContainer);
        });
        var cancel = document.createElement("button");
        cancel.classList.add("simple-alert-button");
        cancel.classList.add("simple-alert-cancel");
        cancel.innerText = that.options.cancelValue;
        cancel.addEventListener('click', function(event){
            that.options.cancel(event);
            that.options.context.removeChild(alertContainer);
        });
        var buttons = document.createElement("div");
        buttons.classList.add("simple-alert-buttons");
        buttons.appendChild(cancel);
        buttons.appendChild(ok);
        var title = document.createElement("div");
        title.classList.add("simple-alert-title");
        title.innerText = that.options.title;
        var content = document.createElement("div");
        content.classList.add("simple-alert-content");
        var input = document.createElement('input');
        input.classList.add("simple-alert-prompt");
        input.placeholder = that.options.defaultValue;
        content.appendChild(input);
        var alert = document.createElement("div");
        alert.classList.add("simple-alert-alert");
        alert.appendChild(title);
        alert.appendChild(content);
        alert.appendChild(buttons);
        var alertContainer = document.createElement("div");
        alertContainer.classList.add("simple-alert-alert-container");
        if(that.options.addShade){
            var shadeDiv = document.createElement("div");
            shadeDiv.classList.add("simple-alert-shadeDiv");
            alertContainer.appendChild(shadeDiv);
        }
        alertContainer.appendChild(alert);
        that.options.context.insertBefore(alertContainer, that.options.context.firstChild);
    };
    return {
        confirm: confirm,
        alert: alert,
        prompt: prompt,
    }
})();