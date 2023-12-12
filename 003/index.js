const { Subject } = require('rxjs');



class Note 
{
  constructor(cont) 
  {
    this.cont = cont;
    this.destroy = new Subject();
  }

  addsub(data)
  {
    var child = new Note(data);
    this.destroy.subscribe(() => del(child) );
    return child;
  }
}

function del(v) 
{  
  v.destroy.next();
  v.destroy.complete();
  TLI.pop(v);
}

var TLI = []
// TLI
var topLevelNote1 = new Note('T-L Note 1');
// L1
var childNote = topLevelNote1.addsub('C-N 1');
// L2
var childNote2 = childNote.addsub('C-N 2');


TLI.push(topLevelNote1);
TLI.push(childNote);
TLI.push(childNote2);


console.log(TLI);
console.log("######################################")
del(topLevelNote1);
console.log(TLI);
