/*
 angular-file-upload v1.1.6
 https://github.com/nervgh/angular-file-upload
*/

!function(a,b){return"function"==typeof define&&define.amd?void define("angular-file-upload",["angular"],function(a){return b(a)}):b(a)}("undefined"==typeof angular?null:angular,function(a){var b=a.module("angularFileUpload",[]);return b.value("fileUploaderOptions",{url:"/",alias:"file",headers:{},queue:[],progress:0,autoUpload:!1,removeAfterUpload:!1,method:"POST",filters:[],formData:[],queueLimit:Number.MAX_VALUE,withCredentials:!1}).factory("FileUploader",["fileUploaderOptions","$rootScope","$http","$window","$compile",function(b,c,d,e,f){function g(c){var d=a.copy(b);a.extend(this,d,c,{isUploading:!1,_nextIndex:0,_failFilterIndex:-1,_directives:{select:[],drop:[],over:[]}}),this.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.filters.unshift({name:"folder",fn:this._folderFilter})}function h(b){var c=a.isElement(b),d=c?b.value:b,e=a.isString(d)?"FakePath":"Object",f="_createFrom"+e;this[f](d)}function i(b,c,d){var e=a.isElement(c),f=e?a.element(c):null,h=e?null:c;a.extend(this,{url:b.url,alias:b.alias,headers:a.copy(b.headers),formData:a.copy(b.formData),removeAfterUpload:b.removeAfterUpload,withCredentials:b.withCredentials,method:b.method},d,{uploader:b,file:new g.FileLikeObject(c),isReady:!1,isUploading:!1,isUploaded:!1,isSuccess:!1,isCancel:!1,isError:!1,progress:0,index:null,_file:h,_input:f}),f&&this._replaceNode(f)}function j(b){a.extend(this,b),this.uploader._directives[this.prop].push(this),this._saveLinks(),this.bind()}function k(a){k.super_.apply(this,arguments),this.uploader.isHTML5||this.element.removeAttr("multiple"),this.element.prop("value",null)}function l(a){l.super_.apply(this,arguments)}function m(a){m.super_.apply(this,arguments)}return g.prototype.isHTML5=!(!e.File||!e.FormData),g.prototype.addToQueue=function(b,c,d){var e=this.isArrayLikeObject(b)?b:[b],f=this._getFilters(d),h=this.queue.length,i=[];a.forEach(e,function(a){var b=new g.FileLikeObject(a);if(this._isValidFile(b,f,c)){var d=new g.FileItem(this,a,c);i.push(d),this.queue.push(d),this._onAfterAddingFile(d)}else{var e=f[this._failFilterIndex];this._onWhenAddingFileFailed(b,e,c)}},this),this.queue.length!==h&&(this._onAfterAddingAll(i),this.progress=this._getTotalProgress()),this._render(),this.autoUpload&&this.uploadAll()},g.prototype.removeFromQueue=function(a){var b=this.getIndexOfItem(a),c=this.queue[b];c.isUploading&&c.cancel(),this.queue.splice(b,1),c._destroy(),this.progress=this._getTotalProgress()},g.prototype.clearQueue=function(){for(;this.queue.length;)this.queue[0].remove();this.progress=0},g.prototype.uploadItem=function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhrTransport":"_iframeTransport";c._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[d](c))},g.prototype.cancelItem=function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhr":"_form";c&&c.isUploading&&c[d].abort()},g.prototype.uploadAll=function(){var b=this.getNotUploadedItems().filter(function(a){return!a.isUploading});b.length&&(a.forEach(b,function(a){a._prepareToUploading()}),b[0].upload())},g.prototype.cancelAll=function(){var b=this.getNotUploadedItems();a.forEach(b,function(a){a.cancel()})},g.prototype.isFile=function(a){var b=e.File;return b&&a instanceof b},g.prototype.isFileLikeObject=function(a){return a instanceof g.FileLikeObject},g.prototype.isArrayLikeObject=function(b){return a.isObject(b)&&"length"in b},g.prototype.getIndexOfItem=function(b){return a.isNumber(b)?b:this.queue.indexOf(b)},g.prototype.getNotUploadedItems=function(){return this.queue.filter(function(a){return!a.isUploaded})},g.prototype.getReadyItems=function(){return this.queue.filter(function(a){return a.isReady&&!a.isUploading}).sort(function(a,b){return a.index-b.index})},g.prototype.destroy=function(){a.forEach(this._directives,function(b){a.forEach(this._directives[b],function(a){a.destroy()},this)},this)},g.prototype.onAfterAddingAll=function(a){},g.prototype.onAfterAddingFile=function(a){},g.prototype.onWhenAddingFileFailed=function(a,b,c){},g.prototype.onBeforeUploadItem=function(a){},g.prototype.onProgressItem=function(a,b){},g.prototype.onProgressAll=function(a){},g.prototype.onSuccessItem=function(a,b,c,d){},g.prototype.onErrorItem=function(a,b,c,d){},g.prototype.onCancelItem=function(a,b,c,d){},g.prototype.onCompleteItem=function(a,b,c,d){},g.prototype.onCompleteAll=function(){},g.prototype._getTotalProgress=function(a){if(this.removeAfterUpload)return a||0;var b=this.getNotUploadedItems().length,c=b?this.queue.length-b:this.queue.length,d=100/this.queue.length,e=(a||0)*d/100;return Math.round(c*d+e)},g.prototype._getFilters=function(b){if(a.isUndefined(b))return this.filters;if(a.isArray(b))return b;var c=b.match(/[^\s,]+/g);return this.filters.filter(function(a){return-1!==c.indexOf(a.name)},this)},g.prototype._render=function(){c.$$phase||c.$apply()},g.prototype._folderFilter=function(a){return!(!a.size&&!a.type)},g.prototype._queueLimitFilter=function(){return this.queue.length<this.queueLimit},g.prototype._isValidFile=function(a,b,c){return this._failFilterIndex=-1,b.length?b.every(function(b){return this._failFilterIndex++,b.fn.call(this,a,c)},this):!0},g.prototype._isSuccessCode=function(a){return a>=200&&300>a||304===a},g.prototype._transformResponse=function(b,c){var e=this._headersGetter(c);return a.forEach(d.defaults.transformResponse,function(a){b=a(b,e)}),b},g.prototype._parseHeaders=function(b){var c,d,e,f={};return b?(a.forEach(b.split("\n"),function(a){e=a.indexOf(":"),c=a.slice(0,e).trim().toLowerCase(),d=a.slice(e+1).trim(),c&&(f[c]=f[c]?f[c]+", "+d:d)}),f):f},g.prototype._headersGetter=function(a){return function(b){return b?a[b.toLowerCase()]||null:a}},g.prototype._xhrTransport=function(b){var c=b._xhr=new XMLHttpRequest,d=new FormData,e=this;if(e._onBeforeUploadItem(b),a.forEach(b.formData,function(b){a.forEach(b,function(a,b){d.append(b,a)})}),"number"!=typeof b._file.size)throw new TypeError("The file specified is no longer valid");d.append(b.alias,b._file,b.file.name),c.upload.onprogress=function(a){var c=Math.round(a.lengthComputable?100*a.loaded/a.total:0);e._onProgressItem(b,c)},c.onload=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a),f=e._isSuccessCode(c.status)?"Success":"Error",g="_on"+f+"Item";e[g](b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.onerror=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a);e._onErrorItem(b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.onabort=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a);e._onCancelItem(b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.open(b.method,b.url,!0),c.withCredentials=b.withCredentials,a.forEach(b.headers,function(a,b){c.setRequestHeader(b,a)}),c.send(d),this._render()},g.prototype._iframeTransport=function(b){var c=a.element('<form style="display: none;" />'),d=a.element('<iframe name="iframeTransport'+Date.now()+'">'),e=b._input,f=this;b._form&&b._form.replaceWith(e),b._form=c,f._onBeforeUploadItem(b),e.prop("name",b.alias),a.forEach(b.formData,function(b){a.forEach(b,function(b,d){var e=a.element('<input type="hidden" name="'+d+'" />');e.val(b),c.append(e)})}),c.prop({action:b.url,method:"POST",target:d.prop("name"),enctype:"multipart/form-data",encoding:"multipart/form-data"}),d.bind("load",function(){try{var a=d[0].contentDocument.body.innerHTML}catch(c){}var e={response:a,status:200,dummy:!0},g={},h=f._transformResponse(e.response,g);f._onSuccessItem(b,h,e.status,g),f._onCompleteItem(b,h,e.status,g)}),c.abort=function(){var a,g={status:0,dummy:!0},h={};d.unbind("load").prop("src","javascript:false;"),c.replaceWith(e),f._onCancelItem(b,a,g.status,h),f._onCompleteItem(b,a,g.status,h)},e.after(c),c.append(e).append(d),c[0].submit(),this._render()},g.prototype._onWhenAddingFileFailed=function(a,b,c){this.onWhenAddingFileFailed(a,b,c)},g.prototype._onAfterAddingFile=function(a){this.onAfterAddingFile(a)},g.prototype._onAfterAddingAll=function(a){this.onAfterAddingAll(a)},g.prototype._onBeforeUploadItem=function(a){a._onBeforeUpload(),this.onBeforeUploadItem(a)},g.prototype._onProgressItem=function(a,b){var c=this._getTotalProgress(b);this.progress=c,a._onProgress(b),this.onProgressItem(a,b),this.onProgressAll(c),this._render()},g.prototype._onSuccessItem=function(a,b,c,d){a._onSuccess(b,c,d),this.onSuccessItem(a,b,c,d)},g.prototype._onErrorItem=function(a,b,c,d){a._onError(b,c,d),this.onErrorItem(a,b,c,d)},g.prototype._onCancelItem=function(a,b,c,d){a._onCancel(b,c,d),this.onCancelItem(a,b,c,d)},g.prototype._onCompleteItem=function(b,c,d,e){b._onComplete(c,d,e),this.onCompleteItem(b,c,d,e);var f=this.getReadyItems()[0];return this.isUploading=!1,a.isDefined(f)?void f.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),void this._render())},g.isFile=g.prototype.isFile,g.isFileLikeObject=g.prototype.isFileLikeObject,g.isArrayLikeObject=g.prototype.isArrayLikeObject,g.isHTML5=g.prototype.isHTML5,g.inherit=function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.super_=b},g.FileLikeObject=h,g.FileItem=i,g.FileDirective=j,g.FileSelect=k,g.FileDrop=l,g.FileOver=m,h.prototype._createFromFakePath=function(a){this.lastModifiedDate=null,this.size=null,this.type="like/"+a.slice(a.lastIndexOf(".")+1).toLowerCase(),this.name=a.slice(a.lastIndexOf("/")+a.lastIndexOf("\\")+2)},h.prototype._createFromObject=function(b){this.lastModifiedDate=a.copy(b.lastModifiedDate),this.size=b.size,this.type=b.type,this.name=b.name},i.prototype.upload=function(){try{this.uploader.uploadItem(this)}catch(a){this.uploader._onCompleteItem(this,"",0,[]),this.uploader._onErrorItem(this,"",0,[])}},i.prototype.cancel=function(){this.uploader.cancelItem(this)},i.prototype.remove=function(){this.uploader.removeFromQueue(this)},i.prototype.onBeforeUpload=function(){},i.prototype.onProgress=function(a){},i.prototype.onSuccess=function(a,b,c){},i.prototype.onError=function(a,b,c){},i.prototype.onCancel=function(a,b,c){},i.prototype.onComplete=function(a,b,c){},i.prototype._onBeforeUpload=function(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()},i.prototype._onProgress=function(a){this.progress=a,this.onProgress(a)},i.prototype._onSuccess=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=null,this.onSuccess(a,b,c)},i.prototype._onError=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=null,this.onError(a,b,c)},i.prototype._onCancel=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=null,this.onCancel(a,b,c)},i.prototype._onComplete=function(a,b,c){this.onComplete(a,b,c),this.removeAfterUpload&&this.remove()},i.prototype._destroy=function(){this._input&&this._input.remove(),this._form&&this._form.remove(),delete this._form,delete this._input},i.prototype._prepareToUploading=function(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0},i.prototype._replaceNode=function(a){var b=f(a.clone())(a.scope());b.prop("value",null),a.css("display","none"),a.after(b)},j.prototype.events={},j.prototype.bind=function(){for(var a in this.events){var b=this.events[a];this.element.bind(a,this[b])}},j.prototype.unbind=function(){for(var a in this.events)this.element.unbind(a,this.events[a])},j.prototype.destroy=function(){var a=this.uploader._directives[this.prop].indexOf(this);this.uploader._directives[this.prop].splice(a,1),this.unbind()},j.prototype._saveLinks=function(){for(var a in this.events){var b=this.events[a];this[b]=this[b].bind(this)}},g.inherit(k,j),k.prototype.events={$destroy:"destroy",change:"onChange"},k.prototype.prop="select",k.prototype.getOptions=function(){},k.prototype.getFilters=function(){},k.prototype.isEmptyAfterSelection=function(){return!!this.element.attr("multiple")},k.prototype.onChange=function(){var a=this.uploader.isHTML5?this.element[0].files:this.element[0],b=this.getOptions(),c=this.getFilters();this.uploader.isHTML5||this.destroy(),this.uploader.addToQueue(a,b,c),this.isEmptyAfterSelection()&&this.element.prop("value",null)},g.inherit(l,j),l.prototype.events={$destroy:"destroy",drop:"onDrop",dragover:"onDragOver",dragleave:"onDragLeave"},l.prototype.prop="drop",l.prototype.getOptions=function(){},l.prototype.getFilters=function(){},l.prototype.onDrop=function(b){var c=this._getTransfer(b);if(c){var d=this.getOptions(),e=this.getFilters();this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._removeOverClass,this),this.uploader.addToQueue(c.files,d,e)}},l.prototype.onDragOver=function(b){var c=this._getTransfer(b);this._haveFiles(c.types)&&(c.dropEffect="copy",this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._addOverClass,this))},l.prototype.onDragLeave=function(b){b.currentTarget===this.element[0]&&(this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._removeOverClass,this))},l.prototype._getTransfer=function(a){return a.dataTransfer?a.dataTransfer:a.originalEvent.dataTransfer},l.prototype._preventAndStop=function(a){a.preventDefault(),a.stopPropagation()},l.prototype._haveFiles=function(a){return a?a.indexOf?-1!==a.indexOf("Files"):a.contains?a.contains("Files"):!1:!1},l.prototype._addOverClass=function(a){a.addOverClass()},l.prototype._removeOverClass=function(a){a.removeOverClass()},g.inherit(m,j),m.prototype.events={$destroy:"destroy"},m.prototype.prop="over",m.prototype.overClass="nv-file-over",m.prototype.addOverClass=function(){this.element.addClass(this.getOverClass())},m.prototype.removeOverClass=function(){this.element.removeClass(this.getOverClass())},m.prototype.getOverClass=function(){return this.overClass},g}]).directive("nvFileSelect",["$parse","FileUploader",function(a,b){return{link:function(c,d,e){var f=c.$eval(e.uploader);if(!(f instanceof b))throw new TypeError('"Uploader" must be an instance of FileUploader');var g=new b.FileSelect({uploader:f,element:d});g.getOptions=a(e.options).bind(g,c),g.getFilters=function(){return e.filters}}}}]).directive("nvFileDrop",["$parse","FileUploader",function(a,b){return{link:function(c,d,e){var f=c.$eval(e.uploader);if(!(f instanceof b))throw new TypeError('"Uploader" must be an instance of FileUploader');if(f.isHTML5){var g=new b.FileDrop({uploader:f,element:d});g.getOptions=a(e.options).bind(g,c),g.getFilters=function(){return e.filters}}}}}]).directive("nvFileOver",["FileUploader",function(a){return{link:function(b,c,d){var e=b.$eval(d.uploader);if(!(e instanceof a))throw new TypeError('"Uploader" must be an instance of FileUploader');var f=new a.FileOver({uploader:e,element:c});f.getOverClass=function(){return d.overClass||this.overClass}}}}]),b});

(function(angular, CRM) {



  var crmApp = angular.module('crmApp', CRM.angular.modules);
  crmApp.config(['$routeProvider',
    function($routeProvider) {

      if (CRM.crmApp.defaultRoute) {
        $routeProvider.when('/', {
          template: '<div></div>',
          controller: function($location) {
            $location.path(CRM.crmApp.defaultRoute);
          }
        });
      }

      $routeProvider.otherwise({
        template: ts('Unknown path')
      });
    }
  ]);
})(angular, CRM);

