
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list-components.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    name: string = 'Naira';

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: '2, dezembro, 2020'
            },
             {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: '18, novembro, 2020'
            }
        ]
    }
}