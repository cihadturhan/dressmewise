/*
   Copyright (c) 2006-2016 X.commerce, Inc. and affiliates (http://www.magento.com)
 @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*/
var Translate=Class.create();Translate.prototype={initialize:function(data){this.data=$H(data)},translate:function(){var args=arguments;var text=arguments[0];if(this.data.get(text))return this.data.get(text);return text},add:function(){if(arguments.length>1)this.data.set(arguments[0],arguments[1]);else if(typeof arguments[0]=="object")$H(arguments[0]).each(function(pair){this.data.set(pair.key,pair.value)}.bind(this))}};
