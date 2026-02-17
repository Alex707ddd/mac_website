import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { IntakeWizard } from '../IntakeWizard'

// Mock the router
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}))

describe('IntakeWizard', () => {
    it('renders step 1 (Personal Details) initially', () => {
        render(<IntakeWizard />)
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument()
    })

    it('validates step 1 before moving to step 2', async () => {
        render(<IntakeWizard />)
        const nextButton = screen.getByRole('button', { name: /Next/i })

        // Click next without filling fields
        fireEvent.click(nextButton)

        // Expect validation errors
        await waitFor(() => {
            expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument()
        })
    })

    it('allows navigation to step 2 after valid input', async () => {
        render(<IntakeWizard />)

        // Fill step 1
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } })
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
        fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '12345678' } })

        fireEvent.click(screen.getByRole('button', { name: /Next/i }))

        // Expect step 2 (Case Type)
        await waitFor(() => {
            expect(screen.getByText(/What type of legal issue/i)).toBeInTheDocument()
        })
    })
})
