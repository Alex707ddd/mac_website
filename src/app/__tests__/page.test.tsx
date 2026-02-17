import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
    it('renders the firm name', () => {
        render(<Home />)
        // Check for either English or Chinese firm name, might appear multiple times
        const firmNames = screen.getAllByText(/Chan & Co., Mac|陳浩庭律師行/i)
        expect(firmNames.length).toBeGreaterThan(0)
    })

    it('renders the slogan', () => {
        render(<Home />)
        expect(screen.getByText(/不只是律師，/i)).toBeInTheDocument()
        expect(screen.getByText(/更是您的法律策略夥伴/i)).toBeInTheDocument()
    })

    it('renders the CTA button', () => {
        render(<Home />)
        const button = screen.getByRole('link', { name: /開始 AI 案情初步評估/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('href', '/intake')
    })

    it('renders the lawyer profile image', () => {
        render(<Home />)
        const image = screen.getByAltText(/Chan Ho Ting|陳浩庭/i)
        expect(image).toBeInTheDocument()
        // Optional: check src if needed, but alt is sufficient for accessiblity test
    })
})
