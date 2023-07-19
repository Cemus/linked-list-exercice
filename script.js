const LinkedList = () => {
  let head = null;
  let size = 0;
  let tail = null;
  const append = (value) => {
    //adds a new node containing value to the end of the list
    let newNode = new Node(value, null);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
    ++size;
  };
  const prepend = (value) => {
    //adds a new node containing value to the start of the list
    let newNode = new Node(value, null);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      let formerHead = head;
      newNode.nextNode = formerHead;
      head = newNode;
    }
    size++;
  };
  const getSize = () => {
    //returns the total number of nodes in the list
    return size;
  };
  const getHead = () => {
    //returns the first node in the list
    return head;
  };
  const getTail = () => {
    //returns the last node in the list
    return tail;
  };
  const at = (index) => {
    //returns the node at the given index
    if (index > size || head === null) {
      return null;
    }
    let curr = head;
    for (let i = 0; i < size; i++) {
      if (i === index) {
        return curr;
      }
      curr = curr.nextNode;
    }
  };
  const pop = () => {
    //removes the last element from the list
    if (head === null) {
      return "Nothing to pop...";
    }
    let curr = head;
    let prev = null;
    for (let i = 0; i < size; i++) {
      if (curr.nextNode === null) {
        prev.nextNode = null;
        tail = prev;
        size--;
      } else {
        prev = curr;
        curr = curr.nextNode;
      }
    }
  };
  const contains = (value) => {
    //returns true if the passed in value is in the list and otherwise returns false.
    if (head === null) {
      return null;
    }
    let curr = head;
    for (let i = 0; i < size; i++) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.nextNode;
    }
    return false;
  };
  const find = (value) => {
    //returns the index of the node containing value, or null if not found.
    if (head === null) {
      return null;
    }
    let curr = head;
    for (let i = 0; i < size; i++) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.nextNode;
    }
    return null;
  };
  const toString = () => {
    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let string = "";
    let curr = head;
    while (curr.nextNode !== null) {
      string = `${string} ( ${curr.value} ) ->`;
      curr = curr.nextNode;
    }
    string = `${string} ( ${curr.value} ) ->`;
    string = `${string} ( ${null} )`;
    return string;
  };
  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let linked = LinkedList();
