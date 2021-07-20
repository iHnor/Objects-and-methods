function createObj(){
    return new PrintTask();
}
class PrintTask {
    constructor(){
        this.index =      1,
        this.title =      'Implement task output',
        this.desc =       'Some description',
        this.done =       true,
        this.dueDate =    new Date('July 19')
    }

    checkDesc() {
        if ( this.desc != '' ){
            return `${'\n'}   ${this.desc}`;
        }
        else
            return '';
    }

    checkDate(){
        let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthList[this.dueDate.getMonth()]} ${this.dueDate.getDate()}`
    }

    checkDone(){
        if (this.done)
            return 'x';
        else 
            return ' ';    
    }

    toString(){
        return (`${this.index}. [${this.checkDone()}] ${this.title} (${this.checkDate()}) ${this.checkDesc()}`);
    }

    toggle(){
        if (this.done != false)
            this.done = false;
        else    
            this.done = true;    
    }

    isOverdue(){
        let todayDate = new Date();
        if (this.dueDate.getMonth() < todayDate.getMonth()){      
            return true;
        }
            
        else if (this.dueDate.getDate() < todayDate.getDate())
            return true;

            else 
                return false;    
    }
}
var note1 = createObj();

var OverdueRezult = note1.isOverdue(); 

console.log(note1.toString());

note1.toggle();
console.log(note1.toString());