import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlog(){
    return[
      {"id": 1, "tag": "Angular", "title": "Introduction to anular", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"},

      {"id": 1, "tag": "PHP", "title": "Introduction to PHP", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"},

      {"id": 1, "tag": "Angular", "title": "Introduction to anular", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"},

      {"id": 1, "tag": "HML", "title": "Introduction to Html", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"},

      {"id": 1, "tag": "Ionic", "title": "Introduction to anular Ionic", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"},

      {"id": 1, "tag": "Hacking", "title": "Introduction to BHW", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"},

      {"id": 1, "tag": "Carding", "title": "Introduction to anular for carding", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"}

      ]
  }

  latestBox(){
    return[
      {"id": 1, "author": "misterEben", "title": "Introduction PHP for dummies and senior programmers", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"},
      {"id": 1, "author": "mister kendrick", "title": "Introduction PHP for dummies and senior programmers", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd"}
    ]
  }

  blogBox(){
    return[
      {"id": 1, "author": "misterEben", "title": "Introduction to PHP for dummies and senior programmers", "body": "blah blah chitty chat yadi yadi yadd yadd. blah blah chitty chat yadi yadi yadd yadd.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus."}
      ]
  }


}
