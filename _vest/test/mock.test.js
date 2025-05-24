import { expect, it, describe, afterEach, vi } from "vitest";
import * as calc from "../src/sum.js";

describe("add", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("spyで関数を変更", () => {
        // 普通に関数を呼ぶ
        const funcs = {
            getZero: () => 0,
        };
        expect(funcs.getZero()).toBe(0);
        // 関数を入れ替える
        let not_zero = 9999;
        const spy = vi
            .spyOn(funcs, "getZero")
            .mockImplementation(() => not_zero);
        // 関数が入れ替わっていることを確認
        expect(funcs.getZero()).toBe(9999);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveReturnedWith(9999);
    });

    it("fnでテスト用の関数作成", () => {
        const mock = vi.fn(() => 5);

        expect(mock()).toEqual(5);
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockReturnValue(10);
        expect(mock()).toEqual(10);
        expect(mock).toHaveBeenCalledTimes(2);
    });
});
