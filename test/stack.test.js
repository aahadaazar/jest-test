class Stack {
  constructor(){
    this.top = -1;
    this.item = {};
  }

  get peek(){
    return this.item[this.top]
  }

  push(value){
    this.top+=1;
    this.item[this.top] = value;
  }

  get pop(){
    if(this.top === -1){
      throw 'Empty Stack can\'t be popped!';
      // throw new Error('Empty Stack can\'t be popped!')
    } else {
      const poppedValue = this.item[this.top];
      this.top-=1;
      delete this.item[this.top];
      return poppedValue;
    }
  }
}

describe('My Stack' , ()=>{

  let stack = null;

  beforeEach(()=>{
    stack = new Stack();
  })
  
  it('is created empty',()=>{
    expect(stack.top).toBe(-1);
    expect(stack.item).toEqual({});
  });

  it('can push to top',()=>{
    stack.push('a');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('a');
  });

  it('can pop from top',()=>{
    stack.push('a');
    expect(stack.pop).toBe('a');
    expect(stack.top).toBe(-1);
  });

  it('can not pop from empty',()=>{
    expect(()=>{stack.pop()}).toThrow('Empty Stack can\'t be popped!');
  });

})