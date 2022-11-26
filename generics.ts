class Queue {
  private data = [];

  add(item: string) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue();
nameQueue.add('luis');
nameQueue.add('adam');

const numberQueue = new Queue();
numberQueue.add(5);
numberQueue.add(39);