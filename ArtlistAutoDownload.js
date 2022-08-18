// ==UserScript==
// @name         Artlist auto download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://artlist.io/collection/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABYlBMVEUZGRkAAAAZGRvq0SwZGRgZGRYvKRvt2EcZGBvtzy8XGhgbGhbp1CDr0S/vzi7w1impmj4ZGB4TFxfp2T/o0y3Hr0UAAA4OEQ9YVDXYy0uMfTzaxEoNCgYbFx8FCA/t1DgXGxQAABBPRSUAABUACA0XGxEYGCIaFiXtzjgXHA4VHBXm1iAAAB2Kfz4dGBYWGB43Mhzt1FQeFSEcFygADgAVEwAeGBUcGgwVECgOEB4RHhNFQC5WVSYkGwvQvlzMuUapn08PABdlVy3YzD+YkDoTIA0VCQUXCRROPRjv0l/s3lvyzh9rYShvZye1pUQyJiTt0kohCyMwMBaoozqclj4xHAyLfzQfDhhoXkIXDixdUB+ekS9vWTVnXjS5sEnHrUGGdTHfzmWGcjeakk54bT15eDEgIAC+qVRANxWghDTVxHBQRBQ9OA5VRSooKgAyJQ1mXBiMgExHNh1cSxIkEQyAfCZuHq+XAAAN5klEQVR4nO2a+0PbxpbH9USj0ctjCzvG6GGMZMk2KBCIMQ2Yp9nEhHr74G6yDTchL7Jpb2677f+/Z2QCSZqStNfk7g/nk/AapLG+M3PmfM8YQUAQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQa0ChgiRJ/DtVIPlXgRBoFiRVVS6uIoJhGKqgqld3RqlE4FZBur7n/fPkD6VyFj3PSHkTIRKRsvh2lwmMCSpTFZaFZK23yGhErupLoi3qeYtGFH2ZZ/88mNdNU4kBxSgN88GP1tdF0S/DhyowQQGRhK7Uv7qz0Whm6VV9Ld9a87qkuba8+GWe/TO5bZBbGQUyarAmbzHI1GafsyUaEsiTlHB7Z7fdru6JTXpVV2naaq3vr0NfX+bRP48wjJcHog+UD0i6z5uM3pQ2dBzH7YshhKfEhMp/3HWGydA93r4qwpRmQxTLnbpYjK/7qanKn7g3P59FnxzNsBgPFu6NgHsLfkzGTVOabslyaVoMIbYkT5otuLLVHurVA0W5oi9xS9NGWune3PKklHwUCf7NPjy8fwj/b6rZpy4PmeTPBDIQzMzTPIAIKJRdR3enRYMQKsSCeBS4gawnpa+LVyksFxxXduTSXHFiaj4GMTJvYxQEgZwkR43mVU/ECRnhCi3rA4XyuUKJUlBYCBzZTczd/ww/qVC+doVempWPA9c0TdsuffMZc/hJhRCHh0vQn9n+tsP+/QqV5bT4a5WvOsu1g+/KV16rXKzSc4UGb/5AYQh7j/90FMjuyWpYvLzz93whhc3987iyHMe6+33KpMv8axhSK5QYMbyuEXtSs0kNyrKVGYtfn8zMM48whcR5HJpvFXIfY5TPjo8PRRYy3g0txjE4BUGKGTc7bNmjlEDI+kcOjIOuzYWkq7BrUxiHYlXPFeqOPHrlNyP1YotXFYkKhAmheitL02g/TZWMxiszcn79jJ8xKTNC6X2FuaZmb8Wv0DDKJ1m63e0SMDhRGIVSHKfd2ywzIpo1Co4su5Y2l8EOTD/h8P46tPOs/Vahae3+rbnfvLBarFfxt/0Ki8P9iPU6nUaT0ZU1cSGfc3fG9+crlYyqv1dYrFQqfq9SKebrQTUIqzQaZdFv1OdDmoURiyWp4pe3TFPne2lnvudXrkugEIp951yhLJvu43LELhSS/zrc2Tk8/OpBMTo4ePjf3363GtNHPxwWxtmicHj46PCR16S/V/j1I/jdzuFcM4+wsNWp39k7Oun3T75b+KW+7WUKbX4Nv/+73NYd3Xx8eLhzeONKC/uvUHnkJlyhJeu65cpVMe5ebAviEzfRAm1me71+px/Y1r0Bq9RGgZuvUh0yzCi5+z2JfqfQ/2GpHQRJsFUOeTdMfL470sH16Lrjav2FQY9Fyty9JEjstizbzqikJc6meA3iDNIkRDxxE7ntuDM1rnOoPfPHEaFKkgoRCruddboivhpBSpeXVouD2tCRx+g65Hlto/nBKoUwrtwo2aYlO4WyRGIaTW26MhcId8CU6Vptx1/vzQWO2zZlMEMmdJgM+/41KIQ9hGZz90wbBnJpcBqYjqW7/XLGp0EZK7Qd13Yei3uaZZqyubQqDXZ1t51rbLfbrmWPXmTGFQqJ0MpePHFNG8RBg+kGblt2tKcr668DM7B03q1u223T7F+ZqP4iTEpb4hGMrmtZe+LtatuxErO0kw/mhULZCZ49T2TTdLnC7KCmj1e1nFiuPnSWXmTkKoV0X3zpOMOh026XNA0GCmbSaW91enNLtuzYOnRrQ5oy7c3rUChFLe9sBC8ky9rNVnmhLfMHmBal9xSawauSBU/iBsHd2eygr5XyjUYeBtVdrfo/L7Llq1Yp9e+Mhrpuljbvn23c/GGvpiVWUNtYNl7f3d3lZhY6261Wd5euJQ7V/WKnAO4ENo2jDo2nSrre1m1tzgcz/lahKQemDbNlBVqtf7RKhNUD8bd8qwmORX8wGEDNf4VCQegUHIiCdn8w2yuurzf8+9VA2+lRuj5YEQsyt97aa3GwcrB6HUcZhLamRrbZlm3tp2LarBcs29SH7pYINuZCISxOkw/7429mxflQDb0LX7rgk0X+WFevUkhGPOvtNYRmLIRU8AdPt8aVsZS7NlcP5ornRz8Tx4gbexBTrukciVnEsjMNtgLdGf3ImuqlQidJXO252Omth4bAKHtHofBO9fQHCpm45LhmkMx0hG53mW9uZHvgkfx041LhtcgDwuavuzwRwu5yEFOB1r913fGDNSNyOYcQRD81wkhZFiTylxRapmzv/kPMshTMDRMyypj6ZRRm9RkX9jHHhSjPJNbK5jQwUZajvWmm3jurtPS4Extdgx8aKuGfVKiIm9wqDc3q07M6WDNCQ4PwE6vrVqhCFWTEA8jyMMDao3kqSCyljb/rsikn8nFjn13sNK5ZG6xHWTMLFUVVo3cUzn9aoUQbe4EDc2hZTqlaOL3pN4pNITLIhULZup7qSY2IQBvPAhvWoDw9m8e5Qdceaq7r2Hb1ICQXGd9yarOCIpxbuT+qgP9IYXRrqmaB++EmwXU1rfrbmVi8JXXfU3gtlpRAXMECgmRomad13sI8KsHGBwlQbi90iPFWoQwK6YVV/ZMKoZsHN/uBA8MmO9yZJol29FOjSK9dIfHS7OBQg1Rl6jUxVvImic5Dkw6RVzsQJqPQW0tpPHjcL7k84hPXBUmO9u3smnLtChdbazCFTmK1ndNePqJqGBND3DTtBCLx1OeHu/+6QsloKlHcEB8WauDdQR232TZkJ+G6FaqMteYSE1KFvLSRGVyAohJJLT9zksBMnKpIyLLwUYXC/PjUw12oQ4FPaSjkCqFlurwoQSJ4T2HavEUksnzgi6+P+yVYpTYfHe1xJ1qmuULLLM2F/BD9U6d8fxbiiS9tl5cue+XWpaFQ+fZqQsJ41JPIx+fwrcJgZpsY/Hh/PIeWY3GFMPPvxaFH1DBKu0aW9TqNqdPNEowqWNyTxv65QkhGX1UkaeKuhqhkrsQPquXSmwcpu+g9Ks9AioLtZ1ostsLy1QphDRIVchtXaEINMl0moOcDhbRVjPm5hRERUCn+c8TPZoKqmhL14kQ4U4nHJq1QgqKGd58UymvvvAdGpY2qDAL05I6Xpf5VCuWZgUCUKDLOFcpWTTQ8KfxwL6389P0Bk8Ll5WVi7Mf+yzxv7G5QJRwr1N2dikFINOGTKCX+B3huWI9LZytZr3hBryjuyTosI+eofiu9cpWam2J9WxRvrJ6vUoiuqdlmr14h7ypUs9Un1UOxJ6gCDWmWiVtBrvBvsRLWc4VJ+6lYbvjpV2Sis0jrr6AqAjvVP/vxxx+/uXkO/HD2z/EMjeb87CMKqZT2jvM939Gmj2e2qrWDrDgFzoHTf/j13NOd3qJ/udMojT1X1k7uNEA5jdYbb6quBUa8LxqMlY9024Qif3T0/Pho6aSeLUqTe59NFfnRAgQ9L7w1bYlzFz4CtxQM86cNfp7/mEKBpfP387QGCaLdDtraL1m2MdLHRbG2pIFdNQ4u55D8suTotq7V9u58M1u+ebprgsExg5kVyZNgDoe8PA2CNux51dkihPHEFFKxChlM5qcmOj8fessQivnAGieDjyqkTaM1p7kw8jxYE1gFz+G6zfHZVGLllZi6fanQf8kLMJMfhgSaFsD6SGy7Xd3IoMhoPC9BbhrnSNnV5ugkFQriLldomWPcC0yYmLyEd8dzaH6g0LjlUXEzME1L5zYssewTMV75WcsV5n3VROkdhcXXfY33G9gAbGw6P3paOvR5oRK/qI4PJmX+us6MeF5VTQTW2LXA8INnS4IkCc7PB2HJWPCTNV6ljVis2TAKTm1ALhUue1nvf5f42aJsBWA4nScHcevXmuXw2+3EHi69iHs3NNuBISjUWVyZPV6y8mmyAljcvHQZnfpUNSDN+Au85rYC3RkObfulGE9wDlm5qtvcRTmO+QH5UaHjBD93YvEJrCLHrA68yzu51sajmpzf5wTayQ+3w9h7AzM1VqFt3uxVdu61A8tpF8pQlYWzL2b6gc5vAFdvBqOjs/kwfz9jUREXlvJm2A+qhR0/7hoTUyhEC3t7hcLR0dHm9PR0/5LNzWloLBT2nt6oGOqz3x4/Pv7t/m3jPUulxP6b45N+rT9duN9tVKKucWvNf7S12e+fbN0/E7NidPN5fuOd2RRuNNRt8ez50XS/Vqv1j05/aRCq5obWELLy1Cto75/sHc42mlnRmNwckrhcr5fL4kfIW8v1ckVgzU59e/vBg+34g7e+0lbcKYuzolg/6HbVJukaNPNFceCX672slUZK3Chvdx50eswQFOIV17NeA65fXZ0V/fmMUerli4KwjEbjjsp+DDeG3uQ8uKLQlILfDcOQW8uQE8H38InSVgs+EUYIGOsoSvfTKH7/lZfjDNJ3KwqLEkxgTA0CX8IIOojSNKSSFBo0ClP4GWypweKYhkb+KtB1mqbcrOb98Nct0khVqAE3dlVpku47Zgprehz2FsI/JEJI3myoqhESRvlfj3z4JxqLIB2cJFwKLkWC0fCItxwzif/BFGMegzKFKQKLuYUD4yrBtsJfx/Mk6JvB92qYC1TBjxLelv8JEvNIOMFskddLExsy5aOdfXb3ky6cEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEAT5/8n/AQog6RXC3lwkAAAAAElFTkSuQmCC
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var head = document.getElementsByTagName('HEAD')[0];
var sc = document.createElement('script');
sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js';
head.appendChild(sc);
async function GetDownload(){
    await updateArtlist();
    Download();

}

