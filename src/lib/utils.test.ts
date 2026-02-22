import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names correctly", () => {
      expect(cn("foo", "bar")).toBe("foo bar");
    });

    it("handles conditional classes", () => {
      const showBar = false;
      expect(cn("foo", showBar && "bar", "baz")).toBe("foo baz");
    });

    it("merges tailwind classes correctly", () => {
      expect(cn("p-4", "p-2")).toBe("p-2");
    });

    it("handles undefined values", () => {
      expect(cn("foo", undefined, "bar")).toBe("foo bar");
    });

    it("handles null values", () => {
      expect(cn("foo", null, "bar")).toBe("foo bar");
    });

    it("handles object notation", () => {
      expect(cn({ foo: true, bar: false, baz: true })).toBe("foo baz");
    });
  });
});
