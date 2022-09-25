import { ITest } from "./test.interface";

export class CTest extends ITest {
    protected foo: string = ''
    constructor() {
        super()
    }
}