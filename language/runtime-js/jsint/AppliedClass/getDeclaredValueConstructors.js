function(anntypes){
  var mm=getrtmm$$(this.tipo);
  var pref=mm.d[mm.d.length-1];
  var cs=coiclsannconstrs$(this,anntypes,pref+"$c_",this.$$targs$$.Type$AppliedClass);
  if (cs.length===0) {
    cs=coiclsannconstrs$(this,anntypes,pref+"_",this.$$targs$$.Type$AppliedClass);
  }
  for (var i=0;i<cs.length;i++) {
    var r=AppliedValueConstructor$jsint(cs[i].tipo,{Type$AppliedValueConstructor:this.$$targs$$.Type$AppliedClass});
    r.cont$=this;
    cs[i]=r;
  }
  return cs.$sa$({t:ValueConstructor$meta$model,
    a:{Type$ValueConstructor:this.$$targs$$.Type$AppliedClass}});
}