function updateArtlist(){
    return new Promise((resolve ,reject)=>{
        var pre_index = 0;
        var body = document.body;
        var update_interval =  setInterval(function(stop_index){
            if(body.scrollHeigt!=body.clientHeight+body.scrollTop)
                window.scrollTo(0,document.body.scrollHeight)

            var total_index = $('#artistpage .direct-download').length;

            if( pre_index == total_index){
                clearInterval(update_interval);
                console.log("Update completed")
                resolve("Resolved");
            }
            pre_index = total_index
        },5000,start)
     });
}
function Download(){
  var download_limit = 0
    if($('#artistpage .direct-download').length > 0)
    {
      download_limit = 100
      var element = $('#artistpage .direct-download');
    }
    else
    {
      download_limit = 40
      var element = $('#collectionpage .direct-download');
    }
    var index = 1;
    var total_index = element.length;
    for(var i=start;i<=start+download_limit;i++){
        setTimeout(function(element,i,download_limit){
            element.eq(i).parent().find('.download-button').click()
            element.eq(i).children().children().eq(0).click();
            if(i == start+download_limit)
              ShowLog();
        },3000*index,element,i,download_limit)
        index++;
    }
    Cookies.set('stop_index', start+download_limit, {expires: 2147483647, path: '/'});

}

function ShowLog() {
  if(start +download_limit >= total_index)
  {
    alert("總共"+ total_index +"首"+",已全數下載完畢");
    Cookies.set('stop_index', 0, {expires: 2147483647, path: '/'});
  }
  else
    alert("總共"+ total_index +"首"+",已下載"+(start+download_limit)+"首,請持續停留此頁面");
}
async function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}
var start  = 0;
setTimeout(function(){
    start = parseInt(Cookies.get('stop_index'))
    GetDownload();
},5000)


})();
