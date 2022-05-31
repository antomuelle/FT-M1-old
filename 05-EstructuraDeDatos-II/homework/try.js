class HashTable {
  
  constructor(numBuckets = 35) {
    this.numBuckets = numBuckets
    this._buckets = new Array(numBuckets)
  }

  /**
   * @param {String} input
   */
  hash(input) {
    let sum = 0
    for (let i = 0; i < input.length; i++)
      sum += input.charCodeAt(i)
    return sum % this._buckets.length
  }

  set(key, value) {
    if (typeof key !== 'string')
      throw new TypeError('Keys must be strings')
    
    let index = this.hash(key)
    if (this._buckets[index] === undefined)
      this._buckets[index] = []

    const bucket = this._buckets[index]
    index = this.findKey(bucket, key)
    console.log('findeIndex: ', index)
    if (index === false)
      bucket.push( {[key]: value} )
    else
      bucket[index][key] = value
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this._buckets[index]
    if (bucket === undefined)
      return false
    
    for (let i = 0; i < bucket.length; i++) {
      const elem = bucket[i];
      if (elem.hasOwnProperty(key))
        return elem[key]
    }
    return false
  }

  hasKey(key) {
    return this.get(key) ? true : false
  }

  findKey(bucket, key) {
    for (let i = 0; i < bucket.length; i++) {
      const elem = bucket[i];
      if (elem.hasOwnProperty(key))
        return i
    }
    return false
  }

}

const hashTable = new HashTable(35)
hashTable.set('foo', 'bar1');
hashTable.set('foo', 'bar2');

console.log('get:', hashTable.get('foo'))