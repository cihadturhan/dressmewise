function ajaxCompare(url,id){url=url.replace("catalog/product_compare/add","ajax/whishlist/compare");url+="isAjax/1/";jQuery("#ajax_loading"+id).show();jQuery.ajax({url:url,dataType:"json",success:function(data){jQuery("#ajax_loading"+id).hide();if(data.status=="ERROR")alert(data.message);else{alert(data.message);if(jQuery(".block-compare").length)jQuery(".block-compare").replaceWith(data.sidebar);else if(jQuery(".col-right").length)jQuery(".col-right").prepend(data.sidebar)}}})}
function ajaxWishlist(url,id){url=url.replace("wishlist/index","ajax/whishlist");url+="isAjax/1/";jQuery("#ajax_loading"+id).show();jQuery.ajax({url:url,dataType:"json",success:function(data){jQuery("#ajax_loading"+id).hide();if(data.status=="ERROR");else{jQuery("#wishlistnitlogin-content_<?php echo $_product->getId() ?>").modal({onOpen:function(dialog){dialog.overlay.fadeIn("slow",function(){dialog.data.hide();dialog.container.fadeIn("slow",function(){dialog.data.slideDown("slow");setTimeout(function(){jQuery.modal.close()},
5E3)})})}});if(data.status=="SUCCESS"){myDivObj=document.getElementById("myDiv");var oldvalue=myDivObj.innerHTML;var total=Number(oldvalue)+1;jQuery(".count1").html(total);jQuery(".itemcount").html(total)}if(jQuery(".block-wishlist").length)jQuery(".block-wishlist").replaceWith(data.sidebar);else if(jQuery(".col-right").length)jQuery(".col-right").prepend(data.sidebar)}}})};