function solve() {
    class Melon {
        constructor(weight, melonSort) {
            this.wight = weight;
            this.melonSort = melonSort;
            if (new.target === Melon) {
                throw new Error('Cannot instantiate directly');
            }
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = weight * melonSort.length;

        }
        toString(){
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = weight * melonSort.length;

        }
        toString(){
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = weight * melonSort.length;

        }
        toString(){
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = weight * melonSort.length;

        }
        toString(){
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = weight * melonSort.length;
            this.elements = ['Water', 'Fire', 'Earth', 'Air'];
            this.currentElement = '';
        }
        morph(){
            this.currentElement = this.elements.shift();
        }
        toString(){
            this.morph();
            return `Element: ${this.currentElement}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return{Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}
