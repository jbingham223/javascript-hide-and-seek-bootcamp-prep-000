function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var temp = document.getElementsByClassName('target')
  return temp[0]
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node')
  var divs = grandNode.querySelectorAll('div')
  return divs[3]
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}
