import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  standalone: true,
  imports: [],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
   courses:Array<{courseId:number,title:string,author:string,premium:boolean,price:number}> = [
    { courseId: 1, title: "Java Basics for Beginners", author: "John Doe", premium: false, price: 29.99 },
    { courseId: 2, title: "Mastering Java: From Beginner to Advanced", author: "Jane Smith", premium: true, price: 149.99 },
    { courseId: 3, title: "Java for Web Development", author: "Alice Johnson", premium: false, price: 39.99 },
    { courseId: 4, title: "Advanced Java Programming", author: "Bob Brown", premium: true, price: 199.99 },
    { courseId: 5, title: "Java and Spring Boot Fundamentals", author: "Michael Lee", premium: true, price: 159.99 },
    { courseId: 6, title: "Java Data Structures and Algorithms", author: "Emily Davis", premium: false, price: 49.99 },
    { courseId: 7, title: "Java for Android Development", author: "Chris Wilson", premium: true, price: 179.99 },
    { courseId: 8, title: "Building RESTful Services with Java", author: "Laura Martinez", premium: false, price: 34.99 },
    { courseId: 9, title: "Java Persistence with Hibernate", author: "David Brown", premium: true, price: 139.99 },
    { courseId: 10, title: "Introduction to Java Programming", author: "Sarah Miller", premium: false, price: 24.99 },
    { courseId: 11, title: "Java Concurrency and Multithreading", author: "Steve Adams", premium: true, price: 169.99 },
    { courseId: 12, title: "Java for Backend Development", author: "Natalie Evans", premium: false, price: 59.99 },
    { courseId: 13, title: "Effective Java Programming", author: "Paul Thompson", premium: true, price: 129.99 },
    { courseId: 14, title: "Java GUI Development with Swing", author: "Olivia Scott", premium: false, price: 44.99 },
    { courseId: 15, title: "Java 17 New Features", author: "Daniel Lewis", premium: true, price: 109.99 },
    { courseId: 16, title: "Java Microservices Architecture", author: "Sophie Clark", premium: true, price: 189.99 },
    { courseId: 17, title: "Functional Programming in Java", author: "Lucas Harris", premium: false, price: 54.99 },
    { courseId: 18, title: "Java Security Best Practices", author: "Rachel Lewis", premium: true, price: 139.99 },
    { courseId: 19, title: "Java Design Patterns", author: "Jason Green", premium: false, price: 39.99 },
    { courseId: 20, title: "Spring Framework with Java", author: "Hannah Walker", premium: true, price: 179.99 },
    { courseId: 21, title: "Java and AWS Integration", author: "Ethan Young", premium: true, price: 159.99 },
    { courseId: 22, title: "Java Code Optimization", author: "Isabella Hall", premium: false, price: 49.99 },
    { courseId: 23, title: "Java for Test Automation", author: "Oliver Wright", premium: true, price: 149.99 },
    { courseId: 24, title: "Java Performance Tuning", author: "Ava Carter", premium: true, price: 139.99 },
    { courseId: 25, title: "Java Streams and Lambdas", author: "James Thompson", premium: false, price: 29.99 },
    { courseId: 26, title: "Java Application Deployment", author: "Mia King", premium: true, price: 159.99 },
    { courseId: 27, title: "Java Basics: OOP Principles", author: "Benjamin Lee", premium: false, price: 34.99 },
    { courseId: 28, title: "Java for Data Science", author: "Amelia Allen", premium: true, price: 169.99 },
    { courseId: 29, title: "Spring Boot with Java: Advanced", author: "Jacob Wright", premium: true, price: 199.99 },
    { courseId: 30, title: "Java and Blockchain Technology", author: "Charlotte Scott", premium: true, price: 179.99 }
  ];
  
}
