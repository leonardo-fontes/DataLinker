import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Input from "../Input";
const name = "INPUT_NAME";
const label = "LABEL_TEXT";
describe("Input", () => {
  const handleChange = vi.fn();
  beforeEach(() => {
    render(<Input name={name} label={label} onChange={handleChange} />);
  });

  test("O Input tem nome", () => {
    const input = document.querySelector('input[name="INPUT_NAME"]');
    expect(input).toBeVisible();
  });

  test("O Input tem label", () => {
    const label = screen.getByText("LABEL_TEXT");
    expect(label).toBeVisible();
  });

  test("O Input tem 'for' name", () => {
    const label = screen.getByText("LABEL_TEXT");
    const htmlFor = label.getAttribute("for");
    expect(htmlFor).toBe(name);
  });

  test("O input deveria mudar", () => {
    const input = document.querySelector('input[name="INPUT_NAME"]');
    fireEvent.change(input, { target: { value: "N" } });
    fireEvent.change(input, { target: { value: "E" } });
    fireEvent.change(input, { target: { value: "W" } });
    fireEvent.change(input, { target: { value: " " } });
    fireEvent.change(input, { target: { value: "V" } });
    fireEvent.change(input, { target: { value: "A" } });
    fireEvent.change(input, { target: { value: "L" } });
    fireEvent.change(input, { target: { value: "U" } });
    fireEvent.change(input, { target: { value: "E" } });
    expect(handleChange).toHaveBeenCalledTimes(9);
  });

  
});
