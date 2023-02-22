import { describe, expect, it, test } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("suite", () => {
  it("serial test", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeDefined();
  });
});
