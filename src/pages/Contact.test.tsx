import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Contact from "./Contact";

const mockSend = vi.fn();

vi.mock("@emailjs/browser", () => ({
  default: {
    send: (...args: unknown[]) => mockSend(...args),
  },
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Contact Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "test-service");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "test-template");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "test-key");
    vi.stubEnv("VITE_CC_EMAILS", "test@example.com");
  });

  it("renders contact form with all fields", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByPlaceholderText("Your full name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@company.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your company name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Briefly describe your technical objectives/)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByRole("button", { name: /submit inquiry/i })).toBeInTheDocument();
  });

  it("updates form state on input change", () => {
    renderWithRouter(<Contact />);
    const nameInput = screen.getByPlaceholderText("Your full name");
    fireEvent.change(nameInput, { target: { value: "Test User" } });
    expect(nameInput).toHaveValue("Test User");
  });

  it("submits form successfully", async () => {
    mockSend.mockResolvedValueOnce({ status: 200 });
    renderWithRouter(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Your full name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("you@company.com"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText(/Briefly describe your technical objectives/), { target: { value: "Test message content here" } });

    const submitButton = screen.getByRole("button", { name: /submit inquiry/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Inquiry Received")).toBeInTheDocument();
    });
  });

  it("shows error on submission failure", async () => {
    mockSend.mockRejectedValueOnce(new Error("Network error"));


    renderWithRouter(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Your full name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("you@company.com"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText(/Briefly describe your technical objectives/), { target: { value: "Test message content here" } });

    const submitButton = screen.getByRole("button", { name: /submit inquiry/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("We couldn’t send your message");
    });

  });
  it("shows an email fallback when EmailJS is not configured", async () => {
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "");
    renderWithRouter(<Contact />);
    fireEvent.change(screen.getByLabelText("Your name *"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText("Email address *"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("What would you like to build? *"), { target: { value: "A business application" } });
    fireEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent("Please email info@arrlink.com");
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("preserves engagement and time-zone context in the existing email message", async () => {
    mockSend.mockResolvedValueOnce({ status: 200 });
    render(<MemoryRouter initialEntries={["/contact?project=automation"]}><Contact /></MemoryRouter>);
    expect(screen.getByLabelText("What kind of help do you need?")).toHaveValue("automation");
    fireEvent.change(screen.getByLabelText("Your name *"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText("Email address *"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("What would you like to build? *"), { target: { value: "Automate incoming orders" } });
    fireEvent.change(screen.getByLabelText(/Time zone & preferred meeting hours/), { target: { value: "US Eastern, mornings" } });
    fireEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));
    await waitFor(() => expect(mockSend).toHaveBeenCalledWith(
      "test-service", "test-template",
      expect.objectContaining({ message: "Automate incoming orders\n\nProject: Automate a workflow\nTime zone / meeting preferences: US Eastern, mornings" }),
      "test-key",
    ));
  });

});