(function (angular, $, _) {

  angular.module('crmAttachment', CRM.angRequires('crmAttachment'));

  angular.module('crmAttachment').factory('CrmAttachments', function (crmApi, crmStatus, FileUploader, $q) {

    function CrmAttachments(target) {
      var crmAttachments = this;
      this._target = target;
      this.files = [];
      this.trash = [];
      this.uploader = new FileUploader({
        url: CRM.url('civicrm/ajax/attachment'),
        onAfterAddingFile: function onAfterAddingFile(item) {
          item.crmData = {
            description: ''
          };
        },
        onSuccessItem: function onSuccessItem(item, response, status, headers) {
          crmAttachments.files.push(response.file.values[response.file.id]);
          crmAttachments.uploader.removeFromQueue(item);
        },
        onErrorItem: function onErrorItem(item, response, status, headers) {
          var msg = (response && response.file && response.file.error_message) ? response.file.error_message : ts('Unknown error');
          CRM.alert(item.file.name + ' - ' + msg, ts('Attachment failed'));
          crmAttachments.uploader.removeFromQueue(item);
        }
      });
    }

    angular.extend(CrmAttachments.prototype, {

      getTarget: function () {
        return (angular.isFunction(this._target) ? this._target() : this._target);
      },

      load: function load() {
        var target = this.getTarget();
        var Attachment = this;

        if (target.entity_id) {
          var params = {
            entity_table: target.entity_table,
            entity_id: target.entity_id
          };
          return crmApi('Attachment', 'get', params).then(function (apiResult) {
            Attachment.files = _.values(apiResult.values);
            return Attachment;
          });
        }
        else {
          var dfr = $q.defer();
          Attachment.files = [];
          dfr.resolve(Attachment);
          return dfr.promise;
        }
      },

      save: function save() {
        var crmAttachments = this;
        var target = this.getTarget();
        if (!target.entity_table || !target.entity_id) {
          throw "Cannot save attachments: unknown entity_table or entity_id";
        }

        var params = _.extend({}, target);
        params.values = crmAttachments.files;
        return crmApi('Attachment', 'replace', params)
          .then(function () {
            var dfr = $q.defer();

            var newItems = crmAttachments.uploader.getNotUploadedItems();
            if (newItems.length > 0) {
              _.each(newItems, function (item) {
                item.formData = [_.extend({crm_attachment_token: CRM.crmAttachment.token}, target, item.crmData)];
              });
              crmAttachments.uploader.onCompleteAll = function onCompleteAll() {
                delete crmAttachments.uploader.onCompleteAll;
                dfr.resolve(crmAttachments);
              };
              crmAttachments.uploader.uploadAll();
            }
            else {
              dfr.resolve(crmAttachments);
            }

            return dfr.promise;
          });
      },


      getAutosaveSignature: function getAutosaveSignature() {
        var sig = [];





        angular.forEach(this.files, function(item) {
          sig.push({f: item.name.replace(/[^a-zA0-Z0-9\.]/, '_'), d: item.description});
        });
        angular.forEach(this.uploader.queue, function(item) {
          sig.push({f: item.file.name.replace(/[^a-zA0-Z0-9\.]/, '_'), d: item.crmData.description});
        });
        angular.forEach(this.trash, function(item) {
          sig.push({f: item.name.replace(/[^a-zA0-Z0-9\.]/, '_'), d: item.description});
        });
        return _.sortBy(sig, 'name');
      },

      deleteFile: function deleteFile(file) {
        var crmAttachments = this;

        var idx = _.indexOf(this.files, file);
        if (idx != -1) {
          this.files.splice(idx, 1);
        }

        this.trash.push(file);

        if (file.id) {
          var p = crmApi('Attachment', 'delete', {id: file.id}).then(
            function () { // success
            },
            function (response) { // error; restore the file
              var msg = angular.isObject(response) ? response.error_message : '';
              CRM.alert(msg, ts('Deletion failed'));
              crmAttachments.files.push(file);

              var trashIdx = _.indexOf(crmAttachments.trash, file);
              if (trashIdx != -1) {
                crmAttachments.trash.splice(trashIdx, 1);
              }
            }
          );
          return crmStatus({start: ts('Deleting...'), success: ts('Deleted')}, p);
        }
      }
    });

    return CrmAttachments;
  });



  angular.module('crmAttachment').directive('crmAttachments', function ($parse, $timeout) {
    return {
      scope: {
        crmAttachments: '@'
      },
      template: '<div ng-if="ready" ng-include="inclUrl"></div>',
      link: function (scope, elm, attr) {
        var model = $parse(attr.crmAttachments);
        scope.att = model(scope.$parent);
        scope.ts = CRM.ts(null);
        scope.inclUrl = '~/crmAttachment/attachments.html';

        scope.ready = true;
      }
    };
  });

})(angular, CRM.$, CRM._);

