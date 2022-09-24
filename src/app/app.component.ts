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

  ngOnInit() {
    const t = getType<ITest>() // work
    const t2 = getType<CTest>() // generate error "Module not found: Error: Can't resolve './../base/test.class.js' in '/Users/tigrou/Programming/www/Tests/Angular/tst-reflect/src/app'"
  }
}
