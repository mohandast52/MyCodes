$(function(){$(".button").on("click",function(t){var e=document.createElement("span");e.classList.add("ripple"),this.appendChild(e);var i=$(this).offset(),h=i.left,n=i.top,s=Math.max($(this).width(),$(this).height());$(".ripple").css({width:s,height:s,left:t.pageX-h-s/2,top:t.pageY-n-s/2}),setTimeout(function(){e.remove()},700)})});