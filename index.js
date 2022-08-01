function newImage(a,b,c) {
    let object = document.createElement('img')
    object.src = a
    object.style.position = 'fixed'
    object.style.left = b + 'px'
    object.style.bottom = c + 'px'
    document.body.append(object) 
    return object
}
function newItem(a,b,c){
    let object = document.createElement('img')
    object.src = a
    object.style.position = 'fixed'
    object.style.left = b + 'px'
    object.style.bottom = c + 'px'
    document.body.append(object)
    
    object.addEventListener('click', function() {
        object.remove()
    })
    
}

newImage('assets/green-character.gif', 100, 100)
newImage("assets/pine-tree.png", 450, 200)
newItem("assets/sheild.png", 165, 185)
newItem("assets/staff.png", 600, 100)
newImage('assets/tree.png', 200, 300)
newImage("assets/pillar.png", 350, 100)
newImage("assets/crate.png", 150, 200)
newImage("assets/well.png", 500, 425)
newItem('assets/sword.png', 500, 405)
