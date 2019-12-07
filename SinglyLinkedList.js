class Node{
    constructor(data){
        this.data = data;
        this.next =  null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;   
    }

    add(data){  
        var nodeToAdd =  new Node(data);     
        if(this.head == null){
           this.head = nodeToAdd;
        }else{
           var currNode = this.head;
          while(currNode.next){
              currNode = currNode.next;
          }
          currNode.next = nodeToAdd;
        }      
        this.length++;
        return nodeToAdd;
    }

    remove(data){
      let currNode = this.head;
      if(this.head.data == data && this.head.next != null){
          this.head = this.head.next;
          this.length--;
          return currNode;
      }else{
          while(currNode.next){
              var nextNode = currNode.next;
              if(nextNode.data == data){
                  currNode.next =  nextNode.next;
                  this.length--;
                  break;
              }
              currNode = currNode.next;
          }
      }
    }

}

var list = new SinglyLinkedList();
list.add(2);
list.add(23);
list.add(43);
list.add(27);
list.add(46);
//console.log(list.remove(43));


///reverse linkedList in recursive way

var reverseList = function(head) {
    if(head==null || head.next== null){
        return head;
    }
    var p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};


//console.log(reverseList(list.head));

//reverse linked list in iterative way

var reverseListIerative = function(head){
    var currNode = head;
    var prev = null;
    var nextNode = null;

    while(currNode){
        nextNode = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = nextNode;
    }
    return prev;
 }

console.log(reverseListIerative(list.head));
