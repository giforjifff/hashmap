class HashMap{
    constructor(){
        this.capacity = 16;
        this.load_factor = 0.8;
        this.currentsum = 0;
        this.buckets = Array()
    }
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        hashCode = hashCode % this.capacity
     
        return hashCode;
      } 
    set(key,value){
      console.log(this.currentsum/this.capacity)
      if(this.currentsum/this.capacity >= this.load_factor){
        let temp_hashMap = new HashMap();
        temp_hashMap.capacity = this.capacity*2;
        this.buckets.forEach(function(bucket){
          let keys = Object.keys(bucket);
          keys.forEach(function(key){
            temp_hashMap.set(key, bucket[key]);
          })
        })
        this.buckets = temp_hashMap.buckets
        this.capacity = temp_hashMap.capacity;
        this.set(key,value)
      }
      else{
        let hashed_code = this.hash(key);
        if(typeof this.buckets[hashed_code] != 'object'){
          this.buckets[hashed_code] = {};
          this.buckets[hashed_code][key] = value;
          this.currentsum += 1
          
        }
        else
        {
          console.log(this.buckets[hashed_code][key])
          if(this.buckets[hashed_code][key]){
            console.log('Im hre')
            this.buckets[hashed_code][key] = value
          }
          else{
            console.log('Im hre')
            this.buckets[hashed_code][key] = value;
            this.currentsum += 1
          }
        }
        
      }
    }
     
}

const test = new HashMap();
test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')
 test.set('moon', 'silver')
 test.set('kite', 'black')
test.set('sun', 'golden');
test.set('ocean', 'blue');
test.set('forest', 'green');
test.set('fire', 'red');
test.set('cloud', 'white');
test.set('night', 'black');
test.set('desert', 'yellow');
test.set('rose', 'pink');
test.set('violet', 'purple');
test.set('sand', 'beige');
test.set('sky', 'cyan');
test.set('mountain', 'brown');
test.set('pearl', 'ivory');
test.set('ruby', 'crimson');
test.set('emerald', 'jade');
test.set('sapphire', 'navy');
test.set('lemon', 'yellow');
test.set('lime', 'chartreuse');
test.set('wine', 'burgundy');
test.set('orchid', 'magenta');

console.log(test)
console.log(test.currentsum)