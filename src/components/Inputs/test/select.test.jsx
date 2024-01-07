import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Select from "../Select";
const name = "SELECT_NAME";
const label = "LABEL_TEXT";
describe("Input", () => {
  const handleChange = vi.fn();
  beforeEach(() => {
    render(
      <Select
        name={name}
        label={label}
        onChange={handleChange}
        options={[1, 2, 3]}
      />
    );
  });

  test("O select tem nome", () => {
    const select = document.querySelector('select[name="SELECT_NAME"]');
    expect(select).toBeVisible();
  });

  test("O select tem label", () => {
    const label = screen.getByText("LABEL_TEXT");
    expect(label).toBeVisible();
  });

  test("A label tem o 'for' name = select ", () => {
    const label = screen.getByText("LABEL_TEXT");
    const htmlFor = label.getAttribute("for");
    expect(htmlFor).toBe(name);
  });

  test("O select deveria mudar", () => {
    const select = document.querySelector('select[name="SELECT_NAME"]');
    fireEvent.change(select, { target: { value: 2 } });
    const options = document.querySelectorAll("option");
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });
});