(function(angular, $, _) {

  angular.module('crmAutosave', CRM.angRequires('crmAutosave'));















  angular.module('crmAutosave').service('CrmAutosaveCtrl', function($interval, $timeout, $q) {
    function CrmAutosaveCtrl(options) {
      var intervals = angular.extend({poll: 250, save: 5000}, options.interval);
      var jobs = {poll: null, save: null}; // job handles used ot cancel/reschedule timeouts/intervals
      var lastSeenModel = null;
      var saving = false;


      function checkChanges() {
        if (saving) {
          return;
        }
        var currentModel = _.isFunction(options.model) ? options.model() : options.model;
        if (!angular.equals(currentModel, lastSeenModel)) {
          lastSeenModel = angular.copy(currentModel);
          if (jobs.save) {
            $timeout.cancel(jobs.save);
          }
          jobs.save = $timeout(doAutosave, intervals.save);
        }
      }

      function doAutosave() {
        jobs.save = null;
        if (saving) {
          return;
        }

        var form = _.isFunction(options.form) ? options.form() : options.form;

        if (options.saveIf) {
          if (!options.saveIf()) {
            return;
          }
        }
        else if (form && form.$invalid) {
          return;
        }

        saving = true;
        lastSeenModel = angular.copy(_.isFunction(options.model) ? options.model() : options.model);



        if (form) {
          form.$setPristine();
        }
        var res = options.save();
        if (res && res.then) {
          res.then(
            function() {
              saving = false;
            },
            function() {
              saving = false;
              if (form) {
                form.$setDirty();
              }
            }
          );
        }
        else {
          saving = false;
        }
      }

      var self = this;

      this.start = function() {
        if (!jobs.poll) {
          lastSeenModel = angular.copy(_.isFunction(options.model) ? options.model() : options.model);
          jobs.poll = $interval(checkChanges, intervals.poll);
        }
      };

      this.stop = function() {
        if (jobs.poll) {
          $interval.cancel(jobs.poll);
          jobs.poll = null;
        }
        if (jobs.save) {
          $timeout.cancel(jobs.save);
          jobs.save = null;
        }
      };

      this.suspend = function(p) {
        self.stop();
        return p.finally(self.start);
      };
    }

    return CrmAutosaveCtrl;
  });




  var crmCaseType = angular.module('crmCaseType', CRM.angRequires('crmCaseType'));

  var newCaseTypeTemplate = {
    title: "",
    name: "",
    is_active: "1",
    weight: "1",
    definition: {
      activityTypes: [
        {name: 'Open Case', max_instances: 1},
        {name: 'Email'},
        {name: 'Follow up'},
        {name: 'Meeting'},
        {name: 'Phone Call'}
      ],
      activitySets: [
        {
          name: 'standard_timeline',
          label: 'Standard Timeline',
          timeline: '1', // Angular won't bind checkbox correctly with numeric 1
          activityTypes: [
            {name: 'Open Case', status: 'Completed' }
          ]
        }
      ],
      caseRoles: [
        { name: 'Case Coordinator', creator: '1', manager: '1'}
      ]
    }
  };

  crmCaseType.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/caseType', {
        templateUrl: '~/crmCaseType/list.html',
        controller: 'CaseTypeListCtrl',
        resolve: {
          caseTypes: function($route, crmApi) {
            return crmApi('CaseType', 'get', {options: {limit: 0}});
          }
        }
      });
      $routeProvider.when('/caseType/:id', {
        templateUrl: '~/crmCaseType/edit.html',
        controller: 'CaseTypeCtrl',
        resolve: {
          apiCalls: function($route, crmApi) {
            var reqs = {};
            reqs.actStatuses = ['OptionValue', 'get', {
              option_group_id: 'activity_status',
              sequential: 1,
              options: {limit: 0}
            }];
            reqs.caseStatuses = ['OptionValue', 'get', {
              option_group_id: 'case_status',
              sequential: 1,
              options: {limit: 0}
            }];
            reqs.actTypes = ['OptionValue', 'get', {
              option_group_id: 'activity_type',
              sequential: 1,
              options: {
                sort: 'name',
                limit: 0
              }
            }];
            reqs.defaultAssigneeTypes = ['OptionValue', 'get', {
              option_group_id: 'activity_default_assignee',
              sequential: 1,
              options: {
                limit: 0
              }
            }];
            reqs.relTypes = ['RelationshipType', 'get', {
              sequential: 1,
              options: {
                sort: CRM.crmCaseType.REL_TYPE_CNAME,
                limit: 0
              }
            }];
            if ($route.current.params.id !== 'new') {
              reqs.caseType = ['CaseType', 'getsingle', {
                id: $route.current.params.id
              }];
            }
            return crmApi(reqs);
          }
        }
      });
    }
  ]);


  crmCaseType.directive('crmAddName', function() {
    return {
      restrict: 'AE',
      template: '<input class="add-activity crm-action-menu fa-plus" type="hidden" />',
      link: function(scope, element, attrs) {

        var input = $('input', element);

        scope._resetSelection = function() {
          $(input).select2('close');
          $(input).select2('val', '');
          scope[attrs.crmVar] = '';
        };

        $(input).crmSelect2({
          data: function () {
            return { results: scope[attrs.crmOptions] };
          },
          createSearchChoice: function(term) {
            return {id: term, text: term + ' (' + ts('new') + ')'};
          },
          createSearchChoicePosition: 'bottom',
          placeholder: attrs.placeholder
        });
        $(input).on('select2-selecting', function(e) {
          scope[attrs.crmVar] = e.val;
          scope.$evalAsync(attrs.crmOnAdd);
          scope.$evalAsync('_resetSelection()');
          e.preventDefault();
        });
      }
    };
  });

  crmCaseType.directive('crmEditableTabTitle', function($timeout) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.addClass('crm-editable crm-editable-enabled');
        var titleLabel = $(element).find('span');
        var penIcon = $('<i class="crm-i fa-pencil crm-editable-placeholder"></i>').prependTo(element);
        var saveButton = $('<button type="button"><i class="crm-i fa-check"></i></button>').appendTo(element);
        var cancelButton = $('<button type="cancel"><i class="crm-i fa-times"></i></button>').appendTo(element);
        $('button', element).wrapAll('<div class="crm-editable-form" style="display:none" />');
        var buttons = $('.crm-editable-form', element);
        titleLabel.on('click', startEditMode);
        penIcon.on('click', startEditMode);

        function detectEscapeKeyPress (event) {
          var isEscape = false;

          if ("key" in event) {
              isEscape = (event.key == "Escape" || event.key == "Esc");
          } else {
              isEscape = (event.keyCode == 27);
          }

          return isEscape;
        }

        function detectEnterKeyPress (event) {
          var isEnter = false;

          if ("key" in event) {
            isEnter = (event.key == "Enter");
          } else {
            isEnter = (event.keyCode == 13);
          }

          return isEnter;
        }

        function startEditMode () {
          if (titleLabel.is(":focus")) {
            return;
          }

          penIcon.hide();
          buttons.show();

          saveButton.click(function () {
            updateTextValue();
            stopEditMode();
          });

          cancelButton.click(function () {
            revertTextValue();
            stopEditMode();
          });

          $(element).addClass('crm-editable-editing');

          titleLabel
            .attr("contenteditable", "true")
            .focus()
            .focusout(function (event) {
              $timeout(function () {
                revertTextValue();
                stopEditMode();
              }, 500);
            })
            .keydown(function(event) {
              event.stopImmediatePropagation();

              if(detectEscapeKeyPress(event)) {
                revertTextValue();
                stopEditMode();
              } else if(detectEnterKeyPress(event)) {
                event.preventDefault();
                updateTextValue();
                stopEditMode();
              }
            });
        }

        function stopEditMode () {
          titleLabel.removeAttr("contenteditable").off("focusout");
          titleLabel.off("keydown");
          saveButton.off("click");
          cancelButton.off("click");
          $(element).removeClass('crm-editable-editing');

          penIcon.show();
          buttons.hide();
        }

        function revertTextValue () {
          titleLabel.text(scope.activitySet.label);
        }

        function updateTextValue () {
          var updatedTitle = titleLabel.text();

          scope.$evalAsync(function () {
            scope.activitySet.label = updatedTitle;
          });
        }
      }
    };
  });

  crmCaseType.controller('CaseTypeCtrl', function($scope, crmApi, apiCalls) {
    var REL_TYPE_CNAME, defaultAssigneeDefaultValue, ts;

    (function init () {

      REL_TYPE_CNAME = CRM.crmCaseType.REL_TYPE_CNAME;

      ts = $scope.ts = CRM.ts(null);
      $scope.locks = { caseTypeName: true, activitySetName: true };
      $scope.workflows = { timeline: 'Timeline', sequence: 'Sequence' };
      defaultAssigneeDefaultValue = _.find(apiCalls.defaultAssigneeTypes.values, { is_default: '1' }) || {};

      storeApiCallsResults();
      initCaseType();
      initCaseTypeDefinition();
      initSelectedStatuses();
    })();

    function storeApiCallsResults() {
      $scope.activityStatuses = apiCalls.actStatuses.values;
      $scope.caseStatuses = _.indexBy(apiCalls.caseStatuses.values, 'name');
      $scope.activityTypes = _.indexBy(apiCalls.actTypes.values, 'name');
      $scope.activityTypeOptions = _.map(apiCalls.actTypes.values, formatActivityTypeOption);
      $scope.defaultAssigneeTypes = apiCalls.defaultAssigneeTypes.values;
      $scope.relationshipTypeOptions = _.map(apiCalls.relTypes.values, function(type) {
        return {id: type[REL_TYPE_CNAME], text: type.label_b_a};
      });
      $scope.defaultRelationshipTypeOptions = getDefaultRelationshipTypeOptions();

      $scope.defaultAssigneeTypeValues = _.chain($scope.defaultAssigneeTypes)
        .indexBy('name').mapValues('value').value();
    }




    function getDefaultRelationshipTypeOptions() {
      return _.transform(apiCalls.relTypes.values, function(result, relType) {
        var isBidirectionalRelationship = relType.label_a_b === relType.label_b_a;

        result.push({
          label: relType.label_b_a,
          value: relType.id + '_b_a'
        });

        if (!isBidirectionalRelationship) {
          result.push({
            label: relType.label_a_b,
            value: relType.id + '_a_b'
          });
        }
      }, []);
    }

    function initCaseType() {
      var isNewCaseType = !apiCalls.caseType;

      if (isNewCaseType) {
        $scope.caseType = _.cloneDeep(newCaseTypeTemplate);
      } else {
        $scope.caseType = apiCalls.caseType;
      }
    }

    function initCaseTypeDefinition() {
      $scope.caseType.definition = $scope.caseType.definition || [];
      $scope.caseType.definition.activityTypes = $scope.caseType.definition.activityTypes || [];
      $scope.caseType.definition.activitySets = $scope.caseType.definition.activitySets || [];
      $scope.caseType.definition.caseRoles = $scope.caseType.definition.caseRoles || [];
      $scope.caseType.definition.statuses = $scope.caseType.definition.statuses || [];
      $scope.caseType.definition.timelineActivityTypes = $scope.caseType.definition.timelineActivityTypes || [];

      _.each($scope.caseType.definition.activitySets, function (set) {
        _.each(set.activityTypes, function (type, name) {
          var isDefaultAssigneeTypeUndefined = _.isUndefined(type.default_assignee_type);
          type.label = $scope.activityTypes[type.name].label;

          if (isDefaultAssigneeTypeUndefined) {
            type.default_assignee_type = defaultAssigneeDefaultValue.value;
          }
        });
      });
    }

    function initSelectedStatuses() {
      $scope.selectedStatuses = {};

      _.each(apiCalls.caseStatuses.values, function (status) {
        $scope.selectedStatuses[status.name] = !$scope.caseType.definition.statuses.length || $scope.caseType.definition.statuses.indexOf(status.name) > -1;
      });
    }

    $scope.addActivitySet = function(workflow) {
      var activitySet = {};
      activitySet[workflow] = '1';
      activitySet.activityTypes = [];

      var offset = 1;
      var names = _.pluck($scope.caseType.definition.activitySets, 'name');
      while (_.contains(names, workflow + '_' + offset)) offset++;
      activitySet.name = workflow + '_' + offset;
      activitySet.label = (offset == 1  ) ? $scope.workflows[workflow] : ($scope.workflows[workflow] + ' #' + offset);

      $scope.caseType.definition.activitySets.push(activitySet);
      _.defer(function() {
        $('.crmCaseType-acttab').tabs('refresh').tabs({active: -1});
      });
    };

    function formatActivityTypeOption(type) {
      return {id: type.name, text: type.label, icon: type.icon};
    }

    function addActivityToSet(activitySet, activityTypeName) {
      activitySet.activityTypes = activitySet.activityTypes || [];
	    var activity = {
          name: activityTypeName,
          label: $scope.activityTypes[activityTypeName].label,
          status: 'Scheduled',
          reference_activity: 'Open Case',
          reference_offset: '1',
          reference_select: 'newest',
          default_assignee_type: $scope.defaultAssigneeTypeValues.NONE
      };
      activitySet.activityTypes.push(activity);
      if(typeof activitySet.timeline !== "undefined" && activitySet.timeline == "1") {
        $scope.caseType.definition.timelineActivityTypes.push(activity);
      }
    }

    function resetTimelineActivityTypes() {
        $scope.caseType.definition.timelineActivityTypes = [];
        angular.forEach($scope.caseType.definition.activitySets, function(activitySet) {
            angular.forEach(activitySet.activityTypes, function(activityType) {
                $scope.caseType.definition.timelineActivityTypes.push(activityType);
            });
        });
    }

    function createActivity(name, callback) {
      CRM.loadForm(CRM.url('civicrm/admin/options/activity_type', {action: 'add', reset: 1, label: name, component_id: 7}))
        .on('crmFormSuccess', function(e, data) {
          $scope.activityTypes[data.optionValue.name] = data.optionValue;
          $scope.activityTypeOptions.push(formatActivityTypeOption(data.optionValue));
          callback(data.optionValue);
          $scope.$digest();
        });
    }

    $scope.addActivity = function(activitySet, activityType) {
      if ($scope.activityTypes[activityType]) {
        addActivityToSet(activitySet, activityType);
      } else {
        createActivity(activityType, function(newActivity) {
          addActivityToSet(activitySet, newActivity.name);
        });
      }
    };

    $scope.addActivityType = function(activityType) {
      var names = _.pluck($scope.caseType.definition.activityTypes, 'name');
      if (!_.contains(names, activityType)) {

        if ($scope.activityTypes[activityType]) {
          $scope.caseType.definition.activityTypes.push({name: activityType});
        } else {
          createActivity(activityType, function(newActivity) {
            $scope.caseType.definition.activityTypes.push({name: newActivity.name});
          });
        }
      }
    };

    $scope.clearActivityDefaultAssigneeValues = function(activity) {
      activity.default_assignee_relationship = null;
      activity.default_assignee_contact = null;
    };

    $scope.addRole = function(roles, roleName) {
      var names = _.pluck($scope.caseType.definition.caseRoles, 'name');
      if (!_.contains(names, roleName)) {
        if (_.where($scope.relationshipTypeOptions, {id: roleName}).length) {
          roles.push({name: roleName});
        } else {
          CRM.loadForm(CRM.url('civicrm/admin/reltype', {action: 'add', reset: 1, label_a_b: roleName, label_b_a: roleName}))
            .on('crmFormSuccess', function(e, data) {
              roles.push({name: data.relationshipType[REL_TYPE_CNAME]});
              $scope.relationshipTypeOptions.push({id: data.relationshipType[REL_TYPE_CNAME], text: data.relationshipType.label_b_a});
              $scope.$digest();
            });
        }
      }
    };

    $scope.onManagerChange = function(managerRole) {
      angular.forEach($scope.caseType.definition.caseRoles, function(caseRole) {
        if (caseRole != managerRole) {
          caseRole.manager = '0';
        }
      });
    };

    $scope.removeItem = function(array, item) {
      var idx = _.indexOf(array, item);
      if (idx != -1) {
        array.splice(idx, 1);
        resetTimelineActivityTypes();
      }
    };

    $scope.isForkable = function() {
      return !$scope.caseType.id || $scope.caseType.is_forkable;
    };

    $scope.newStatus = function() {
      CRM.loadForm(CRM.url('civicrm/admin/options/case_status', {action: 'add', reset: 1}))
        .on('crmFormSuccess', function(e, data) {
          $scope.caseStatuses[data.optionValue.name] = data.optionValue;
          $scope.selectedStatuses[data.optionValue.name] = true;
          $scope.$digest();
        });
    };

    $scope.isNewActivitySetAllowed = function(workflow) {
      switch (workflow) {
        case 'timeline':
          return true;
        case 'sequence':
          return 0 === _.where($scope.caseType.definition.activitySets, {sequence: '1'}).length;
        default:
          CRM.console('warn', 'Denied access to unrecognized workflow: (' + workflow + ')');
          return false;
      }
    };

    $scope.isActivityRemovable = function(activitySet, activity) {
      return true;
    };

    $scope.isValidName = function(name) {
      return !name || name.match(/^[a-zA-Z0-9_]+$/);
    };

    $scope.getWorkflowName = function(activitySet) {
      var result = 'Unknown';
      _.each($scope.workflows, function(value, key) {
        if (activitySet[key]) result = value;
      });
      return result;
    };

    /**
     * Determine which HTML partial to use for a particular
     *
     * @return string URL of the HTML partial
     */
    $scope.activityTableTemplate = function(activitySet) {
      if (activitySet.timeline) {
        return '~/crmCaseType/timelineTable.html';
      } else if (activitySet.sequence) {
        return '~/crmCaseType/sequenceTable.html';
      } else {
        return '';
      }
    };

    $scope.dump = function() {
      console.log($scope.caseType);
    };

    $scope.save = function() {

      var selectedStatuses = [];
      _.each($scope.selectedStatuses, function(v, k) {
        if (v) selectedStatuses.push(k);
      });

      $scope.caseType.definition.statuses = selectedStatuses.length == _.size($scope.selectedStatuses) ? [] : selectedStatuses;
      var result = crmApi('CaseType', 'create', $scope.caseType, true);
      result.then(function(data) {
        if (data.is_error === 0 || data.is_error == '0') {
          $scope.caseType.id = data.id;
          window.location.href = '#/caseType';
        }
      });
    };

    $scope.$watchCollection('caseType.definition.activitySets', function() {
      _.defer(function() {
        $('.crmCaseType-acttab').tabs('refresh');
      });
    });

    var updateCaseTypeName = function () {
      if (!$scope.caseType.id && $scope.locks.caseTypeName) {

        var t = $scope.caseType.title ? $scope.caseType.title : '';
        $scope.caseType.name = t.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
      }
    };
    $scope.$watch('locks.caseTypeName', updateCaseTypeName);
    $scope.$watch('caseType.title', updateCaseTypeName);

    if (!$scope.isForkable()) {
      CRM.alert(ts('The CiviCase XML file for this case-type prohibits editing the definition.'));
    }

  });

  crmCaseType.controller('CaseTypeListCtrl', function($scope, crmApi, caseTypes) {
    var ts = $scope.ts = CRM.ts(null);

    $scope.caseTypes = caseTypes.values;
    $scope.toggleCaseType = function (caseType) {
      caseType.is_active = (caseType.is_active == '1') ? '0' : '1';
      crmApi('CaseType', 'create', caseType, true)
        .catch(function (data) {
          caseType.is_active = (caseType.is_active == '1') ? '0' : '1'; // revert
          $scope.$digest();
        });
    };
    $scope.deleteCaseType = function (caseType) {
      crmApi('CaseType', 'delete', {id: caseType.id}, {
        error: function (data) {
          CRM.alert(data.error_message, ts('Error'), 'error');
        }
      })
        .then(function (data) {
          delete caseTypes.values[caseType.id];
        });
    };
    $scope.revertCaseType = function (caseType) {
      caseType.definition = 'null';
      caseType.is_forked = '0';
      crmApi('CaseType', 'create', caseType, true)
        .catch(function (data) {
          caseType.is_forked = '1'; // restore
          $scope.$digest();
        });
    };
  });




  angular.module('crmCxn', CRM.angRequires('crmCxn'));

  angular.module('crmCxn').config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/cxn', {
        templateUrl: '~/crmCxn/ManageCtrl.html',
        controller: 'CrmCxnManageCtrl',
        resolve: {
          apiCalls: function(crmApi){
            var reqs = {};
            reqs.cxns = ['Cxn', 'get', {sequential: 1}];
            reqs.appMetas = ['CxnApp', 'get', {sequential: 1, return: ['id', 'title', 'desc', 'appId', 'appUrl', 'links', 'perm']}];
            reqs.cfg = ['Cxn', 'getcfg', {}];
            reqs.sysCheck = ['System', 'check', {}]; // FIXME: filter on checkCxnOverrides
            return crmApi(reqs);
          }
        }
      });
    }
  ]);



  angular.module('crmCxn').controller('CrmCxnConfirmAboutCtrl', function($scope) {
    $scope.ts = CRM.ts(null);
  });


  angular.module('crmCxn').directive('crmCxnAdvTable', function crmCxnAdvTable() {
    return {
      restrict: 'EA',
      scope: {
        crmCxnAdvTable: '='
      },
      templateUrl: '~/crmCxn/AdvTable.html',
      link: function(scope, element, attrs) {
        scope.ts = CRM.ts(null);
        scope.$watch('crmCxnAdvTable', function(crmCxnAdvTable){
          scope.appMeta = crmCxnAdvTable.appMeta;
        });
      }
    };
  });



  angular.module('crmCxn').factory('crmCxnCheckAddr', function($q, $timeout) {
    var TIMEOUT = 6000, CHECK_ADDR = 'https://mycivi.org/check-addr';
    return function(url) {
      var dfr = $q.defer(), result = null;

      function onErr() {
        if (result !== null) return;
        result = {url: url, valid: false};
        dfr.resolve(result);
      }

      $.ajax({
        url: CHECK_ADDR,
        data: {url: url},
        jsonp: "callback",
        dataType: "jsonp"
      }).fail(onErr)
        .done(function(response) {
          if (result !== null) return;
          result = {url: url, valid: response.result};
          dfr.resolve(result);
        }
      );

      $timeout(onErr, TIMEOUT);

      return dfr.promise;
    };
  });



  angular.module('crmCxn').controller('CrmCxnConfirmConnectCtrl', function($scope) {
    $scope.ts = CRM.ts(null);
  });


  angular.module('crmCxn').controller('CrmCxnConfirmReconnectCtrl', function($scope) {
    $scope.ts = CRM.ts(null);
  });




  angular.module('crmCxn').controller('CrmCxnLinkDialogCtrl', function CrmCxnLinkDialogCtrl($scope, dialogService) {
    var ts = $scope.ts = CRM.ts(null);
  });




  angular.module('crmCxn').controller('CrmCxnManageCtrl', function CrmCxnManageCtrl($scope, apiCalls, crmApi, crmUiAlert, crmBlocker, crmStatus, $timeout, dialogService, crmCxnCheckAddr) {
    var ts = $scope.ts = CRM.ts(null);
    if (apiCalls.appMetas.is_error) {
      $scope.appMetas = [];
      CRM.alert(apiCalls.appMetas.error_message, ts('Application List Unavailable'), 'error');
    }
    else {
      $scope.appMetas = apiCalls.appMetas.values;
    }
    $scope.cxns = apiCalls.cxns.values;
    $scope.alerts = _.where(apiCalls.sysCheck.values, {name: 'checkCxnOverrides'});

    crmCxnCheckAddr(apiCalls.cfg.values.siteCallbackUrl).then(function(response) {
      if (response.valid) return;
      crmUiAlert({
        type: 'warning',
        title: ts('Internet Access Required'),
        templateUrl: '~/crmCxn/Connectivity.html',
        scope: $scope.$new(),
        options: {expires: false}
      });
    });

    $scope.filter = {};
    var block = $scope.block = crmBlocker();

    _.each($scope.alerts, function(alert){
      crmUiAlert({text: alert.message, title: alert.title, type: 'error'});
    });

    function asOne(result, msg) {
      switch (result.length) {
        case 0:
          return null;
        case 1:
          return result[0];
        default:
          throw msg;
      }
    }

    $scope.findCxnByAppId = function(appId) {
      var result = _.where($scope.cxns, {
        app_guid: appId
      });
      return asOne(result, "Error: Too many connections for appId: " + appId);
    };

    $scope.findAppByAppId = function(appId) {
      var result = _.where($scope.appMetas, {
        appId: appId
      });
      return asOne(result, "Error: Too many apps for appId: " + appId);
    };

    $scope.hasAvailApps = function() {

      for (var i = 0; i< $scope.appMetas.length; i++) {
        if (!$scope.findCxnByAppId($scope.appMetas[i].appId)) {
          return true;
        }
      }
      return false;
    };

    $scope.refreshCxns = function() {
      crmApi('Cxn', 'get', {sequential: 1}).then(function(result) {
        $timeout(function(){
          $scope.cxns = result.values;
        });
      });
    };

    $scope.register = function(appMeta) {
      var reg = crmApi('Cxn', 'register', {app_guid: appMeta.appId}).then($scope.refreshCxns).then(function() {
        if (appMeta.links.welcome) {
          return $scope.openLink(appMeta, 'welcome', {title: ts('%1: Welcome (External)', {1: appMeta.title})});
        }
      });
      return block(crmStatus({start: ts('Connecting...'), success: ts('Connected')}, reg));
    };

    $scope.reregister = function(appMeta) {
      var reg = crmApi('Cxn', 'register', {app_guid: appMeta.appId}).then($scope.refreshCxns).then(function() {
        if (appMeta.links.welcome) {
          return $scope.openLink(appMeta, 'welcome', {title: ts('%1: Welcome (External)', {1: appMeta.title})});
        }
      });
      return block(crmStatus({start: ts('Reconnecting...'), success: ts('Reconnected')}, reg));
    };

    $scope.unregister = function(appMeta) {
      var reg = crmApi('Cxn', 'unregister', {app_guid: appMeta.appId, debug: 1}).then($scope.refreshCxns);
      return block(crmStatus({start: ts('Disconnecting...'), success: ts('Disconnected')}, reg));
    };

    $scope.toggleCxn = function toggleCxn(cxn) {
      var is_active = (cxn.is_active=="1" ? 0 : 1); // we switch the flag
      var reg = crmApi('Cxn', 'create', {id: cxn.id, app_guid: cxn.app_meta.appId, is_active: is_active, debug: 1}).then(function(){
        cxn.is_active = is_active;
      });
      return block(crmStatus({start: ts('Saving...'), success: ts('Saved')}, reg));
    };

    $scope.openLink = function openLink(appMeta, page, options) {
      var promise = crmApi('Cxn', 'getlink', {app_guid: appMeta.appId, page_name: page}).then(function(result) {
        var mode = result.values.mode ? result.values.mode : 'popup';
        switch (result.values.mode) {
          case 'iframe':
            var passThrus = ['height', 'width']; // Options influenced by remote server.
            options = angular.extend(_.pick(result.values, passThrus), options);
            $scope.openIframe(result.values.url, options);
            break;
          case 'popup':
            CRM.alert(ts('The page "%1" will open in a popup. If it does not appear automatically, check your browser for notifications.', {1: options.title}), '', 'info');
            window.open(result.values.url, 'cxnSettings', 'resizable,scrollbars,status');
            break;
          case 'redirect':
            window.location = result.values.url;
            break;
          default:
            CRM.alert(ts('Cannot open link. Unrecognized mode.'), '', 'error');
        }
      });
      return block(crmStatus({start: ts('Opening...'), success: ''}, promise));
    };

    $scope.openIframe = function openIframe(url, options) {
      var model = {
        url: url
      };
      options = CRM.utils.adjustDialogDefaults(angular.extend(
        {
          autoOpen: false,
          height: 'auto',
          width: '40%',
          title: ts('External Link')
        },
        options
      ));
      return dialogService.open('cxnLinkDialog', '~/crmCxn/LinkDialogCtrl.html', model, options)
        .then(function(item) {
          mailing.msg_template_id = item.id;
          return item;
        });
    };
  });


  angular.module('crmCxn').directive('crmCxnPermTable', function crmCxnPermTable() {
    return {
      restrict: 'EA',
      scope: {
        crmCxnPermTable: '='
      },
      templateUrl: '~/crmCxn/PermTable.html',
      link: function(scope, element, attrs) {
        scope.ts = CRM.ts(null);
        scope.hasRequiredFilters = function(api) {
          return !_.isEmpty(api.required);
        };
        scope.isString = function(v) {
          return _.isString(v);
        };
        scope.apiExplorerUrl = CRM.url('civicrm/api');
        scope.$watch('crmCxnPermTable', function(crmCxnPermTable){
          scope.perm = crmCxnPermTable.perm;
        });
      }
    };
  });
})(angular, CRM.$, CRM._);


