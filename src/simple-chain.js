const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 class Node {
  constructor(data) {
        this.data = data; // node value
        if(data==null) this.data=null; 
        else if (data==undefined) this.data=' '; 

      this.next = null;   // left node child reference
      this.prev = null; // right node child reference
  }
}

const chainMaker = {
  getLength() {
    if(this.length != undefined)  return this.length;
    else return null;
  },

  addLink(value) {
    
   let newNode = new Node(value);

    if (this.firstNode == undefined) { 
      this.firstNode =newNode;  
      this.endNode=newNode;
      this.length=1;
    }
    else 
    {
      let tmp=this.endNode;
      this.endNode.next=newNode;
      this.endNode = newNode;
      this.endNode.prev=tmp;
      this.length++;  
   }

   console.log(this.firstNode, this.endNode);
    return  this;  
  },
// ---------------------------------------------
  removeLink(position) {
    position=position-1;
    if(position<0 || position >=this.length ||  !Number.isInteger (position))  
      {
      this.length=0;
       delete  this.firstNode;
       throw new Error(`You can't remove incorrect link!`);
      }
 
    if(position==0) 
        {this.firstNode= this.firstNode.next; 
          this.firstNode.prev=0;
        }
          else
      {
        let curNode=this.firstNode;  
        for(let i=0; i< position-1; i++ ) {
          curNode=curNode.next;
        }
// мы остановились перед элементом который надо удалить
//перескакиваем если есть
if(curNode.next != null) curNode.next=curNode.next.next; else curNode.next=nul;;
// ставим ссылку на предыдущий на наш
if(curNode.next != null) curNode.next.prev =curNode;
      }

    if(this.length > 0)  this.length--;

    return  this;  
  },
//--------------------------------------------------------------
  reverseChain() {
    let tmp;
    if( this.length==0) return this;
    
    let   curNode=this.firstNode;  
  
    for(let i=0; i< this.length; i++ ) {  // меняем местами next и prev
      tmp=curNode.next;
      curNode.next=curNode.prev; 
      curNode.prev=tmp;
      curNode=tmp;
    }
 
  tmp=this.firstNode;           // поменяли  местами конеч и начало
  this.firstNode=this.endNode;  
  this.endNode=tmp;

 curNode=this.firstNode;  
  for(let i=0; i< this.length; i++ ) {
      console.log(i, curNode);
      curNode=curNode.next;
  }
    return  this;  
  },
//-----------------------------------------------------------------
  finishChain() {
   let res='';
   let curNode=this.firstNode;  

     for(let i=0; i< this.length;  i++) {
            res=res+'( '+ curNode.data +' )';
            if(curNode != this.endNode) res=res+'~~';
            curNode=curNode.next;
     }

  this.length=0;
  delete  this.firstNode;
  return res;
  }
}


  


module.exports = {
  chainMaker
};
