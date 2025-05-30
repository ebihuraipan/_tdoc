import {
    expect,
    test,
    it,
    describe,
    beforeEach,
    beforeAll,
    afterAll,
    afterEach,
} from "vitest";
import { add } from "../src/js/sum.js";

//実行前実行後処理
describe("suit", () => {
    let int = 1;
    beforeEach(() => {
        //console.log(1);
        expect(int).toBe(1);
    });
    beforeAll(() => {
        //console.log(2);
    });
    afterEach(() => {
        //console.log(3);
    });
    afterAll(() => {
        //console.log(4);
    });
    it("test1", () => {
        //
    });
    it("test1", () => {
        //
    });
});
