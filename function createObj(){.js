function createObj(){
    return new PrintTask();
}
class PrintTask {
    constructor(){
        this.index =      1,
        this.title =      'Implement task output',
        this.desc =       'Some description',
        this.done =       true,
        this.dueDate =    new Date('Aug 25')
    }

    toString(){

        this.done = checkDone(this.done);
        this.dueDate = checkDate(this.dueDate);
        this.desc = checkDesc(this.desc);
        return (`${this.index}. [${this.done}] ${this.title} (${this.dueDate}) ${this.desc}`);

        function checkDesc(desc) {
            if ( desc != '' ){
                return `${'\n'}   ${desc}`;
            }
            else
                return '';
        }
    
        function checkDate(date){
            let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${monthList[date.getMonth()]} ${date.getDate()}`
        }
    
        function checkDone(done){
            if (done)
                return 'x';
            else 
                return ' ';    
        }
    }

    toggle(){
        console.log(this.done);
        // if (this.done != false)
        //     this.done = true;
        // else    
        //     this.done = false;                   
    }

}
var note1 = createObj();
console.log(note1.toString());
note1.toggle();
// console.log(note1.toString());