type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (!this.words[word.term]) this.words[word.term] = word.def;
  }
  def(term: string) {
    return this.words[term];
  }
  delete(word: Word) {
    if (this.words[word.term]) delete this.words[word.term];
  }
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');
const dict = new Dict();

dict.add(kimchi);
dict.def('kimchi');
