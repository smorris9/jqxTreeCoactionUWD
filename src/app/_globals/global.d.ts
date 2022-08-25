export { }

declare global {

    interface Array<T> {
        contains(item: T): boolean;
        sum(callbackfn: (value: T) => number) : number;
        first(): any;
        second(): any;
        move(from:Number,to:Number):void;
        groupArray(propertyName:string):Array<any>;
        cloneMe():Array<any>;
        showAsString():string;
    }
    interface Date {
        isLeapYear() : boolean;
        isToday(): boolean;
        isInFuture(): boolean;
        isInPast(): boolean;
    }

    interface Element {
        closest(selector: string) : Element;
    }
    interface Object{
        cloneMe():Object;
    }

    interface String {
        is(_text:string):boolean;
        isNot(_text:string):boolean;
        contains(_text: string) : boolean;
        capitalizeFirstLetter(): string;
        padZero(_length:number): string;
        startsWith(_char: string): boolean;
        initials(): string;
        flipName(): string;
        statusClass(): string;
        removeAndReplaceSpaceThenMatch(_replaceWith:string): string;
    }

    export interface GUID {
        generate(_length:number, _includeHyphen: boolean): string;
        removeHyphen(): string;
    }
}