(function(angular, $, _) {
  angular.module('crmResource', []);

  angular.module('crmResource').factory('crmResource', function($q, $http) {
    var deferreds = {}; // null|object; deferreds[url][idx] = Deferred;
    var templates = null; // null|object; templates[url] = HTML;

    var notify = function notify() {
      var oldDfrds = deferreds;
      deferreds = null;

      angular.forEach(oldDfrds, function(dfrs, url) {
        if (templates[url]) {
          angular.forEach(dfrs, function(dfr) {
            dfr.resolve({
              status: 200,
              headers: function(name) {
                var headers = {'Content-type': 'text/html'};
                return name ? headers[name] : headers;
              },
              data: templates[url]
            });
          });
        }
        else {
          angular.forEach(dfrs, function(dfr) {
            dfr.reject({status: 500}); // FIXME
          });
        }
      });
    };

    var moduleUrl = CRM.angular.bundleUrl;
    $http.get(moduleUrl)
      .success(function httpSuccess(data) {
        templates = [];
        angular.forEach(data, function(module) {
          if (module.partials) {
            angular.extend(templates, module.partials);
          }
          if (module.strings) {
            CRM.addStrings(module.domain, module.strings);
          }
        });
        notify();
      })
      .error(function httpError() {
        templates = [];
        notify();
      });

    return {

      getUrl: function getUrl(url) {
        if (templates !== null) {
          return templates[url];
        }
        else {
          var deferred = $q.defer();
          if (!deferreds[url]) {
            deferreds[url] = [];
          }
          deferreds[url].push(deferred);
          return deferred.promise;
        }
      }
    };
  });

  angular.module('crmResource').config(function($provide) {
    $provide.decorator('$templateCache', function($delegate, $http, $q, crmResource) {
      var origGet = $delegate.get;
      var urlPat = /^~\//;
      $delegate.get = function(url) {
        if (urlPat.test(url)) {
          return crmResource.getUrl(url);
        }
        else {
          return origGet.call(this, url);
        }
      };
      return $delegate;
    });
  });



  angular.module('crmRouteBinder', CRM.angRequires('crmRouteBinder'));


  var pendingUpdates = null, activeTimer = null, registered = false, ignorable = {};

  function registerGlobalListener($injector) {
    if (registered) return;
    registered = true;

    $injector.get('$rootScope').$on('$routeUpdate', function () {

      if (null === pendingUpdates) {
        $injector.get('$route').reload();
      }
    });
  }

  var formats = {
    json: {
      watcher: '$watchCollection',
      decode: angular.fromJson,
      encode: angular.toJson,
      default: {}
    },
    raw: {
      watcher: '$watch',
      decode: function(v) { return v; },
      encode: function(v) { return v; },
      default: ''
    },
    int: {
      watcher: '$watch',
      decode: function(v) { return parseInt(v); },
      encode: function(v) { return v; },
      default: 0
    },
    bool: {
      watcher: '$watch',
      decode: function(v) { return v === '1'; },
      encode: function(v) { return v ? '1' : '0'; },
      default: false
    }
  };

  angular.module('crmRouteBinder').config(function ($provide) {
    $provide.decorator('$rootScope', function ($delegate, $injector, $parse) {
      Object.getPrototypeOf($delegate).$bindToRoute = function (options) {
        registerGlobalListener($injector);

        options.format = options.format || 'json';
        var fmt = formats[options.format];
        if (options.deep) {
          fmt.watcher = '$watch';
        }
        if (options.default === undefined) {
          options.default = fmt.default;
        }
        var _scope = this;

        var $route = $injector.get('$route'), $timeout = $injector.get('$timeout');

        var value;
        if (options.param in $route.current.params) {
          value = fmt.decode($route.current.params[options.param]);
        }
        else {
          value = _.cloneDeep(options.default);
          ignorable[options.param] = fmt.encode(options.default);
        }
        $parse(options.expr).assign(_scope, value);

        _scope[fmt.watcher](options.expr, function (newValue) {
          var encValue = fmt.encode(newValue);
          if ($route.current.params[options.param] === encValue) return;

          pendingUpdates = pendingUpdates || {};
          pendingUpdates[options.param] = encValue;
          var p = angular.extend({}, $route.current.params, pendingUpdates);
          angular.forEach(ignorable, function(v,k){ if (p[k] === v) delete p[k]; });
          $route.updateParams(p);

          if (activeTimer) $timeout.cancel(activeTimer);
          activeTimer = $timeout(function () {
            pendingUpdates = null;
            activeTimer = null;
            ignorable = {};
          }, 50);
        }, options.deep);
      };

      return $delegate;
    });
  });

})(angular, CRM.$, CRM._);

(function (angular, $, _) {

  var uidCount = 0,
    pageTitle = 'CiviCRM',
    documentTitle = 'CiviCRM';

  angular.module('crmUi', CRM.angRequires('crmUi'))


    .directive('crmUiAccordion', function() {
      return {
        scope: {
          crmUiAccordion: '='
        },
        template: '<div ng-class="cssClasses"><div class="crm-accordion-header">{{crmUiAccordion.title}} <a crm-ui-help="help" ng-if="help"></a></div><div class="crm-accordion-body" ng-transclude></div></div>',
        transclude: true,
        link: function (scope, element, attrs) {
          scope.cssClasses = {
            'crm-accordion-wrapper': true,
            collapsed: scope.crmUiAccordion.collapsed
          };
          scope.help = null;
          scope.$watch('crmUiAccordion', function(crmUiAccordion) {
            if (crmUiAccordion && crmUiAccordion.help) {
              scope.help = crmUiAccordion.help.clone({}, {
                title: crmUiAccordion.title
              });
            }
          });
        }
      };
    })





    .service('crmUiAlert', function($compile, $rootScope, $templateRequest, $q) {
      var count = 0;
      return function crmUiAlert(params) {
        var id = 'crmUiAlert_' + (++count);
        var tpl = null;
        if (params.templateUrl) {
          tpl = $templateRequest(params.templateUrl);
        }
        else if (params.template) {
          tpl = params.template;
        }
        if (tpl) {
          params.text = '<div id="' + id + '"></div>'; // temporary stub
        }
        var result = CRM.alert(params.text, params.title, params.type, params.options);
        if (tpl) {
          $q.when(tpl, function(html) {
            var scope = params.scope || $rootScope.$new();
            var linker = $compile(html);
            $('#' + id).append($(linker(scope)));
          });
        }
        return result;
      };
    })



    .directive('crmUiDatepicker', function () {
      return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {
          crmUiDatepicker: '='
        },
        link: function (scope, element, attrs, ngModel) {
          ngModel.$render = function () {
            element.val(ngModel.$viewValue).change();
          };

          element
            .crmDatepicker(scope.crmUiDatepicker)
            .on('change', function() {
              var requiredLength = 19;
              if (scope.crmUiDatepicker && scope.crmUiDatepicker.time === false) {
                requiredLength = 10;
              }
              if (scope.crmUiDatepicker && scope.crmUiDatepicker.date === false) {
                requiredLength = 8;
              }
              ngModel.$setValidity('incompleteDateTime', !($(this).val().length && $(this).val().length !== requiredLength));
            });
        }
      };
    })



    .directive('crmUiDebug', function ($location) {
      return {
        restrict: 'AE',
        scope: {
          crmUiDebug: '@'
        },
        template: function() {
          var args = $location.search();
          return (args && args.angularDebug) ? '<div crm-ui-accordion=\'{title: ts("Debug (%1)", {1: crmUiDebug}), collapsed: true}\'><pre>{{data|json}}</pre></div>' : '';
        },
        link: function(scope, element, attrs) {
          var args = $location.search();
          if (args && args.angularDebug) {
            scope.ts = CRM.ts(null);
            scope.$parent.$watch(attrs.crmUiDebug, function(data) {
              scope.data = data;
            });
          }
        }
      };
    })





    .directive('crmUiField', function() {

      var templateUrls = {
        default: '~/crmUi/field.html',
        checkbox: '~/crmUi/field-cb.html'
      };

      return {
        require: '^crmUiIdScope',
        restrict: 'EA',
        scope: {

          crmUiField: '='
        },
        templateUrl: function(tElement, tAttrs){
          var layout = tAttrs.crmLayout ? tAttrs.crmLayout : 'default';
          return templateUrls[layout];
        },
        transclude: true,
        link: function (scope, element, attrs, crmUiIdCtrl) {
          $(element).addClass('crm-section');
          scope.help = null;
          scope.$watch('crmUiField', function(crmUiField) {
            if (crmUiField && crmUiField.help) {
              scope.help = crmUiField.help.clone({}, {
                title: crmUiField.title
              });
            }
          });
        }
      };
    })

    .directive('crmUiId', function () {
      return {
        require: '^crmUiIdScope',
        restrict: 'EA',
        link: {
          pre: function (scope, element, attrs, crmUiIdCtrl) {
            var id = crmUiIdCtrl.get(attrs.crmUiId);
            element.attr('id', id);
          }
        }
      };
    })

    .service('crmUiHelp', function(){

      function FieldHelp(options) {
        this.options = options;
      }
      angular.extend(FieldHelp.prototype, {
        get: function(n) {
          return this.options[n];
        },
        open: function open() {
          CRM.help(this.options.title, {id: this.options.id, file: this.options.file});
        },
        clone: function clone(options, defaults) {
          return new FieldHelp(angular.extend({}, defaults, this.options, options));
        }
      });

      return function(defaults){


        return function(options) {
          if (_.isString(options)) {
            options = {id: options};
          }
          return new FieldHelp(angular.extend({}, defaults, options));
        };
      };
    })






    .directive('crmUiHelp', function() {
      return {
        restrict: 'EA',
        link: function(scope, element, attrs) {
          setTimeout(function() {
            var crmUiHelp = scope.$eval(attrs.crmUiHelp);
            var title = crmUiHelp && crmUiHelp.get('title') ? ts('%1 Help', {1: crmUiHelp.get('title')}) : ts('Help');
            element.attr('title', title);
          }, 50);

          element
            .addClass('helpicon')
            .attr('href', '#')
            .on('click', function(e) {
              e.preventDefault();
              scope.$eval(attrs.crmUiHelp).open();
            });
        }
      };
    })

    .directive('crmUiFor', function ($parse, $timeout) {
      return {
        require: '^crmUiIdScope',
        restrict: 'EA',
        template: '<span ng-class="cssClasses"><span ng-transclude/><span crm-ui-visible="crmIsRequired" class="crm-marker" title="This field is required.">*</span></span>',
        transclude: true,
        link: function (scope, element, attrs, crmUiIdCtrl) {
          scope.crmIsRequired = false;
          scope.cssClasses = {};

          if (!attrs.crmUiFor) return;

          var id = crmUiIdCtrl.get(attrs.crmUiFor);
          element.attr('for', id);
          var ngModel = null;

          var updateCss = function () {
            scope.cssClasses['crm-error'] = !ngModel.$valid && !ngModel.$pristine;
          };


          var init = function (retries, retryDelay) {
            var input = $('#' + id);
            if (input.length === 0 && !attrs.crmUiForceRequired) {
              if (retries) {
                $timeout(function(){
                  init(retries-1, retryDelay);
                }, retryDelay);
              }
              return;
            }

            if (attrs.crmUiForceRequired) {
              scope.crmIsRequired = true;
              return;
            }

            var tgtScope = scope;//.$parent;
            if (attrs.crmDepth) {
              for (var i = attrs.crmDepth; i > 0; i--) {
                tgtScope = tgtScope.$parent;
              }
            }

            if (input.attr('ng-required')) {
              scope.crmIsRequired = scope.$parent.$eval(input.attr('ng-required'));
              scope.$parent.$watch(input.attr('ng-required'), function (isRequired) {
                scope.crmIsRequired = isRequired;
              });
            }
            else {
              scope.crmIsRequired = input.prop('required');
            }

            ngModel = $parse(attrs.crmUiFor)(tgtScope);
            if (ngModel) {
              ngModel.$viewChangeListeners.push(updateCss);
            }
          };

          $timeout(function(){
            init(3, 100);
          });
        }
      };
    })


    .directive('crmUiIdScope', function () {
      return {
        restrict: 'EA',
        scope: {},
        controllerAs: 'crmUiIdCtrl',
        controller: function($scope) {
          var ids = {};
          this.get = function(name) {
            if (!ids[name]) {
              ids[name] = "crmUiId_" + (++uidCount);
            }
            return ids[name];
          };
        },
        link: function (scope, element, attrs) {}
      };
    })



    .directive('crmUiIframe', function ($parse) {
      return {
        scope: {
          crmUiIframeSrc: '@', // expression which evaluates to a URL
          crmUiIframe: '@' // expression which evaluates to HTML content
        },
        link: function (scope, elm, attrs) {
          var iframe = $(elm)[0];
          iframe.setAttribute('width', '100%');
          iframe.setAttribute('height', '250px');
          iframe.setAttribute('frameborder', '0');

          var refresh = function () {
            if (attrs.crmUiIframeSrc) {
              iframe.setAttribute('src', scope.$parent.$eval(attrs.crmUiIframeSrc));
            }
            else {
              var iframeHtml = scope.$parent.$eval(attrs.crmUiIframe);

              var doc = iframe.document;
              if (iframe.contentDocument) {
                doc = iframe.contentDocument;
              }
              else if (iframe.contentWindow) {
                doc = iframe.contentWindow.document;
              }

              doc.open();
              doc.writeln(iframeHtml);
              doc.close();
            }
          };

          $(elm).parent().on('dialogresize dialogopen', function(e, ui) {
            $(this).css({padding: '0', margin: '0', overflow: 'hidden'});
            iframe.setAttribute('height', '' + $(this).innerHeight() + 'px');
          });

          $(elm).parent().on('dialogresize', function(e, ui) {
            iframe.setAttribute('class', 'resized');
          });

          scope.$parent.$watch(attrs.crmUiIframe, refresh);
        }
      };
    })



    .directive('crmUiInsertRx', function() {
      return {
        link: function(scope, element, attrs) {
          scope.$on(attrs.crmUiInsertRx, function(e, tokenName) {
            CRM.wysiwyg.insert(element, tokenName);
            $(element).select2('close').select2('val', '');
            CRM.wysiwyg.focus(element);
          });
        }
      };
    })


    .directive('crmUiRichtext', function ($timeout) {
      return {
        require: '?ngModel',
        link: function (scope, elm, attr, ngModel) {

          var editor = CRM.wysiwyg.create(elm);
          if (!ngModel) {
            return;
          }

          if (attr.ngBlur) {
            $(elm).on('blur', function() {
              $timeout(function() {
                scope.$eval(attr.ngBlur);
              });
            });
          }

          ngModel.$render = function(value) {
            editor.done(function() {
              CRM.wysiwyg.setVal(elm, ngModel.$viewValue || '');
            });
          };
        }
      };
    })






    .directive('crmUiLock', function ($parse, $rootScope) {
      var defaultVal = function (defaultValue) {
        var f = function (scope) {
          return defaultValue;
        };
        f.assign = function (scope, value) {

        };
        return f;
      };

      var parse = function (expr, defaultValue) {
        return expr ? $parse(expr) : defaultVal(defaultValue);
      };

      return {
        template: '',
        link: function (scope, element, attrs) {
          var binding = parse(attrs.binding, true);
          var titleLocked = parse(attrs.titleLocked, ts('Locked'));
          var titleUnlocked = parse(attrs.titleUnlocked, ts('Unlocked'));

          $(element).addClass('crm-i lock-button');
          var refresh = function () {
            var locked = binding(scope);
            if (locked) {
              $(element)
                .removeClass('fa-unlock')
                .addClass('fa-lock')
                .prop('title', titleLocked(scope))
              ;
            }
            else {
              $(element)
                .removeClass('fa-lock')
                .addClass('fa-unlock')
                .prop('title', titleUnlocked(scope))
              ;
            }
          };

          $(element).click(function () {
            binding.assign(scope, !binding(scope));

            $rootScope.$digest();
          });

          scope.$watch(attrs.binding, refresh);
          scope.$watch(attrs.titleLocked, refresh);
          scope.$watch(attrs.titleUnlocked, refresh);

          refresh();
        }
      };
    })






    .service('CrmUiOrderCtrl', function(){
      //
      function CrmUiOrderCtrl(defaults){
        this.values = defaults;
      }
      angular.extend(CrmUiOrderCtrl.prototype, {
        get: function get() {
          return this.values;
        },
        getDir: function getDir(name) {
          if (this.values.indexOf(name) >= 0 || this.values.indexOf('+' + name) >= 0) {
            return '+';
          }
          if (this.values.indexOf('-' + name) >= 0) {
            return '-';
          }
          return '';
        },

        remove: function remove(name) {
          var idx = this.values.indexOf(name);
          if (idx >= 0) {
            this.values.splice(idx, 1);
            return true;
          }
          else {
            return false;
          }
        },
        setDir: function setDir(name, dir) {
          return this.toggle(name, dir);
        },


        toggle: function toggle(name, next) {
          if (!next && next !== '') {
            next = '+';
            if (this.remove(name) || this.remove('+' + name)) {
              next = '-';
            }
            if (this.remove('-' + name)) {
              next = '';
            }
          }

          if (next == '+') {
            this.values.unshift('+' + name);
          }
          else if (next == '-') {
            this.values.unshift('-' + name);
          }
        }
      });
      return CrmUiOrderCtrl;
    })







    .directive('crmUiOrder', function(CrmUiOrderCtrl) {
      return {
        link: function(scope, element, attrs){
          var options = angular.extend({var: 'crmUiOrderBy'}, scope.$eval(attrs.crmUiOrder));
          scope[options.var] = new CrmUiOrderCtrl(options.defaults);
        }
      };
    })

    .directive('crmUiOrderBy', function() {
      return {
        link: function(scope, element, attrs) {
          function updateClass(crmUiOrderCtrl, name) {
            var dir = crmUiOrderCtrl.getDir(name);
            element
              .toggleClass('sorting_asc', dir === '+')
              .toggleClass('sorting_desc', dir === '-')
              .toggleClass('sorting', dir === '');
          }

          element.on('click', function(e){
            var tgt = scope.$eval(attrs.crmUiOrderBy);
            tgt[0].toggle(tgt[1]);
            updateClass(tgt[0], tgt[1]);
            e.preventDefault();
            scope.$digest();
          });

          var tgt = scope.$eval(attrs.crmUiOrderBy);
          updateClass(tgt[0], tgt[1]);
        }
      };
    })


    .directive('crmUiSelect', function ($parse, $timeout) {
      return {
        require: '?ngModel',
        priority: 1,
        scope: {
          crmUiSelect: '='
        },
        link: function (scope, element, attrs, ngModel) {



          if (ngModel) {
            ngModel.$render = function () {
              $timeout(function () {


                var newVal = _.cloneDeep(ngModel.$modelValue);

                if (typeof newVal === 'string' && element.select2('container').hasClass('select2-container-multi')) {
                  newVal = newVal.length ? newVal.split(',') : [];
                }
                element.select2('val', newVal);
              });
            };
          }
          function refreshModel() {
            var oldValue = ngModel.$viewValue, newValue = element.select2('val');
            if (oldValue != newValue) {
              scope.$parent.$apply(function () {
                ngModel.$setViewValue(newValue);
              });
            }
          }

          function init() {

            element.crmSelect2(scope.crmUiSelect || {});
            if (ngModel) {
              element.on('change', refreshModel);
            }
          }

          init();
        }
      };
    })


    .directive('crmEntityref', function ($parse, $timeout) {
      return {
        require: '?ngModel',
        scope: {
          crmEntityref: '='
        },
        link: function (scope, element, attrs, ngModel) {



          ngModel.$render = function () {
            $timeout(function () {


              var newVal = _.cloneDeep(ngModel.$modelValue);

              if (typeof newVal === 'string' && element.select2('container').hasClass('select2-container-multi')) {
                newVal = newVal.length ? newVal.split(',') : [];
              }
              element.select2('val', newVal);
            });
          };
          function refreshModel() {
            var oldValue = ngModel.$viewValue, newValue = element.select2('val');
            if (oldValue != newValue) {
              scope.$parent.$apply(function () {
                ngModel.$setViewValue(newValue);
              });
            }
          }

          function init() {

            element.crmEntityRef(scope.crmEntityref || {});
            element.on('change', refreshModel);
            $timeout(ngModel.$render);
          }

          init();
        }
      };
    })


    .directive('crmMultipleEmail', function ($parse, $timeout) {
      return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
          ctrl.$parsers.unshift(function(viewValue) {

            if (_.isEmpty(viewValue)) {
              ctrl.$setValidity('crmMultipleEmail', true);
              return viewValue;
            }

            var emails = viewValue.split(',');

            var emailRegex = /\S+@\S+\.\S+/;

            var validityArr = emails.map(function(str){
              return emailRegex.test(str.trim());
            });

            if ($.inArray(false, validityArr) > -1) {
              ctrl.$setValidity('crmMultipleEmail', false);
            } else {
              ctrl.$setValidity('crmMultipleEmail', true);
            }
            return viewValue;
          });
        }
      };
    })


    .directive('crmUiTab', function($parse) {
      return {
        require: '^crmUiTabSet',
        restrict: 'EA',
        scope: {
          crmTitle: '@',
          crmIcon: '@',
          count: '@',
          id: '@'
        },
        template: '<div ng-transclude></div>',
        transclude: true,
        link: function (scope, element, attrs, crmUiTabSetCtrl) {
          crmUiTabSetCtrl.add(scope);
        }
      };
    })

    .directive('crmUiTabSet', function() {
      return {
        restrict: 'EA',
        scope: {
          crmUiTabSet: '@',
          tabSetOptions: '@'
        },
        templateUrl: '~/crmUi/tabset.html',
        transclude: true,
        controllerAs: 'crmUiTabSetCtrl',
        controller: function($scope, $parse) {
          var tabs = $scope.tabs = []; // array<$scope>
          this.add = function(tab) {
            if (!tab.id) throw "Tab is missing 'id'";
            tabs.push(tab);
          };
        },
        link: function (scope, element, attrs) {}
      };
    })



    .directive('crmUiValidate', function() {
      return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
          var validationKey = attrs.crmUiValidateName ? attrs.crmUiValidateName : 'crmUiValidate';
          scope.$watch(attrs.crmUiValidate, function(newValue){
            ngModel.$setValidity(validationKey, !!newValue);
          });
        }
      };
    })


    .directive('crmUiVisible', function($parse) {
      return {
        restrict: 'EA',
        scope: {
          crmUiVisible: '@'
        },
        link: function (scope, element, attrs) {
          var model = $parse(attrs.crmUiVisible);
          function updatecChildren() {
            element.css('visibility', model(scope.$parent) ? 'inherit' : 'hidden');
          }
          updatecChildren();
          scope.$parent.$watch(attrs.crmUiVisible, updatecChildren);
        }
      };
    })





    .directive('crmUiWizard', function() {
      return {
        restrict: 'EA',
        scope: {
          crmUiWizard: '@',
          crmUiWizardNavClass: '@' // string, A list of classes that will be added to the nav items
        },
        templateUrl: '~/crmUi/wizard.html',
        transclude: true,
        controllerAs: 'crmUiWizardCtrl',
        controller: function($scope, $parse) {
          var steps = $scope.steps = []; // array<$scope>
          var crmUiWizardCtrl = this;
          var maxVisited = 0;
          var selectedIndex = null;

          var findIndex = function() {
            var found = null;
            angular.forEach(steps, function(step, stepKey) {
              if (step.selected) found = stepKey;
            });
            return found;
          };

          this.$index = function() { return selectedIndex; };

          this.$first = function() { return this.$index() === 0; };

          this.$last = function() { return this.$index() === steps.length -1; };
          this.$maxVisit = function() { return maxVisited; };
          this.$validStep = function() {
            return steps[selectedIndex] && steps[selectedIndex].isStepValid();
          };
          this.iconFor = function(index) {
            if (index < this.$index()) return '√';
            if (index === this.$index()) return '»';
            return ' ';
          };
          this.isSelectable = function(step) {
            if (step.selected) return false;
            return this.$validStep();
          };

          /*** @param Object step the $scope of the step */
          this.select = function(step) {
            angular.forEach(steps, function(otherStep, otherKey) {
              otherStep.selected = (otherStep === step);
              if (otherStep === step && maxVisited < otherKey) maxVisited = otherKey;
            });
            selectedIndex = findIndex();
          };
          /*** @param Object step the $scope of the step */
          this.add = function(step) {
            if (steps.length === 0) {
              step.selected = true;
              selectedIndex = 0;
            }
            steps.push(step);
            steps.sort(function(a,b){
              return a.crmUiWizardStep - b.crmUiWizardStep;
            });
            selectedIndex = findIndex();
          };
          this.remove = function(step) {
            var key = null;
            angular.forEach(steps, function(otherStep, otherKey) {
              if (otherStep === step) key = otherKey;
            });
            if (key !== null) {
              steps.splice(key, 1);
            }
          };
          this.goto = function(index) {
            if (index < 0) index = 0;
            if (index >= steps.length) index = steps.length-1;
            this.select(steps[index]);
          };
          this.previous = function() { this.goto(this.$index()-1); };
          this.next = function() { this.goto(this.$index()+1); };
          if ($scope.crmUiWizard) {
            $parse($scope.crmUiWizard).assign($scope.$parent, this);
          }
        },
        link: function (scope, element, attrs) {
          scope.ts = CRM.ts(null);

          element.find('.crm-wizard-buttons button[ng-click^=crmUiWizardCtrl]').click(function () {



            var topOfWizard = element.offset().top;
            var heightOfMenu = $('#civicrm-menu').height() || 0;

            $('html')

              .stop()

              .animate({scrollTop: topOfWizard - heightOfMenu}, 1000);
          });
        }
      };
    })

    .directive('crmUiWizardButtons', function() {
      return {
        require: '^crmUiWizard',
        restrict: 'EA',
        scope: {},
        template: '<span ng-transclude></span>',
        transclude: true,
        link: function (scope, element, attrs, crmUiWizardCtrl) {
          var realButtonsEl = $(element).closest('.crm-wizard').find('.crm-wizard-buttons');
          $(element).appendTo(realButtonsEl);
        }
      };
    })


    .directive('crmIcon', function() {
      return {
        restrict: 'EA',
        link: function (scope, element, attrs) {
          if (element.is('[crm-ui-tab]')) {

            return;
          }
          if (attrs.crmIcon.substring(0,3) == 'fa-') {
            $(element).prepend('<i class="crm-i ' + attrs.crmIcon + '"></i> ');
          }
          else {
            $(element).prepend('<span class="icon ui-icon-' + attrs.crmIcon + '"></span> ');
          }
          if ($(element).is('button')) {
            $(element).addClass('crm-button');
          }
        }
      };
    })




    .directive('crmUiWizardStep', function() {
      var nextWeight = 1;
      return {
        require: ['^crmUiWizard', 'form'],
        restrict: 'EA',
        scope: {
          crmTitle: '@', // expression, evaluates to a printable string
          crmUiWizardStep: '@', // int, a weight which determines the ordering of the steps
          crmUiWizardStepClass: '@' // string, A list of classes that will be added to the template
        },
        template: '<div class="crm-wizard-step {{crmUiWizardStepClass}}" ng-show="selected" ng-transclude/></div>',
        transclude: true,
        link: function (scope, element, attrs, ctrls) {
          var crmUiWizardCtrl = ctrls[0], form = ctrls[1];
          if (scope.crmUiWizardStep) {
            scope.crmUiWizardStep = parseInt(scope.crmUiWizardStep);
          } else {
            scope.crmUiWizardStep = nextWeight++;
          }
          scope.isStepValid = function() {
            return form.$valid;
          };
          crmUiWizardCtrl.add(scope);
          scope.$on('$destroy', function(){
            crmUiWizardCtrl.remove(scope);
          });
        }
      };
    })



    .directive('crmConfirm', function ($compile, $rootScope, $templateRequest, $q) {

      var defaultFuncs = {
        'disable': function (options) {
          return {
            message: ts('Are you sure you want to disable this?'),
            options: {no: ts('Cancel'), yes: ts('Disable')},
            width: 300,
            title: ts('Disable %1?', {
              1: options.obj.title || options.obj.label || options.obj.name || ts('the record')
            })
          };
        },
        'revert': function (options) {
          return {
            message: ts('Are you sure you want to revert this?'),
            options: {no: ts('Cancel'), yes: ts('Revert')},
            width: 300,
            title: ts('Revert %1?', {
              1: options.obj.title || options.obj.label || options.obj.name || ts('the record')
            })
          };
        },
        'delete': function (options) {
          return {
            message: ts('Are you sure you want to delete this?'),
            options: {no: ts('Cancel'), yes: ts('Delete')},
            width: 300,
            title: ts('Delete %1?', {
              1: options.obj.title || options.obj.label || options.obj.name || ts('the record')
            })
          };
        }
      };
      var confirmCount = 0;
      return {
        link: function (scope, element, attrs) {
          $(element).click(function () {
            var options = scope.$eval(attrs.crmConfirm);
            if (attrs.title && !options.title) {
              options.title = attrs.title;
            }
            var defaults = (options.type) ? defaultFuncs[options.type](options) : {};

            var tpl = null, stubId = null;
            if (!options.message) {
              if (options.templateUrl) {
                tpl = $templateRequest(options.templateUrl);
              }
              else if (options.template) {
                tpl = options.template;
              }
              if (tpl) {
                stubId = 'crmUiConfirm_' + (++confirmCount);
                options.message = '<div id="' + stubId + '"></div>';
              }
            }

            CRM.confirm(_.extend(defaults, options))
              .on('crmConfirm:yes', function() { scope.$apply(attrs.onYes); })
              .on('crmConfirm:no', function() { scope.$apply(attrs.onNo); });

            if (tpl && stubId) {
              $q.when(tpl, function(html) {
                var scope = options.scope || $rootScope.$new();
                if (options.export) {
                  angular.extend(scope, options.export);
                }
                var linker = $compile(html);
                $('#' + stubId).append($(linker(scope)));
              });
            }
          });
        }
      };
    })




    .directive('crmPageTitle', function($timeout) {
      return {
        scope: {
          crmDocumentTitle: '='
        },
        link: function(scope, $el, attrs) {
          function update() {
            $timeout(function() {
              var newPageTitle = _.trim($el.html()),
                newDocumentTitle = scope.crmDocumentTitle || $el.text();
              document.title = $('title').text().replace(documentTitle, newDocumentTitle);

              $('h1').not('.crm-container h1').each(function() {
                if (_.trim($(this).html()) === pageTitle) {
                  $(this).addClass('crm-page-title').html(newPageTitle);
                  $el.hide();
                }
              });
              pageTitle = newPageTitle;
              documentTitle = newDocumentTitle;
            });
          }

          scope.$watch(function() {return scope.crmDocumentTitle + $el.html();}, update);
        }
      };
    })

    .run(function($rootScope, $location) {

      $rootScope.goto = function(path) {
        $location.path(path);
      };

    })
  ;

})(angular, CRM.$, CRM._);

