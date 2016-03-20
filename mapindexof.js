/*
* Array.prototype.mapIndexOf()
* 2016-03-20
* (c) Yevhen Tiurin; MIT license
* Adds a .mapIndexOf() method to an Array. Allow to get an index of an object
* in the given array with the specific property value
*/

!function(){
  function mapIndexOf(key,value)
  {
    for(var r=-1,i=0;i<this.length;i++)
      if(this[i][key]===value){
        r=i;
        break;
      }

    return r;
  }

  if(!Array.prototype.mapIndexOf)
    Object.defineProperty(Array.prototype,'mapIndexOf',{configurable:true,
    enumerable:false,writable:true,value:mapIndexOf});
}();
