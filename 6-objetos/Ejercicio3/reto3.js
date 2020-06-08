const geekGirl1 = {}
name = 'María';
age = 34;
profession = 'Periodista';
showBio = function (){
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.profession;
}

console.log(showBio());

const geekGirl2 = {}
name = 'Rocío';
age = 25;
profession = 'Actriz';
showBio = function (){
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.profession;
}

console.log(showBio());