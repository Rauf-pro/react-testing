import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole("heading", {
      // name: "Job application form", // or 
      level: 1
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole("heading", {
     // name: "Section 1", // or
      level: 2
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // or  using label
    // const nameElement2 = screen.getByLabelText("Name");
    // expect(nameElement2).toBeInTheDocument();

    // or using label and input if same label is used for multiple elements
    const nameElement2 = screen.getByLabelText("Name" , {
      selector: "input"
    });
    expect(nameElement2).toBeInTheDocument();

    // get by placeholder text
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();
    
    // or using label
    const termsElement2 = screen.getByLabelText("I agree to the terms and conditions");
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
