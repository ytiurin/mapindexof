# Array.prototype.mapIndexOf()
Adds a .mapIndexOf() method to an Array. Allow to get an index of an object in the given array with the specific property value.

## Usage example
```javascript
!function(){
  var arr=[
    {a:1,b:2},
    {a:3,b:4}
  ];

  arr.mapIndexOf('b',4);
  //1
}();
```
