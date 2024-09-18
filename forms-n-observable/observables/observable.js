"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function (subscriber) {
    subscriber.next("initial data on first subscription :");
    setTimeout(function () {
        subscriber.next("\nalas");
    }, 4000);
    setTimeout(function () {
        subscriber.next("ta daa!");
    }, 4000);
});
observable.subscribe(function (publishedData) {
    console.log(publishedData);
});
//special type of Observable that allows values to be multicasted to many Observers
var subjectSource = new rxjs_1.Subject();
var subjectObservable$ = subjectSource.asObservable();
subjectObservable$.subscribe(function (data) {
    console.log("\n" + data);
});
subjectSource.next("ready");
subjectSource.next("1");
subjectSource.next("skip");
subjectSource.next("boom!");
//run it with node inividually after compiling with tsc
