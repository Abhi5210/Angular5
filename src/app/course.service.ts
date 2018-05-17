import { Injectable } from '@angular/core';
import { course } from './course';

@Injectable()
export class CourseService {

  private courseList:course[];

  constructor() { 

    this.courseList = [
      {
        name: "angular",
        description: "desc1",
        image: "1.jpg",
        price: 1900,
      },
      {
        name: "java",
        description: "desc2",
        image: "2.jpg",
        price: 1500,
      },
      {
        name: "spring",
        description: "desc2",
        image: "3.jpg",
        price: 1200,
      },
      {
        name: "ai",
        description: "desc4",
        image: "1.jpg",
        price: 12000,
      },
      {
        name: "hadoop",
        description: "desc5",
        image: "2.jpg",
        price: 10000,
      },
      {
        name: "tera data",
        description: "desc6",
        image: "3.jpg",
        price: 7500,
      },
      {
        name: "html",
        description: "desc7",
        image: "1.jpg",
        price: 400,
      }
    ]
  }

  getCources(): course[] {
    return this.courseList;
  }

}
