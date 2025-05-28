import HelloWorld from "../src/components/HelloWorld.vue";
import { beforeEach, describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld", () => {
    test("hello world", async () => {
        expect("HelloWorld").toBe(HelloWorld.__name);
    });
    test("Component Test", async () => {
        const expected = "test message";
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg: expected },
        });
        expect(wrapper.text()).toContain(expected);
    });
});
