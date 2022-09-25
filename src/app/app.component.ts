import { Component, OnInit } from '@angular/core';
import { CTest } from 'src/base/test.class';
import { ITest } from 'src/base/test.interface';
import { getType } from 'tst-reflect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tst-reflect';
  foo: CTest = new CTest()

  ngOnInit() {
    const t = getType<ITest>() // work : Type found
    const t2 = getType<CTest>() // work : type found
    
    const test = new CTest()
    let t3 = getType(test)
    let t4 = t3.isSubclassOf(t)
    let t5 = t3.isDerivedFrom(t)
  }
}
