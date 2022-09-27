import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin-bottom: 40px;
  outline: 1px solid black;
  /* justify-content: center; */
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 30px;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  height: 30px;
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 100px;
  cursor: pointer;
`;