(function (angular, $, _) {
  angular.module('crmUtil', CRM.angRequires('crmUtil'));


  //





  angular.module('crmUtil').factory('crmApi', function($q) {
    var crmApi = function(entity, action, params, message) {

      var deferred = $q.defer();
      var p;
      var backend = crmApi.backend || CRM.api3;
      if (params && params.body_html) {


        params.body_html = params.body_html.replace(/([\u2028]|[\u2029])/g, '\n');
      }
      if (_.isObject(entity)) {

        /*jshint -W061 */
        p = backend(eval('('+angular.toJson(entity)+')'), action);
      } else {

        /*jshint -W061 */
        p = backend(entity, action, eval('('+angular.toJson(params)+')'), message);
      }


      p.then(
        function(result) {
          if (result.is_error) {
            deferred.reject(result);
          } else {
            deferred.resolve(result);
          }
        },
        function(error) {
          deferred.reject(error);
        }
      );
      return deferred.promise;
    };
    crmApi.backend = null;
    crmApi.val = function(value) {
      var d = $.Deferred();
      d.resolve(value);
      return d.promise();
    };
    return crmApi;
  });





  angular.module('crmUtil').factory('crmMetadata', function($q, crmApi) {

    function convertOptionsToMap(options) {
      var result = {};
      angular.forEach(options, function(o) {
        result[o.key] = o.value;
      });
      return result;
    }

    var cache = {}; // cache[entityName+'::'+action][fieldName].title
    var deferreds = {}; // deferreds[cacheKey].push($q.defer())
    var crmMetadata = {

      getField: function getField(entity, field) {
        return $q.when(crmMetadata.getFields(entity)).then(function(fields){
          return fields[field];
        });
      },


      getFields: function getFields(entity) {
        var action = '', cacheKey;
        if (_.isArray(entity)) {
          action = entity[1];
          entity = entity[0];
          cacheKey = entity + '::' + action;
        } else {
          cacheKey = entity;
        }

        if (_.isObject(cache[cacheKey])) {
          return cache[cacheKey];
        }

        var needFetch = _.isEmpty(deferreds[cacheKey]);
        deferreds[cacheKey] = deferreds[cacheKey] || [];
        var deferred = $q.defer();
        deferreds[cacheKey].push(deferred);

        if (needFetch) {
          crmApi(entity, 'getfields', {action: action, sequential: 1, options: {get_options: 'all'}})
            .then(

            function(fields) {
              cache[cacheKey] = _.indexBy(fields.values, 'name');
              angular.forEach(cache[cacheKey],function (field){
                if (field.options) {
                  field.optionsMap = convertOptionsToMap(field.options);
                }
              });
              angular.forEach(deferreds[cacheKey], function(dfr) {
                dfr.resolve(cache[cacheKey]);
              });
              delete deferreds[cacheKey];
            },

            function() {
              cache[cacheKey] = {}; // cache nack
              angular.forEach(deferreds[cacheKey], function(dfr) {
                dfr.reject();
              });
              delete deferreds[cacheKey];
            }
          );
        }

        return deferred.promise;
      }
    };

    return crmMetadata;
  });




  angular.module('crmUtil').factory('crmBlocker', function() {
    return function() {
      var blocks = 0;
      var result = function(promise) {
        blocks++;
        return promise.finally(function() {
          blocks--;
        });
      };
      result.check = function() {
        return blocks > 0;
      };
      return result;
    };
  });

  angular.module('crmUtil').factory('crmLegacy', function() {
    return CRM;
  });

  angular.module('crmUtil').factory('crmLog', function(){
    var level = 0;
    var write = console.log;
    function indent() {
      var s = '>';
      for (var i = 0; i < level; i++) s = s + '  ';
      return s;
    }
    var crmLog = {
      log: function(msg, vars) {
        write(indent() + msg, vars);
      },
      wrap: function(label, f) {
        return function(){
          level++;
          crmLog.log(label + ": start", arguments);
          var r;
          try {
            r = f.apply(this, arguments);
          } finally {
            crmLog.log(label + ": end");
            level--;
          }
          return r;
        };
      }
    };
    return crmLog;
  });

  angular.module('crmUtil').factory('crmNavigator', ['$window', function($window) {
    return {
      redirect: function(path) {
        $window.location.href = path;
      }
    };
  }]);



  angular.module('crmUtil').factory('crmQueue', function($q) {

    return function crmQueue(worker) {
      var queue = [];
      function next() {
        var task = queue[0];
        worker.apply(null, task.a).then(
          function onOk(data) {
            queue.shift();
            task.dfr.resolve(data);
            if (queue.length > 0) next();
          },
          function onErr(err) {
            queue.shift();
            task.dfr.reject(err);
            if (queue.length > 0) next();
          }
        );
      }
      function enqueue() {
        var dfr = $q.defer();
        queue.push({a: arguments, dfr: dfr});
        if (queue.length === 1) {
          next();
        }
        return dfr.promise;
      }
      return enqueue;
    };
  });


  angular.module('crmUtil').factory('crmStatus', function($q){
    return function(options, aPromise){
      if (aPromise) {
        return CRM.toAPromise($q, CRM.status(options, CRM.toJqPromise(aPromise)));
      } else {
        return CRM.toAPromise($q, CRM.status(options));
      }
    };
  });


  //
















  angular.module('crmUtil').factory('crmWatcher', function(){
    return function() {
      var unwatches = {}, watchFactories = {}, suspends = {};

      this.setup = function(name, newWatchFactory) {
        watchFactories[name] = newWatchFactory;
        unwatches[name] = watchFactories[name]();
        suspends[name] = 0;
        return this;
      };

      this.suspend = function(name, f) {
        suspends[name]++;
        this.teardown(name);
        var r;
        try {
          r = f.apply(this, []);
        } finally {
          if (suspends[name] === 1) {
            unwatches[name] = watchFactories[name]();
            if (!angular.isArray(unwatches[name])) {
              unwatches[name] = [unwatches[name]];
            }
          }
          suspends[name]--;
        }
        return r;
      };

      this.teardown = function(name) {
        if (!unwatches[name]) return;
        _.each(unwatches[name], function(unwatch){
          unwatch();
        });
        delete unwatches[name];
      };

      return this;
    };
  });




  angular.module('crmUtil').factory('crmThrottle', function($q) {
    var pending = [],
      executing = [];
    return function(func) {
      var deferred = $q.defer();

      function checkResult(result, success) {
        _.pull(executing, func);
        if (_.includes(pending, func)) {
          runNext();
        } else if (success) {
          deferred.resolve(result);
        } else {
          deferred.reject(result);
        }
      }

      function runNext() {
        executing.push(func);
        _.pull(pending, func);
        func().then(function(result) {
          checkResult(result, true);
        }, function(result) {
          checkResult(result, false);
        });
      }

      if (!_.includes(executing, func)) {
        runNext();
      } else if (!_.includes(pending, func)) {
        pending.push(func);
      }
      return deferred.promise;
    };
  });

})(angular, CRM.$, CRM._);

