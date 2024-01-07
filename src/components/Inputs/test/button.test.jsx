import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Button from "../Button";

describe("Button", () => {
  const text = "TEST BUTTON";
  const handleClick = vi.fn();
  beforeEach(() => {
    render(<Button text={text} onHandleClick={handleClick} />);
  });

  test("O botao deveria ser visivel", () => {
    const button = screen.getByText(text);
    expect(button).toBeVisible();
  });

  test("O botao deveria ser clicado", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
