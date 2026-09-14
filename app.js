(function(){
const key='gth-experimental-theme';
const saved=localStorage.getItem(key);
if(saved==='light') document.documentElement.dataset.theme='light';
if(saved==='gold') document.documentElement.dataset.accent='gold';
const btn=document.getElementById('themeBtn');
if(btn) btn.addEventListener('click',()=>{
 const current=document.documentElement.dataset.theme;
 if(current==='light'){document.documentElement.dataset.theme='';localStorage.setItem(key,'dark');}
 else {document.documentElement.dataset.theme='light';localStorage.setItem(key,'light');}
});
window.demo=function(e,name){if(e)e.preventDefault();alert(name+' is represented as a frontend demonstration in this experimental build. No real backend service is connected.');};
})();