(function($, angular){
angular.module('dialogService', []).service('dialogService',
	['$rootScope', '$q', '$compile', '$templateCache', '$http',
	function($rootScope, $q, $compile, $templateCache, $http) {

			var _this = this;
			_this.dialogs = {};

			this.open = function(id, template, model, options) {

				if (!angular.isDefined(id)) {
					throw "dialogService requires id in call to open";
				}

				if (!angular.isDefined(template)) {
					throw "dialogService requires template in call to open";
				}

				if (!angular.isDefined(model)) {
					model = null;
				}




				var dialogOptions = {};
				if (angular.isDefined(options)) {
					angular.extend(dialogOptions, options);
				}

				var dialog = { scope: null, ref: null, deferred: $q.defer() };

				loadTemplate(template).then(
					function(dialogTemplate) {

						dialog.scope = $rootScope.$new();
						dialog.scope.model = model;
						var dialogLinker = $compile(dialogTemplate);
						dialog.ref = $(dialogLinker(dialog.scope));



						var customCloseFn = dialogOptions.close;
						dialogOptions.close = function(event, ui) {
							if (customCloseFn) {
								customCloseFn(event, ui);
							}
							cleanup(id);
						};

						dialog.ref.dialog(dialogOptions);
						dialog.ref.dialog("open");

						_this.dialogs[id] = dialog;

					}, function(error) {
						throw error;
					}
				);

				return dialog.deferred.promise;
			};

			this.close = function(id, result) {

				var dialog = getExistingDialog(id);



				dialog.deferred.resolve(result);

				dialog.ref.dialog("close");
			};

			this.cancel = function(id) {

				var dialog = getExistingDialog(id);



				dialog.deferred.reject();

				dialog.ref.dialog("close");
			};

			this.setButtons = function(id, buttons) {
				var dialog = getExistingDialog(id);
				dialog.ref.dialog("option", 'buttons', buttons);
			};

			function cleanup (id) {

				var dialog = getExistingDialog(id);



				dialog.deferred.reject();
				dialog.scope.$destroy();

				dialog.ref.remove();

				delete _this.dialogs[id];
			};

			function getExistingDialog(id) {

				var dialog = _this.dialogs[id];

				if (!angular.isDefined(dialog)) {
					throw "DialogService does not have a reference to dialog id " + id;
				}
				return dialog;
			};

			function loadTemplate(template) {

				var deferred = $q.defer();
				var html = $templateCache.get(template);

				if (angular.isDefined(html)) {

					html = html.trim();
					deferred.resolve(html);
				} else {

					return $http.get(template, { cache : $templateCache }).then(
						function(response) {
							var html = response.data;
							if(!html || !html.length) {

								return $q.reject("Template " + template + " was not found");
							}
							html = html.trim();

							$templateCache.put(template, html);
							return html;
						}, function() {
							return $q.reject("Template " + template + " was not found");
			        	}
			        );
				}
			    return deferred.promise;
			}
		}
]);
})(jQuery, angular);

/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E,d){'use strict';function y(t,l,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(b,e,a,c,k){function p(){m&&(g.cancel(m),m=null);h&&(h.$destroy(),h=null);n&&(m=g.leave(n),m.done(function(b){!1!==b&&(m=null)}),n=null)}function B(){var a=t.current&&t.current.locals;if(d.isDefined(a&&a.$template)){var a=b.$new(),c=t.current;n=k(a,function(a){g.enter(a,null,n||e).done(function(a){!1===a||!d.isDefined(A)||A&&!b.$eval(A)||l()});p()});h=c.scope=a;h.$emit("$viewContentLoaded");
h.$eval(s)}else p()}var h,n,m,A=a.autoscroll,s=a.onload||"";b.$on("$routeChangeSuccess",B);B()}}}function w(d,l,g){return{restrict:"ECA",priority:-400,link:function(b,e){var a=g.current,c=a.locals;e.html(c.$template);var k=d(e.contents());if(a.controller){c.$scope=b;var p=l(a.controller,c);a.controllerAs&&(b[a.controllerAs]=p);e.data("$ngControllerController",p);e.children().data("$ngControllerController",p)}b[a.resolveAs||"$resolve"]=c;k(b)}}}var x,C,s=d.module("ngRoute",["ng"]).provider("$route",
function(){function t(b,e){return d.extend(Object.create(b),e)}function l(b,d){var a=d.caseInsensitiveMatch,c={originalPath:b,regexp:b},g=c.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(b,a,d,c){b="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!b});a=a||"";return""+(b?"":a)+"(?:"+(b?a:"")+(c&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([/$*])/g,"\\$1");c.regexp=new RegExp("^"+b+"$",a?"i":"");return c}x=d.isArray;C=d.isObject;
var g={};this.when=function(b,e){var a;a=void 0;if(x(e)){a=a||[];for(var c=0,k=e.length;c<k;c++)a[c]=e[c]}else if(C(e))for(c in a=a||{},e)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=e[c];a=a||e;d.isUndefined(a.reloadOnSearch)&&(a.reloadOnSearch=!0);d.isUndefined(a.caseInsensitiveMatch)&&(a.caseInsensitiveMatch=this.caseInsensitiveMatch);g[b]=d.extend(a,b&&l(b,a));b&&(c="/"===b[b.length-1]?b.substr(0,b.length-1):b+"/",g[c]=d.extend({redirectTo:b},l(c,a)));return this};this.caseInsensitiveMatch=!1;
this.otherwise=function(b){"string"===typeof b&&(b={redirectTo:b});this.when(null,b);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(b,e,a,c,k,p,l){function h(a){var f=v.current;(x=(r=y())&&f&&r.$$route===f.$$route&&d.equals(r.pathParams,f.pathParams)&&!r.reloadOnSearch&&!z)||!f&&!r||b.$broadcast("$routeChangeStart",r,f).defaultPrevented&&a&&a.preventDefault()}function n(){var u=v.current,f=r;if(x)u.params=f.params,d.copy(u.params,
a),b.$broadcast("$routeUpdate",u);else if(f||u)z=!1,(v.current=f)&&f.redirectTo&&(d.isString(f.redirectTo)?e.path(w(f.redirectTo,f.params)).search(f.params).replace():e.url(f.redirectTo(f.pathParams,e.path(),e.search())).replace()),c.when(f).then(m).then(function(c){f===v.current&&(f&&(f.locals=c,d.copy(f.params,a)),b.$broadcast("$routeChangeSuccess",f,u))},function(a){f===v.current&&b.$broadcast("$routeChangeError",f,u,a)})}function m(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,
c){b[c]=d.isString(a)?k.get(a):k.invoke(a,null,null,c)});a=s(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function s(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=l.valueOf(c),b=p(c)));return b}function y(){var a,b;d.forEach(g,function(c,g){var q;if(q=!b){var h=e.path();q=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=q[k-1],
n=h[k];m&&n&&(l[m.name]=n)}q=l}else q=null;else q=null;q=a=q}q&&(b=t(c,{params:d.extend({},e.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function w(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),g=e[1];c.push(b[g]);c.push(e[2]||"");delete b[g]}});return c.join("")}var z=!1,r,x,v={routes:g,reload:function(){z=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=
!0;z=!1}};b.$evalAsync(function(){h(a);a.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),e.path(w(this.current.$$route.originalPath,a)),e.search(a);else throw D("norout");}};b.$on("$locationChangeStart",h);b.$on("$locationChangeSuccess",n);return v}]}),D=d.$$minErr("ngRoute");s.provider("$routeParams",function(){this.$get=function(){return{}}});s.directive("ngView",y);s.directive("ngView",w);y.$inject=["$route","$anchorScroll",
"$animate"];w.$inject=["$compile","$controller","$route"]})(window,window.angular);


