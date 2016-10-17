//版权 北京智能社©, 保留所有权利

function jsonp(options)
{
	options=options || {};
	var url=options.url;
	
	if ( ! url)
	{
		return;
	}
	
	var data=options.data || {};
	var cbName=options.cbName || 'cb';
	
	var fnName=('a'+Math.random()).replace('.', '');
	data[cbName]=fnName;
	window[fnName]=function (res){
		options.success && options.success(res);
		oHead.removeChild(oS);
	};
	
	var oS=document.createElement('script');
	oS.src=url+'?'+json2url(data);
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
}

function json2url(data)
{
	var arr=[];
	for (var name in data)
	{
		arr.push(name+'='+data[name]);
	}
	
	return arr.join('&');
}










