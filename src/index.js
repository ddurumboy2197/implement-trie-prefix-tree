class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}
```

Kodda `TrieNode` klassi har bir nodni ifodalaydi, unda `children` obekti `TrieNode` klassidan bo'lgan har bir harf uchun nodni saqlaydi. `isEndOfWord` boolean qiymati so'z tugashini bildiradi.

`Trie` klassi `TrieNode` klassidan foydalanib, so'zlar uchun Trie strukturasini yaratadi. `insert` metodi so'zni Trie ga qo'shadi, `search` metodi so'z mavjudligini tekshiradi, `startsWith` metodi so'z boshida berilgan prefix mavjudligini tekshiradi.
