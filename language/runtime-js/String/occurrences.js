function(e,from,len){
  if (from===undefined||from<0)from=0;
  if (len===undefined)len=this.size;
  var r=[];
  for (var i=from;i<len;i++) {
    if (this.$_get(i).equals(e))r.push(i);
  }
  return r.length>0?$arr$(r,{t:Integer}):empty();
}
