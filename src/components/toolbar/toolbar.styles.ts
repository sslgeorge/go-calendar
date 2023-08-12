import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;

  button:not(:first-child) {
    border-left: 1px solid #ccc;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ToolbarSection = styled.div``;
