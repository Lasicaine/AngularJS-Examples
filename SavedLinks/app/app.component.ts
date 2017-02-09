import { Component } from '@angular/core';
     
export class Item{
    title: string;
    links: string;    
    read: boolean;
     
    constructor(title: string, links: string) {
  
        this.title = title;
        this.links = links;
        this.read = false;
    }
}
 
@Component({
    selector: 'savedlinks-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent { 
    items: Item[] = 
    [
        { title: "Search", links: "http://yandex.ru", read: false }
    ];
    addItem(title: string, links: string): void {
         
        if(title==null || title==undefined || title.trim()=="")
            return;
        if(links==null || links==undefined || links.trim()=="")
            return;
        this.items.push(new Item(title, links));

    }
}