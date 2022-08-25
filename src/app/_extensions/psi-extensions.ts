/** ARRAY */
Array.prototype.contains = function(_item) : boolean{
    return this.findIndex(element => {
        return element.toLowerCase() === _item.toLowerCase();
      }) > -1;
      
}
Array.prototype.first = function(){
    if(this.length>0)
        return this[0];
    else
        return null;
}
Array.prototype.second = function(){
    if(this.length>1)
        return this[1];
    else
        return null;
}
Array.prototype.move = function(_from:number, _to:number) {
    this.splice(_to, 0, this.splice(_from, 1)[0]);
}
Array.prototype.groupArray = function(_propertyName: string){
    if(!this.first()[_propertyName]){
        return this;
    }
    let propertyGroup:any = [];
    this.forEach((_obj)=>{
        if(!propertyGroup[_obj[_propertyName]]){
            propertyGroup[_obj[_propertyName]] = [_obj];
        }else{
            propertyGroup[_obj[_propertyName]].push(_obj);
        }
    });
    return propertyGroup;
}
Array.prototype.cloneMe = function():Array<any>{
    return JSON.parse(JSON.stringify(this));
}
Array.prototype.showAsString = function():string{
    return this.join(", ");
}

/** OBJECt */
Object.prototype.cloneMe = function():Object{
    return JSON.parse(JSON.stringify(this));
}

/** DATE */
Date.prototype.isToday = function (){
    let clientDate:any = new Date(this);
    let todayDate:any = new Date();

    return (clientDate - todayDate) === 0;
}
Date.prototype.isInFuture = function (){
    let clientDate:any = new Date(this);
    let todayDate:any = new Date();

    return (clientDate - todayDate) > 0;
}
Date.prototype.isInPast = function (){
    let clientDate:any = new Date(this);
    let todayDate:any = new Date();

    return (clientDate - todayDate) < 0;
}


/** STRING */
String.prototype.is = function(_value:string){
    return this.toLowerCase() == _value.toLowerCase();
}
String.prototype.isNot = function(_value:string){
    return this.toLowerCase() != _value.toLowerCase();
}
String.prototype.contains = function(_value:any){
    return (this.toLowerCase().indexOf(_value.toLowerCase())>-1);
}
String.prototype.padZero = function (length: number) {
    var s = this;
    while (s.length < length) {
      s = '0' + s;
    }
    return s.toString();
};
String.prototype.capitalizeFirstLetter = function capitalizeFirstLetter() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.startsWith = function (_char:string):boolean {
    return this.indexOf(_char) === 0;
}
String.prototype.initials = function(){
    let names = this.split(" ");
    let initial = "";
    names.forEach(_name=> {
        initial += _name.charAt(0).toUpperCase();
    });

    return initial;
}
String.prototype.flipName = function():string{
    if(this.contains(",")){
        let name = this.split(",");
        return name.second() + " " + name.first();
    }
    return this.toString();
}
String.prototype.statusClass = function(){
    if(this.contains("cancelled")){
        return "cancelled";
    }
    return this.toLowerCase().replace(" ", "-");
}
String.prototype.removeAndReplaceSpaceThenMatch = function(_replaceWith:string):string{
    return this.toLowerCase().replace(" ", _replaceWith);
}