var Task = {
    index:      1,
    title:      'Implement task output',
    desc:       'Some description',
    done:       true,
    dueDate:    new Date('Aug 25')
};

function printObj(){
    let done = checkDone(Task.done);
    let dueDate = checkDate(Task.dueDate);
    let desc = checkDesc(Task.desc);
    console.log(`${Task.index}. [${done}] ${Task.title} (${dueDate}) ${desc}`);
}

function checkDesc(desc) {
    if ( desc != '' ){
        return `
   ${desc}`;
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

printObj();
