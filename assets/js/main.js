window.replace_obj = {
    name: "Luke",
    power: "force"
};


window.mustacheSample = (function (replace_obj) {
    var self = {};
    var target = document.getElementById('target-mustache');

    self.load = function () {
        //Grab the inline template
        var template = document.getElementById('sample-mustache.html').innerHTML;

        //Parse it (optional, only necessary if template is to be used again)
        Mustache.parse(template);

        //Render the data into the template
        var rendered = Mustache.render(template, replace_obj);

        //Overwrite the contents of #target with the rendered HTML
        target.innerHTML = rendered;
    };

    return self;
})(window.replace_obj);

window.handlebarsSample = (function (replace_obj) {
    var self = {};
    var target = document.getElementById('target-handlebars');

    self.load = function () {
        //Grab the inline template
        var template = document.getElementById('sample-handlebars.html').innerHTML;

        //Compile the template
        var compiled_template = Handlebars.compile(template);

        //Render the data into the template
        var rendered = compiled_template(replace_obj);

        //Overwrite the contents of #target with the renderer HTML
        target.innerHTML = rendered;
    };

    return self;
})(window.replace_obj);

window.jqueryTplSampe = (function (replace_obj) {
    var self = {};

    self.load = function () {
        //Call .loadTemplate() on the target container
        $('#target-jquery-tpl').loadTemplate(
            //Specify the template container (or file name of external template)
            $('#sample-jquery-tpl'),

            //Specify the data to render
            replace_obj
        );
    };

    return self;
})(window.replace_obj);

window.templateSample = (function (replace_obj) {
    var self = {};
    var target = document.getElementById('target-template');

    self.load = function () {
        var template = $('#sample-template');
        var rendered = template.html()
            .replace(new RegExp('{{name}}', 'g'), replace_obj.name)
            .replace(new RegExp('{{power}}', 'g'), replace_obj.power);

        target.innerHTML = rendered;
    };

    return self;
})(window.replace_obj);

window.appendSample = (function (replace_obj) {
    var self = {};
    var target = document.getElementById('target-append');

    self.load = function () {
        var template = $('#sample-template');
        var rendered = '<p>Use the <strong>' + replace_obj.power
            + '</strong>, ' + replace_obj.name + '!</p>';

        target.innerHTML = rendered;
    };

    return self;
})(window.replace_obj);




$(function () {
    mustacheSample.load();
    handlebarsSample.load();
    jqueryTplSampe.load();
    templateSample.load();
    appendSample.load();
});