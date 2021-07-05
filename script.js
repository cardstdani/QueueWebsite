class queue{
  constructor() {
    this.data = [];
  }

  enqueue(value){
    this.data.push(value);
  }

  dequeue(){
    this.data.shift();
  }

  getFront(){
    if(this.data == []){
      return null;
    }
    return this.data[0];
  }

  getData(){
    var r = "";
    for(var i = 0; i < this.data.length; i++){
      r += this.data[i] + "-·";
    }
    return r;
  }
}

window.onload = function () {
  q = new queue();
  q.enqueue(1);
  document.getElementById("labelNormal").innerHTML = q.getData();

  document.getElementById("enqueueButton").onclick = function(){
    q.enqueue(document.getElementById("inputData").value);
    document.getElementById("labelNormal").innerHTML = q.getData();
  };

  document.getElementById("dequeueButton").onclick = function(){
    q.dequeue();
    document.getElementById("labelNormal").innerHTML = q.getData();
  };
};