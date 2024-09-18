import { Observable, Subject } from "rxjs";

let observable = new Observable((subscriber)=>{
    subscriber.next("initial data on first subscription :")
    setTimeout(()=>{
        subscriber.next("\nalas")
    },4000)
    setTimeout(()=>{
        subscriber.next("ta daa!")
    },4000)
   
})

observable.subscribe((publishedData)=>{
    console.log(publishedData)
})


//special type of Observable that allows values to be multicasted to many Observers
let subjectSource = new Subject<string>()
let subjectObservable$ = subjectSource.asObservable()

subjectObservable$.subscribe((data)=>{
    console.log("\n"+data)
})

subjectSource.next("ready")
subjectSource.next("1")
subjectSource.next("skip")
subjectSource.next("boom!")




//run it with node inividually after compiling with tsc