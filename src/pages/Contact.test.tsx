import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Contact";

const mockSend = vi.fn();

vi.mock("@emailjs/browser", () => ({
  default: {
    send: () => mockSend(),
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
    expect(screen.getByPlaceholderText("Arjun Sharma")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("arjun.sharma@tata.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tata Consultancy Services")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Briefly describe your technical objectives/)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByRole("button", { name: /submit inquiry/i })).toBeInTheDocument();
  });

  it("updates form state on input change", () => {
    renderWithRouter(<Contact />);
    const nameInput = screen.getByPlaceholderText("Arjun Sharma");
    fireEvent.change(nameInput, { target: { value: "Test User" } });
    expect(nameInput).toHaveValue("Test User");
  });

  it("submits form successfully", async () => {
    mockSend.mockResolvedValueOnce({ status: 200 });
    renderWithRouter(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Arjun Sharma"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("arjun.sharma@tata.com"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText(/Briefly describe your technical objectives/), { target: { value: "Test message content here" } });

    const submitButton = screen.getByRole("button", { name: /submit inquiry/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Inquiry Received")).toBeInTheDocument();
    });
  });

  it("shows error on submission failure", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    mockSend.mockRejectedValueOnce(new Error("Network error"));

    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    renderWithRouter(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Arjun Sharma"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("arjun.sharma@tata.com"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText(/Briefly describe your technical objectives/), { target: { value: "Test message content here" } });

    const submitButton = screen.getByRole("button", { name: /submit inquiry/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith("Failed to send message. Please try again.");
    });

    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });
});
