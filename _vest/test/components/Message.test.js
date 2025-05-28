import Message from "../../src/components/Message.vue";
import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("Messageコンポーネント", () => {
    it("名称確認", async () => {
        expect("Message").toBe(Message.__name);
    });
    it("プロパティテスト", async () => {
        const expected = "test";
        const wrapper = shallowMount(Message, {
            props: { msg: expected },
        });
        expect(wrapper.text()).toContain(expected);
    });
});