/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,g){'use strict';function H(g){var l=[];t(l,A).chars(g);return l.join("")}var B=g.$$minErr("$sanitize"),C,l,D,E,q,A,F,t;g.module("ngSanitize",[]).provider("$sanitize",function(){function k(a,e){var b={},c=a.split(","),h;for(h=0;h<c.length;h++)b[e?q(c[h]):c[h]]=!0;return b}function I(a){for(var e={},b=0,c=a.length;b<c;b++){var h=a[b];e[h.name]=h.value}return e}function G(a){return a.replace(/&/g,"&amp;").replace(J,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(K,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function x(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,b=0,c=e.length;b<c;b++){var h=e[b],d=h.name.toLowerCase();if("xmlns:ns1"===d||0===d.lastIndexOf("ns1:",0))a.removeAttributeNode(h),b--,c--}(e=a.firstChild)&&x(e);a=a.nextSibling}}var u=!1;this.$get=["$$sanitizeUri",function(a){u&&l(v,w);return function(e){var b=[];F(e,t(b,function(b,h){return!/^unsafe:/.test(a(b,
h))}));return b.join("")}}];this.enableSvg=function(a){return E(a)?(u=a,this):u};C=g.bind;l=g.extend;D=g.forEach;E=g.isDefined;q=g.lowercase;A=g.noop;F=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);f.innerHTML=a;var b=5;do{if(0===b)throw B("uinput");b--;s.document.documentMode&&x(f);a=f.innerHTML;f.innerHTML=a}while(a!==f.innerHTML);for(b=f.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),I(b.attributes));break;case 3:e.chars(b.textContent)}var c;if(!(c=
b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),c=b.nextSibling,!c))for(;null==c;){b=b.parentNode;if(b===f)break;c=b.nextSibling;1===b.nodeType&&e.end(b.nodeName.toLowerCase())}b=c}for(;b=f.firstChild;)f.removeChild(b)};t=function(a,e){var b=!1,c=C(a,a.push);return{start:function(a,d){a=q(a);!b&&z[a]&&(b=a);b||!0!==v[a]||(c("<"),c(a),D(d,function(b,d){var f=q(d),g="img"===a&&"src"===f||"background"===f;!0!==m[f]||!0===n[f]&&!e(b,g)||(c(" "),c(d),c('="'),c(G(b)),c('"'))}),c(">"))},
end:function(a){a=q(a);b||!0!==v[a]||!0===y[a]||(c("</"),c(a),c(">"));a==b&&(b=!1)},chars:function(a){b||c(G(a))}}};var J=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,K=/([^#-~ |!])/g,y=k("area,br,col,hr,img,wbr"),d=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),r=k("rp,rt"),p=l({},r,d),d=l({},d,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),r=l({},r,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
w=k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),z=k("script,style"),v=l({},y,d,r,p),n=k("background,cite,href,longdesc,src,xlink:href"),p=k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
r=k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),m=l({},n,r,p),f;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw B("noinert");var e=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===e.length?f=e[0]:(e=a.createElement("html"),f=a.createElement("body"),e.appendChild(f),a.appendChild(e))})(s)});g.module("ngSanitize").filter("linky",["$sanitize",function(k){var l=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
q=/^mailto:/i,x=g.$$minErr("linky"),u=g.isDefined,s=g.isFunction,t=g.isObject,y=g.isString;return function(d,g,p){function w(a){a&&m.push(H(a))}function z(a,b){var c,d=v(a);m.push("<a ");for(c in d)m.push(c+'="'+d[c]+'" ');!u(g)||"target"in d||m.push('target="',g,'" ');m.push('href="',a.replace(/"/g,"&quot;"),'">');w(b);m.push("</a>")}if(null==d||""===d)return d;if(!y(d))throw x("notstring",d);for(var v=s(p)?p:t(p)?function(){return p}:function(){return{}},n=d,m=[],f,a;d=n.match(l);)f=d[0],d[2]||
d[4]||(f=(d[3]?"http://":"mailto:")+f),a=d.index,w(n.substr(0,a)),z(f,d[0].replace(q,"")),n=n.substring(a+d[0].length);w(n);return k(m.join(""))}}])})(window,window.angular);


(function(angular, $, _) {
  angular.module('statuspage', CRM.angRequires('statuspage'));

  angular.module('statuspage').config( function($routeProvider) {
    $routeProvider.when('/status', {
      controller: 'statuspageStatusPage',
      templateUrl: '~/statuspage/StatusPage.html',

      resolve: {
        statusData: function(crmApi) {
          return crmApi('System', 'check', {sequential: 1});
        }
      }
    });

  }
);



  angular.module('statuspage').controller('statuspageStatusPage',
    function($scope, crmApi, crmStatus, statusData) {
      $scope.ts = CRM.ts();
      $scope.help = CRM.help;
      $scope.formatDate = CRM.utils.formatDate;
      $scope.statuses = statusData.values;

      function refresh(apiCalls, title) {
        title = title || 'Untitled operation';
        apiCalls = (apiCalls || []).concat([['System', 'check', {sequential: 1}]]);
        $('#crm-status-list').block();
        crmApi(apiCalls, true)
          .then(function(results) {
            $scope.statuses = results[results.length - 1].values;
            results.forEach(function(result) {
              if (result.is_error) {
                var error_message = ts(result.error_message);
                if (typeof(result.debug_information) !== 'undefined') {
                  error_message += '<div class="status-debug-information">' +
                      '<b>' + ts('Debug information') + ':</b><br>' +
                      result.debug_information + '</div>';
                }
                CRM.alert(error_message, ts('Operation failed: ' + title), 'error');
                }
              });
            $('#crm-status-list').unblock();
          });
      }

      $scope.setPref = function(status, until, visible) {
        refresh([
          ['StatusPreference', 'create', {
            name: status.name,
            ignore_severity: visible ? 0 : status.severity,
            hush_until: until
          }]
        ], 'Set preference');
      };
      
      $scope.countVisible = function(visibility) {
        return _.filter($scope.statuses, function(s) {
          return s.is_visible == visibility && s.severity_id >= 2;
        }).length;
      };

      $scope.doAction = function(action) {
        function run() {
          switch (action.type) {
            case 'href':
              window.location = CRM.url(action.params.path, action.params.query, action.params.mode);
              break;

            case 'api3':
              refresh([action.params], action.title);
              break;
          }
        }

        if (action.confirm) {
          CRM.confirm({
            title: action.title,
            message: action.confirm
          }).on('crmConfirm:yes', run);
        } else {
          run();
        }
      };
    });




  angular.module('statuspage')
    .filter('trusted', function($sce){ return $sce.trustAsHtml; })

    .directive('statuspagePopupMenu', function($timeout) {
      return {
        templateUrl: '~/statuspage/SnoozeOptions.html',
        transclude: true,

        link: function(scope, element, attr) {
          element.on('click', '.hush-menu-button', function() {
            $timeout(function() {
              $('ul', element).show().menu();
              element.closest('h3').addClass('menuopen');
              $('body').one('click', function() {
                $('ul', element).menu('destroy').hide();
                element.closest('h3').removeClass('menuopen');
              });
            });
          });

          element.on('click', 'button:not(.hush-menu-button), li', function() {
            $(this).closest('div.crm-status-item').slideUp();
          });
        }
      };
    });

})(angular, CRM.$, CRM._);

!function(a,b){"use strict";b.module("ui.sortable",[]).value("uiSortableConfig",{}).directive("uiSortable",["uiSortableConfig","$timeout","$log",function(a,c,d){return{require:"?ngModel",link:function(e,f,g,h){function i(a,b){return b&&"function"==typeof b?function(c,d){a(c,d),b(c,d)}:a}function j(a,b){var c=a.sortable("option","helper");return"clone"===c||"function"==typeof c&&b.item.sortable.isCustomHelperUsed()}var k,l={},m={receive:null,remove:null,start:null,stop:null,update:null},n={helper:null};return b.extend(l,a,e.$eval(g.uiSortable)),b.element.fn&&b.element.fn.jquery?(h?(e.$watch(g.ngModel+".length",function(){c(function(){f.data("ui-sortable")&&f.sortable("refresh")})}),m.start=function(a,b){b.item.sortable={index:b.item.index(),cancel:function(){b.item.sortable._isCanceled=!0},isCanceled:function(){return b.item.sortable._isCanceled},isCustomHelperUsed:function(){return!!b.item.sortable._isCustomHelperUsed},_isCanceled:!1,_isCustomHelperUsed:b.item.sortable._isCustomHelperUsed}},m.activate=function(){k=f.contents();var a=f.sortable("option","placeholder");if(a&&a.element&&"function"==typeof a.element){var c=a.element();c=b.element(c);var d=f.find('[class="'+c.attr("class")+'"]');k=k.not(d)}},m.update=function(a,b){b.item.sortable.received||(b.item.sortable.dropindex=b.item.index(),b.item.sortable.droptarget=b.item.parent(),f.sortable("cancel")),j(f,b)&&!b.item.sortable.received&&"parent"===f.sortable("option","appendTo")&&(k=k.not(k.last())),k.appendTo(f),b.item.sortable.received&&(k=null),b.item.sortable.received&&!b.item.sortable.isCanceled()&&e.$apply(function(){h.$modelValue.splice(b.item.sortable.dropindex,0,b.item.sortable.moved)})},m.stop=function(a,b){!b.item.sortable.received&&"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()?e.$apply(function(){h.$modelValue.splice(b.item.sortable.dropindex,0,h.$modelValue.splice(b.item.sortable.index,1)[0])}):"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()||j(f,b)||k.appendTo(f),k=null},m.receive=function(a,b){b.item.sortable.received=!0},m.remove=function(a,b){"dropindex"in b.item.sortable||(f.sortable("cancel"),b.item.sortable.cancel()),b.item.sortable.isCanceled()||e.$apply(function(){b.item.sortable.moved=h.$modelValue.splice(b.item.sortable.index,1)[0]})},n.helper=function(a){return a&&"function"==typeof a?function(b,c){var d=a(b,c);return c.sortable._isCustomHelperUsed=c!==d,d}:a},e.$watch(g.uiSortable,function(a){f.data("ui-sortable")&&b.forEach(a,function(a,b){m[b]?("stop"===b&&(a=i(a,function(){e.$apply()})),a=i(m[b],a)):n[b]&&(a=n[b](a)),f.sortable("option",b,a)})},!0),b.forEach(m,function(a,b){l[b]=i(a,l[b])})):d.info("ui.sortable: ngModel not provided!",f),void f.sortable(l)):void d.error("ui.sortable: jQuery should be included before AngularJS!")}}}])}(window,window.angular);
/**
 * angular-ui-utils - Swiss-Army-Knife of AngularJS tools (with no external dependencies!)
 * @version v0.1.1 - 2014-02-05
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";angular.module("ui.alias",[]).config(["$compileProvider","uiAliasConfig",function(a,b){b=b||{},angular.forEach(b,function(b,c){angular.isString(b)&&(b={replace:!0,template:b}),a.directive(c,function(){return b})})}]),angular.module("ui.event",[]).directive("uiEvent",["$parse",function(a){return function(b,c,d){var e=b.$eval(d.uiEvent);angular.forEach(e,function(d,e){var f=a(d);c.bind(e,function(a){var c=Array.prototype.slice.call(arguments);c=c.splice(1),f(b,{$event:a,$params:c}),b.$$phase||b.$apply()})})}}]),angular.module("ui.format",[]).filter("format",function(){return function(a,b){var c=a;if(angular.isString(c)&&void 0!==b)if(angular.isArray(b)||angular.isObject(b)||(b=[b]),angular.isArray(b)){var d=b.length,e=function(a,c){return c=parseInt(c,10),c>=0&&d>c?b[c]:a};c=c.replace(/\$([0-9]+)/g,e)}else angular.forEach(b,function(a,b){c=c.split(":"+b).join(a)});return c}}),angular.module("ui.highlight",[]).filter("highlight",function(){return function(a,b,c){return b||angular.isNumber(b)?(a=a.toString(),b=b.toString(),c?a.split(b).join('<span class="ui-match">'+b+"</span>"):a.replace(new RegExp(b,"gi"),'<span class="ui-match">$&</span>')):a}}),angular.module("ui.include",[]).directive("uiInclude",["$http","$templateCache","$anchorScroll","$compile",function(a,b,c,d){return{restrict:"ECA",terminal:!0,compile:function(e,f){var g=f.uiInclude||f.src,h=f.fragment||"",i=f.onload||"",j=f.autoscroll;return function(e,f){function k(){var k=++m,o=e.$eval(g),p=e.$eval(h);o?a.get(o,{cache:b}).success(function(a){if(k===m){l&&l.$destroy(),l=e.$new();var b;b=p?angular.element("<div/>").html(a).find(p):angular.element("<div/>").html(a).contents(),f.html(b),d(b)(l),!angular.isDefined(j)||j&&!e.$eval(j)||c(),l.$emit("$includeContentLoaded"),e.$eval(i)}}).error(function(){k===m&&n()}):n()}var l,m=0,n=function(){l&&(l.$destroy(),l=null),f.html("")};e.$watch(h,k),e.$watch(g,k)}}}}]),angular.module("ui.indeterminate",[]).directive("uiIndeterminate",[function(){return{compile:function(a,b){return b.type&&"checkbox"===b.type.toLowerCase()?function(a,b,c){a.$watch(c.uiIndeterminate,function(a){b[0].indeterminate=!!a})}:angular.noop}}}]),angular.module("ui.inflector",[]).filter("inflector",function(){function a(a){return a.replace(/^([a-z])|\s+([a-z])/g,function(a){return a.toUpperCase()})}function b(a,b){return a.replace(/[A-Z]/g,function(a){return b+a})}var c={humanize:function(c){return a(b(c," ").split("_").join(" "))},underscore:function(a){return a.substr(0,1).toLowerCase()+b(a.substr(1),"_").toLowerCase().split(" ").join("_")},variable:function(b){return b=b.substr(0,1).toLowerCase()+a(b.split("_").join(" ")).substr(1).split(" ").join("")}};return function(a,b){return b!==!1&&angular.isString(a)?(b=b||"humanize",c[b](a)):a}}),angular.module("ui.jq",[]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","$timeout",function(a,b){return{restrict:"A",compile:function(c,d){if(!angular.isFunction(c[d.uiJq]))throw new Error('ui-jq: The "'+d.uiJq+'" function does not exist');var e=a&&a[d.uiJq];return function(a,c,d){function f(){b(function(){c[d.uiJq].apply(c,g)},0,!1)}var g=[];d.uiOptions?(g=a.$eval("["+d.uiOptions+"]"),angular.isObject(e)&&angular.isObject(g[0])&&(g[0]=angular.extend({},e,g[0]))):e&&(g=[e]),d.ngModel&&c.is("select,input,textarea")&&c.bind("change",function(){c.trigger("input")}),d.uiRefresh&&a.$watch(d.uiRefresh,function(){f()}),f()}}}}]),angular.module("ui.keypress",[]).factory("keypressHelper",["$parse",function(a){var b={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete"},c=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};return function(d,e,f,g){var h,i=[];h=e.$eval(g["ui"+c(d)]),angular.forEach(h,function(b,c){var d,e;e=a(b),angular.forEach(c.split(" "),function(a){d={expression:e,keys:{}},angular.forEach(a.split("-"),function(a){d.keys[a]=!0}),i.push(d)})}),f.bind(d,function(a){var c=!(!a.metaKey||a.ctrlKey),f=!!a.altKey,g=!!a.ctrlKey,h=!!a.shiftKey,j=a.keyCode;"keypress"===d&&!h&&j>=97&&122>=j&&(j-=32),angular.forEach(i,function(d){var i=d.keys[b[j]]||d.keys[j.toString()],k=!!d.keys.meta,l=!!d.keys.alt,m=!!d.keys.ctrl,n=!!d.keys.shift;i&&k===c&&l===f&&m===g&&n===h&&e.$apply(function(){d.expression(e,{$event:a})})})})}}]),angular.module("ui.keypress").directive("uiKeydown",["keypressHelper",function(a){return{link:function(b,c,d){a("keydown",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeypress",["keypressHelper",function(a){return{link:function(b,c,d){a("keypress",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeyup",["keypressHelper",function(a){return{link:function(b,c,d){a("keyup",b,c,d)}}}]),angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/}}).directive("uiMask",["uiMaskConfig",function(a){return{priority:100,require:"ngModel",restrict:"A",compile:function(){var b=a;return function(a,c,d,e){function f(a){return angular.isDefined(a)?(s(a),N?(k(),l(),!0):j()):j()}function g(a){angular.isDefined(a)&&(D=a,N&&w())}function h(a){return N?(G=o(a||""),I=n(G),e.$setValidity("mask",I),I&&G.length?p(G):void 0):a}function i(a){return N?(G=o(a||""),I=n(G),e.$viewValue=G.length?p(G):"",e.$setValidity("mask",I),""===G&&void 0!==e.$error.required&&e.$setValidity("required",!1),I?G:void 0):a}function j(){return N=!1,m(),angular.isDefined(P)?c.attr("placeholder",P):c.removeAttr("placeholder"),angular.isDefined(Q)?c.attr("maxlength",Q):c.removeAttr("maxlength"),c.val(e.$modelValue),e.$viewValue=e.$modelValue,!1}function k(){G=K=o(e.$modelValue||""),H=J=p(G),I=n(G);var a=I&&G.length?H:"";d.maxlength&&c.attr("maxlength",2*B[B.length-1]),c.attr("placeholder",D),c.val(a),e.$viewValue=a}function l(){O||(c.bind("blur",t),c.bind("mousedown mouseup",u),c.bind("input keyup click focus",w),O=!0)}function m(){O&&(c.unbind("blur",t),c.unbind("mousedown",u),c.unbind("mouseup",u),c.unbind("input",w),c.unbind("keyup",w),c.unbind("click",w),c.unbind("focus",w),O=!1)}function n(a){return a.length?a.length>=F:!0}function o(a){var b="",c=C.slice();return a=a.toString(),angular.forEach(E,function(b){a=a.replace(b,"")}),angular.forEach(a.split(""),function(a){c.length&&c[0].test(a)&&(b+=a,c.shift())}),b}function p(a){var b="",c=B.slice();return angular.forEach(D.split(""),function(d,e){a.length&&e===c[0]?(b+=a.charAt(0)||"_",a=a.substr(1),c.shift()):b+=d}),b}function q(a){var b=d.placeholder;return"undefined"!=typeof b&&b[a]?b[a]:"_"}function r(){return D.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function s(a){var b=0;if(B=[],C=[],D="","string"==typeof a){F=0;var c=!1,d=a.split("");angular.forEach(d,function(a,d){R.maskDefinitions[a]?(B.push(b),D+=q(d),C.push(R.maskDefinitions[a]),b++,c||F++):"?"===a?c=!0:(D+=a,b++)})}B.push(B.slice().pop()+1),E=r(),N=B.length>1?!0:!1}function t(){L=0,M=0,I&&0!==G.length||(H="",c.val(""),a.$apply(function(){e.$setViewValue("")}))}function u(a){"mousedown"===a.type?c.bind("mouseout",v):c.unbind("mouseout",v)}function v(){M=A(this),c.unbind("mouseout",v)}function w(b){b=b||{};var d=b.which,f=b.type;if(16!==d&&91!==d){var g,h=c.val(),i=J,j=o(h),k=K,l=!1,m=y(this)||0,n=L||0,q=m-n,r=B[0],s=B[j.length]||B.slice().shift(),t=M||0,u=A(this)>0,v=t>0,w=h.length>i.length||t&&h.length>i.length-t,C=h.length<i.length||t&&h.length===i.length-t,D=d>=37&&40>=d&&b.shiftKey,E=37===d,F=8===d||"keyup"!==f&&C&&-1===q,G=46===d||"keyup"!==f&&C&&0===q&&!v,H=(E||F||"click"===f)&&m>r;if(M=A(this),!D&&(!u||"click"!==f&&"keyup"!==f)){if("input"===f&&C&&!v&&j===k){for(;F&&m>r&&!x(m);)m--;for(;G&&s>m&&-1===B.indexOf(m);)m++;var I=B.indexOf(m);j=j.substring(0,I)+j.substring(I+1),l=!0}for(g=p(j),J=g,K=j,c.val(g),l&&a.$apply(function(){e.$setViewValue(j)}),w&&r>=m&&(m=r+1),H&&m--,m=m>s?s:r>m?r:m;!x(m)&&m>r&&s>m;)m+=H?-1:1;(H&&s>m||w&&!x(n))&&m++,L=m,z(this,m)}}}function x(a){return B.indexOf(a)>-1}function y(a){if(!a)return 0;if(void 0!==a.selectionStart)return a.selectionStart;if(document.selection){a.focus();var b=document.selection.createRange();return b.moveStart("character",-a.value.length),b.text.length}return 0}function z(a,b){if(!a)return 0;if(0!==a.offsetWidth&&0!==a.offsetHeight)if(a.setSelectionRange)a.focus(),a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}}function A(a){return a?void 0!==a.selectionStart?a.selectionEnd-a.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var B,C,D,E,F,G,H,I,J,K,L,M,N=!1,O=!1,P=d.placeholder,Q=d.maxlength,R={};d.uiOptions?(R=a.$eval("["+d.uiOptions+"]"),angular.isObject(R[0])&&(R=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]?angular.extend(b[c],a[c]):b[c]=angular.copy(a[c]));return b}(b,R[0]))):R=b,d.$observe("uiMask",f),d.$observe("placeholder",g),e.$formatters.push(h),e.$parsers.push(i),c.bind("mousedown mouseup",u),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!==d?d=0:0!==d&&1/0!==d&&d!==-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1})}}}}]),angular.module("ui.reset",[]).value("uiResetConfig",null).directive("uiReset",["uiResetConfig",function(a){var b=null;return void 0!==a&&(b=a),{require:"ngModel",link:function(a,c,d,e){var f;f=angular.element('<a class="ui-reset" />'),c.wrap('<span class="ui-resetwrap" />').after(f),f.bind("click",function(c){c.preventDefault(),a.$apply(function(){e.$setViewValue(d.uiReset?a.$eval(d.uiReset):b),e.$render()})})}}}]),angular.module("ui.route",[]).directive("uiRoute",["$location","$parse",function(a,b){return{restrict:"AC",scope:!0,compile:function(c,d){var e;if(d.uiRoute)e="uiRoute";else if(d.ngHref)e="ngHref";else{if(!d.href)throw new Error("uiRoute missing a route or href property on "+c[0]);e="href"}return function(c,d,f){function g(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),(j=function(){i(c,a.path().indexOf(b)>-1)})()}function h(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),(j=function(){var d=new RegExp("^"+b+"$",["i"]);i(c,d.test(a.path()))})()}var i=b(f.ngModel||f.routeModel||"$uiRoute").assign,j=angular.noop;switch(e){case"uiRoute":f.uiRoute?h(f.uiRoute):f.$observe("uiRoute",h);break;case"ngHref":f.ngHref?g(f.ngHref):f.$observe("ngHref",g);break;case"href":g(f.href)}c.$on("$routeChangeSuccess",function(){j()}),c.$on("$stateChangeSuccess",function(){j()})}}}}]),angular.module("ui.scroll.jqlite",["ui.scroll"]).service("jqLiteExtras",["$log","$window",function(a,b){return{registerFor:function(a){var c,d,e,f,g,h,i;return d=angular.element.prototype.css,a.prototype.css=function(a,b){var c,e;return e=this,c=e[0],c&&3!==c.nodeType&&8!==c.nodeType&&c.style?d.call(e,a,b):void 0},h=function(a){return a&&a.document&&a.location&&a.alert&&a.setInterval},i=function(a,b,c){var d,e,f,g,i;return d=a[0],i={top:["scrollTop","pageYOffset","scrollLeft"],left:["scrollLeft","pageXOffset","scrollTop"]}[b],e=i[0],g=i[1],f=i[2],h(d)?angular.isDefined(c)?d.scrollTo(a[f].call(a),c):g in d?d[g]:d.document.documentElement[e]:angular.isDefined(c)?d[e]=c:d[e]},b.getComputedStyle?(f=function(a){return b.getComputedStyle(a,null)},c=function(a,b){return parseFloat(b)}):(f=function(a){return a.currentStyle},c=function(a,b){var c,d,e,f,g,h,i;return c=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,f=new RegExp("^("+c+")(?!px)[a-z%]+$","i"),f.test(b)?(i=a.style,d=i.left,g=a.runtimeStyle,h=g&&g.left,g&&(g.left=i.left),i.left=b,e=i.pixelLeft,i.left=d,h&&(g.left=h),e):parseFloat(b)}),e=function(a,b){var d,e,g,i,j,k,l,m,n,o,p,q,r;return h(a)?(d=document.documentElement[{height:"clientHeight",width:"clientWidth"}[b]],{base:d,padding:0,border:0,margin:0}):(r={width:[a.offsetWidth,"Left","Right"],height:[a.offsetHeight,"Top","Bottom"]}[b],d=r[0],l=r[1],m=r[2],k=f(a),p=c(a,k["padding"+l])||0,q=c(a,k["padding"+m])||0,e=c(a,k["border"+l+"Width"])||0,g=c(a,k["border"+m+"Width"])||0,i=k["margin"+l],j=k["margin"+m],n=c(a,i)||0,o=c(a,j)||0,{base:d,padding:p+q,border:e+g,margin:n+o})},g=function(a,b,c){var d,g,h;return g=e(a,b),g.base>0?{base:g.base-g.padding-g.border,outer:g.base,outerfull:g.base+g.margin}[c]:(d=f(a),h=d[b],(0>h||null===h)&&(h=a.style[b]||0),h=parseFloat(h)||0,{base:h-g.padding-g.border,outer:h,outerfull:h+g.padding+g.border+g.margin}[c])},angular.forEach({before:function(a){var b,c,d,e,f,g,h;if(f=this,c=f[0],e=f.parent(),b=e.contents(),b[0]===c)return e.prepend(a);for(d=g=1,h=b.length-1;h>=1?h>=g:g>=h;d=h>=1?++g:--g)if(b[d]===c)return void angular.element(b[d-1]).after(a);throw new Error("invalid DOM structure "+c.outerHTML)},height:function(a){var b;return b=this,angular.isDefined(a)?(angular.isNumber(a)&&(a+="px"),d.call(b,"height",a)):g(this[0],"height","base")},outerHeight:function(a){return g(this[0],"height",a?"outerfull":"outer")},offset:function(a){var b,c,d,e,f,g;return f=this,arguments.length?void 0===a?f:a:(b={top:0,left:0},e=f[0],(c=e&&e.ownerDocument)?(d=c.documentElement,e.getBoundingClientRect&&(b=e.getBoundingClientRect()),g=c.defaultView||c.parentWindow,{top:b.top+(g.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(g.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}):void 0)},scrollTop:function(a){return i(this,"top",a)},scrollLeft:function(a){return i(this,"left",a)}},function(b,c){return a.prototype[c]?void 0:a.prototype[c]=b})}}}]).run(["$log","$window","jqLiteExtras",function(a,b,c){return b.jQuery?void 0:c.registerFor(angular.element)}]),angular.module("ui.scroll",[]).directive("ngScrollViewport",["$log",function(){return{controller:["$scope","$element",function(a,b){return b}]}}]).directive("ngScroll",["$log","$injector","$rootScope","$timeout",function(a,b,c,d){return{require:["?^ngScrollViewport"],transclude:"element",priority:1e3,terminal:!0,compile:function(e,f,g){return function(f,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;if(H=i.ngScroll.match(/^\s*(\w+)\s+in\s+(\w+)\s*$/),!H)throw new Error('Expected ngScroll in form of "item_ in _datasource_" but got "'+i.ngScroll+'"');if(F=H[1],v=H[2],D=function(a){return angular.isObject(a)&&a.get&&angular.isFunction(a.get)},u=f[v],!D(u)&&(u=b.get(v),!D(u)))throw new Error(v+" is not a valid datasource");return r=Math.max(3,+i.bufferSize||10),q=function(){return T.height()*Math.max(.1,+i.padding||.1)},O=function(a){return a[0].scrollHeight||a[0].document.documentElement.scrollHeight},k=null,g(R=f.$new(),function(a){var b,c,d,f,g,h;if(f=a[0].localName,"dl"===f)throw new Error("ng-scroll directive does not support <"+a[0].localName+"> as a repeating tag: "+a[0].outerHTML);return"li"!==f&&"tr"!==f&&(f="div"),h=j[0]||angular.element(window),h.css({"overflow-y":"auto",display:"block"}),d=function(a){var b,c,d;switch(a){case"tr":return d=angular.element("<table><tr><td><div></div></td></tr></table>"),b=d.find("div"),c=d.find("tr"),c.paddingHeight=function(){return b.height.apply(b,arguments)},c;default:return c=angular.element("<"+a+"></"+a+">"),c.paddingHeight=c.height,c}},c=function(a,b,c){return b[{top:"before",bottom:"after"}[c]](a),{paddingHeight:function(){return a.paddingHeight.apply(a,arguments)},insert:function(b){return a[{top:"after",bottom:"before"}[c]](b)}}},g=c(d(f),e,"top"),b=c(d(f),e,"bottom"),R.$destroy(),k={viewport:h,topPadding:g.paddingHeight,bottomPadding:b.paddingHeight,append:b.insert,prepend:g.insert,bottomDataPos:function(){return O(h)-b.paddingHeight()},topDataPos:function(){return g.paddingHeight()}}}),T=k.viewport,B=1,I=1,p=[],J=[],x=!1,n=!1,G=u.loading||function(){},E=!1,L=function(a,b){var c,d;for(c=d=a;b>=a?b>d:d>b;c=b>=a?++d:--d)p[c].scope.$destroy(),p[c].element.remove();return p.splice(a,b-a)},K=function(){return B=1,I=1,L(0,p.length),k.topPadding(0),k.bottomPadding(0),J=[],x=!1,n=!1,l(!1)},o=function(){return T.scrollTop()+T.height()},S=function(){return T.scrollTop()},P=function(){return!x&&k.bottomDataPos()<o()+q()},s=function(){var b,c,d,e,f,g;for(b=0,e=0,c=f=g=p.length-1;(0>=g?0>=f:f>=0)&&(d=p[c].element.outerHeight(!0),k.bottomDataPos()-b-d>o()+q());c=0>=g?++f:--f)b+=d,e++,x=!1;return e>0?(k.bottomPadding(k.bottomPadding()+b),L(p.length-e,p.length),I-=e,a.log("clipped off bottom "+e+" bottom padding "+k.bottomPadding())):void 0},Q=function(){return!n&&k.topDataPos()>S()-q()},t=function(){var b,c,d,e,f,g;for(e=0,d=0,f=0,g=p.length;g>f&&(b=p[f],c=b.element.outerHeight(!0),k.topDataPos()+e+c<S()-q());f++)e+=c,d++,n=!1;return d>0?(k.topPadding(k.topPadding()+e),L(0,d),B+=d,a.log("clipped off top "+d+" top padding "+k.topPadding())):void 0},w=function(a,b){return E||(E=!0,G(!0)),1===J.push(a)?z(b):void 0},C=function(a,b){var c,d,e;return c=f.$new(),c[F]=b,d=a>B,c.$index=a,d&&c.$index--,e={scope:c},g(c,function(b){return e.element=b,d?a===I?(k.append(b),p.push(e)):(p[a-B].element.after(b),p.splice(a-B+1,0,e)):(k.prepend(b),p.unshift(e))}),{appended:d,wrapper:e}},m=function(a,b){var c;return a?k.bottomPadding(Math.max(0,k.bottomPadding()-b.element.outerHeight(!0))):(c=k.topPadding()-b.element.outerHeight(!0),c>=0?k.topPadding(c):T.scrollTop(T.scrollTop()+b.element.outerHeight(!0)))},l=function(b,c,e){var f;return f=function(){return a.log("top {actual="+k.topDataPos()+" visible from="+S()+" bottom {visible through="+o()+" actual="+k.bottomDataPos()+"}"),P()?w(!0,b):Q()&&w(!1,b),e?e():void 0},c?d(function(){var a,b,d;for(b=0,d=c.length;d>b;b++)a=c[b],m(a.appended,a.wrapper);return f()}):f()},A=function(a,b){return l(a,b,function(){return J.shift(),0===J.length?(E=!1,G(!1)):z(a)})},z=function(b){var c;return c=J[0],c?p.length&&!P()?A(b):u.get(I,r,function(c){var d,e,f,g;if(e=[],0===c.length)x=!0,k.bottomPadding(0),a.log("appended: requested "+r+" records starting from "+I+" recieved: eof");else{for(t(),f=0,g=c.length;g>f;f++)d=c[f],e.push(C(++I,d));a.log("appended: requested "+r+" received "+c.length+" buffer size "+p.length+" first "+B+" next "+I)}return A(b,e)}):p.length&&!Q()?A(b):u.get(B-r,r,function(c){var d,e,f,g;if(e=[],0===c.length)n=!0,k.topPadding(0),a.log("prepended: requested "+r+" records starting from "+(B-r)+" recieved: bof");else{for(s(),d=f=g=c.length-1;0>=g?0>=f:f>=0;d=0>=g?++f:--f)e.unshift(C(--B,c[d]));a.log("prepended: requested "+r+" received "+c.length+" buffer size "+p.length+" first "+B+" next "+I)}return A(b,e)})},M=function(){return c.$$phase||E?void 0:(l(!1),f.$apply())},T.bind("resize",M),N=function(){return c.$$phase||E?void 0:(l(!0),f.$apply())},T.bind("scroll",N),f.$watch(u.revision,function(){return K()}),y=u.scope?u.scope.$new():f.$new(),f.$on("$destroy",function(){return y.$destroy(),T.unbind("resize",M),T.unbind("scroll",N)}),y.$on("update.items",function(a,b,c){var d,e,f,g,h;if(angular.isFunction(b))for(e=function(a){return b(a.scope)},f=0,g=p.length;g>f;f++)d=p[f],e(d);else 0<=(h=b-B-1)&&h<p.length&&(p[b-B-1].scope[F]=c);return null}),y.$on("delete.items",function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o;if(angular.isFunction(b)){for(e=[],h=0,k=p.length;k>h;h++)d=p[h],e.unshift(d);for(g=function(a){return b(a.scope)?(L(e.length-1-c,e.length-c),I--):void 0},c=i=0,m=e.length;m>i;c=++i)f=e[c],g(f)}else 0<=(o=b-B-1)&&o<p.length&&(L(b-B-1,b-B),I--);for(c=j=0,n=p.length;n>j;c=++j)d=p[c],d.scope.$index=B+c;return l(!1)}),y.$on("insert.item",function(a,b,c){var d,e,f,g,h,i,j,k,m,n,o,q;if(e=[],angular.isFunction(b)){for(f=[],i=0,m=p.length;m>i;i++)c=p[i],f.unshift(c);for(h=function(a){var f,g,h,i,j;if(g=b(a.scope)){if(C=function(a,b){return C(a,b),I++},angular.isArray(g)){for(j=[],f=h=0,i=g.length;i>h;f=++h)c=g[f],j.push(e.push(C(d+f,c)));return j}return e.push(C(d,g))}},d=j=0,n=f.length;n>j;d=++j)g=f[d],h(g)}else 0<=(q=b-B-1)&&q<p.length&&(e.push(C(b,c)),I++);for(d=k=0,o=p.length;o>k;d=++k)c=p[d],c.scope.$index=B+d;return l(!1,e)})}}}}]),angular.module("ui.scrollfix",[]).directive("uiScrollfix",["$window",function(a){return{require:"^?uiScrollfixTarget",link:function(b,c,d,e){function f(){var b;if(angular.isDefined(a.pageYOffset))b=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;b=e.scrollTop}!c.hasClass("ui-scrollfix")&&b>d.uiScrollfix?c.addClass("ui-scrollfix"):c.hasClass("ui-scrollfix")&&b<d.uiScrollfix&&c.removeClass("ui-scrollfix")}var g=c[0].offsetTop,h=e&&e.$element||angular.element(a);d.uiScrollfix?"string"==typeof d.uiScrollfix&&("-"===d.uiScrollfix.charAt(0)?d.uiScrollfix=g-parseFloat(d.uiScrollfix.substr(1)):"+"===d.uiScrollfix.charAt(0)&&(d.uiScrollfix=g+parseFloat(d.uiScrollfix.substr(1)))):d.uiScrollfix=g,h.on("scroll",f),b.$on("$destroy",function(){h.off("scroll",f)})}}}]).directive("uiScrollfixTarget",[function(){return{controller:["$element",function(a){this.$element=a}]}}]),angular.module("ui.showhide",[]).directive("uiShow",[function(){return function(a,b,c){a.$watch(c.uiShow,function(a){a?b.addClass("ui-show"):b.removeClass("ui-show")})}}]).directive("uiHide",[function(){return function(a,b,c){a.$watch(c.uiHide,function(a){a?b.addClass("ui-hide"):b.removeClass("ui-hide")})}}]).directive("uiToggle",[function(){return function(a,b,c){a.$watch(c.uiToggle,function(a){a?b.removeClass("ui-hide").addClass("ui-show"):b.removeClass("ui-show").addClass("ui-hide")})}}]),angular.module("ui.unique",[]).filter("unique",["$parse",function(a){return function(b,c){if(c===!1)return b;if((c||angular.isUndefined(c))&&angular.isArray(b)){var d=[],e=angular.isString(c)?a(c):function(a){return a},f=function(a){return angular.isObject(a)?e(a):a};angular.forEach(b,function(a){for(var b=!1,c=0;c<d.length;c++)if(angular.equals(f(d[c]),f(a))){b=!0;break}b||d.push(a)}),b=d}return b}}]),angular.module("ui.validate",[]).directive("uiValidate",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){function e(b){return angular.isString(b)?void a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})}):angular.isArray(b)?void angular.forEach(b,function(b){a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})})}):void(angular.isObject(b)&&angular.forEach(b,function(b,c){angular.isString(b)&&a.$watch(b,function(){g[c](d.$modelValue)}),angular.isArray(b)&&angular.forEach(b,function(b){a.$watch(b,function(){g[c](d.$modelValue)})})}))}var f,g={},h=a.$eval(c.uiValidate);h&&(angular.isString(h)&&(h={validator:h}),angular.forEach(h,function(b,c){f=function(e){var f=a.$eval(b,{$value:e});return angular.isObject(f)&&angular.isFunction(f.then)?(f.then(function(){d.$setValidity(c,!0)},function(){d.$setValidity(c,!1)}),e):f?(d.$setValidity(c,!0),e):(d.$setValidity(c,!1),e)},g[c]=f,d.$formatters.push(f),d.$parsers.push(f)}),c.uiValidateWatch&&e(a.$eval(c.uiValidateWatch)))}}}),angular.module("ui.utils",["ui.event","ui.format","ui.highlight","ui.include","ui.indeterminate","ui.inflector","ui.jq","ui.keypress","ui.mask","ui.reset","ui.route","ui.scrollfix","ui.scroll","ui.scroll.jqlite","ui.showhide","ui.unique","ui.validate"]);
"use strict";angular.module("unsavedChanges",["lazyModel"]).provider("unsavedWarningsConfig",function(){var f=this;var e=false;var b=true;var d=["$locationChangeStart","$stateChangeStart"];var c="You will lose unsaved changes if you leave this page";var a="You will lose unsaved changes if you reload this page";Object.defineProperty(f,"navigateMessage",{get:function(){return c},set:function(g){c=g}});Object.defineProperty(f,"reloadMessage",{get:function(){return a},set:function(g){a=g}});Object.defineProperty(f,"useTranslateService",{get:function(){return b},set:function(g){b=!!(g)}});Object.defineProperty(f,"routeEvent",{get:function(){return d},set:function(g){if(typeof g==="string"){g=[g]}d=g}});Object.defineProperty(f,"logEnabled",{get:function(){return e},set:function(g){e=!!(g)}});this.$get=["$injector",function(h){function i(j){if(h.has("$translate")&&b){return h.get("$translate")(j)}else{return false}}var g={log:function(){if(console.log&&e&&arguments.length){var j=[].slice.call(arguments);if(typeof console.log==="object"){log.apply.call(console.log,console,j)}else{console.log.apply(console,j)}}}};Object.defineProperty(g,"useTranslateService",{get:function(){return b}});Object.defineProperty(g,"reloadMessage",{get:function(){return i(a)||a}});Object.defineProperty(g,"navigateMessage",{get:function(){return i(c)||c}});Object.defineProperty(g,"routeEvent",{get:function(){return d}});Object.defineProperty(g,"logEnabled",{get:function(){return e}});return g}]}).service("unsavedWarningSharedService",["$rootScope","unsavedWarningsConfig","$injector",function(j,c,k){var i=this;var a=[];var g=true;var d=[angular.noop];this.allForms=function(){return a};var f={navigate:c.navigateMessage,reload:c.reloadMessage};function h(){g=true;angular.forEach(a,function(m,l){c.log("Form : "+m.$name+" dirty : "+m.$dirty);if(m.$dirty){g=false}});return g}this.init=function(l){if(a.length===0){e()}c.log("Registering form",l);a.push(l)};this.removeForm=function(m){var l=a.indexOf(m);if(l===-1){return}a.splice(l,1);c.log("Removing form from watch list",m);if(a.length===0){b()}};function b(){c.log("No more forms, tearing down");angular.forEach(d,function(l){l()});window.onbeforeunload=null}this.confirmExit=function(){if(!h()){return f.reload}b()};function e(){c.log("Setting up");window.onbeforeunload=i.confirmExit;var l=c.routeEvent;angular.forEach(l,function(m){var n=j.$on(m,function(p,o,q){c.log("user is moving with "+m);if(!h()){c.log("a form is dirty");if(!confirm(f.navigate)){c.log("user wants to cancel leaving");p.preventDefault()}else{c.log("user doesn't care about loosing stuff")}}else{c.log("all forms are clean")}});d.push(n)})}}]).directive("unsavedWarningClear",["unsavedWarningSharedService",function(a){return{scope:true,require:"^form",priority:3000,link:function(d,c,b,e){c.bind("click",function(f){e.$setPristine()})}}}]).directive("unsavedWarningForm",["unsavedWarningSharedService",function(a){return{require:"form",link:function(d,c,b,e){a.init(e);c.bind("submit",function(f){if(e.$valid){e.$setPristine()}});d.$on("$destroy",function(){a.removeForm(e)})}}}]);angular.module("lazyModel",[]).directive("lazyModel",["$parse","$compile",function(b,a){return{restrict:"A",priority:500,terminal:true,require:"^form",scope:true,compile:function c(g,e){var f=b(e.lazyModel);var h=f.assign;g.attr("ng-model","buffer");g.removeAttr("lazy-model");return{pre:function(i,j){i.buffer=f(i.$parent);a(j)(i)},post:function d(j,l,i,m){var k=l.parent();while(k[0].tagName!=="FORM"){k=k.parent()}k.bind("submit",function(){if(m.$valid){j.$apply(function(){h(j.$parent,j.buffer)})}});k.bind("reset",function(n){n.preventDefault();j.$apply(function(){j.buffer=f(j.$parent)})})}}}}}]);