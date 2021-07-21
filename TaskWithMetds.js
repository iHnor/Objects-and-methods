function createObj(){
    return new PrintTask();
}
class PrintTask {
    // В конструктор должны передаваться значения
    constructor(){
        this.index =      1,
        this.title =      'Implement task output',
        this.desc =       'Some description',
        this.done =       true,
        this.dueDate =    new Date('July 19 10:43')
    }

    checkDesc() {
        if ( this.desc != '' ){
            return `${'\n'}   ${this.desc}`;
        }
        else
            return '';
    }

    formatDate(){
        let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthList[this.dueDate.getMonth()]} ${this.dueDate.getDate()} ${this.dueDate.getHours()}:${this.dueDate.getMinutes()}`
    }

    checkDone(){
        return this.done ? 'x' : ' ';
        if (this.done)
            return 'x';
        else 
            return ' ';    
    }

    toString(){
        return (`${this.index}. [${this.checkDone()}] ${this.title} (${this.formatDate()}) ${this.checkDesc()}`);
    }

    toggle() {
        this.done =  !this.done;
        // if (this.done != false)
        //     this.done = false;
        // else    
        //     this.done = true;    
    }

    isOverdue(){
        let todayDate = new Date();
 
        if (this.dueDate.getMonth() < todayDate.getMonth()){      
            return true;
        }
            
        else if (this.dueDate.getDate() < todayDate.getDate())
            return true;
            if (this.dueDate.getHours() < todayDate.getHours())
                return true;
            else if (this.dueDate.getMinutes() < todayDate.getMinutes())
                return true;
                else
                    return false;    
    }

    // postPone(time){
    //     time = time.split(":");
        
    //     let minutes = (this.dueDate.getMinutes() + Number(time[2]))/60


    //     let hours = ((this.dueDate.getHours() + Number(time[1]))/60).toFixed(1)

    //     // console.log(minutes);
    //     console.log(Math.floor(minutes));
    // }

}


var note = createObj();

var OverdueRezult = note.isOverdue(); 

console.log(note.toString());

note.toggle();
console.log(note.toString());

// note.postPone("1:30:20")