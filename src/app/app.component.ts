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
    
    /** This will not work : The type of <test> runtime var is not found.
     * It seems because the "reflect_id" of class CTest is not found in the tst-reflect "store" property 
     */
    const test = new CTest()
    let t3 = getType(test)
  }
}
