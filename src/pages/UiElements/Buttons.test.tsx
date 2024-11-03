import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Buttons from './Buttons';

describe('Buttons Component', () => {
  test('renders all buttons with correct text', () => {
    render(
      <BrowserRouter>
        <Buttons />
      </BrowserRouter>
    );

    // Tìm tất cả các nút bằng text "Button"
    const buttons = screen.getAllByText('Button');

    // Đảm bảo có đúng số lượng nút được render
    expect(buttons).toHaveLength(24);

    // Kiểm tra từng nút để đảm bảo text của nó là "Button"
    buttons.forEach((button) => {
      expect(button).toHaveTextContent('Button');
    });
  });
});
