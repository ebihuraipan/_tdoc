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
import { zero_fill, convert_yyyymmdd } from "../src/util.js";

describe("ゼロ埋め", () => {
    it("3桁", () => {
        expect(zero_fill(1, 3)).toBe("001");
    });
    it("3桁", () => {
        expect(zero_fill(1, 3)).toBe("001");
    });
    it("ゼロ埋め3桁", () => {
        expect(zero_fill(1, 3)).toBe("001");
    });
    it("10桁", () => {
        expect(zero_fill(1, 10)).toBe("0000000001");
    });
    it("1桁", () => {
        expect(zero_fill(1, 1)).toBe("1");
    });
    it("最初から埋め", () => {
        expect(zero_fill(10000, 2)).toBe("10000");
    });
});
describe("時間処理", () => {
    test("1970年1月1日0時0分0秒からの秒数", () => {
        expect(convert_yyyymmdd(1519211809934)).toBe("2018/02/03");
    });
    test("ハイフン区切りの時間", () => {
        expect(convert_yyyymmdd("2018-2-3")).toBe("2018/02/03");
    });
});

//実行前実行後処理
describe("suit", () => {
    beforeEach(() => {
        console.log(1);
    });
    beforeAll(() => {
        console.log(2);
    });
    afterEach(() => {
        console.log(3);
    });
    afterAll(() => {
        console.log(4);
    });
    it("test1", () => {
        //
    });
    it("test1", () => {
        //
    });
});
