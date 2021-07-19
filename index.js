function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
 }

function mondayWork(toDo="go to the office") {
    return `This Monday, I will ${toDo}.`
}

function wrapAdjective(style="*") {
   function adj(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
  return adj
}
    