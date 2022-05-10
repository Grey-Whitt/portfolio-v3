import styled from 'styled-components'

export const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin: 2rem;

  @media (max-width: 1000px) {
    display: block;
    .name,
    .email {
      max-width: 100% !important;
      padding-top: 1rem;
    }
  }

  @media (max-width: 500px) {
    margin: 0;

    .name,
    .email,
    .message {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  label {
    color: ${({ theme }) => theme.colors.accent};
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .name {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .email {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .message {
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 1rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: ${({ theme }) => theme.colors.lightGray};
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  textarea {
    height: 10rem;
  }
`
export const FormContainer = styled.div`
  padding: 2rem;
  h2 {
    color: ${({ theme }) => theme.colors.lightGray};
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    font-size: 2.5rem;
    margin-top: 0;
  }

  .error-text {
    color: ${({ theme }) => theme.colors.accent};
  }

  button {
    background-color: ${({ theme }) => theme.colors.jet};
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    padding: 10px 40px;
    width: fit-content;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    transition: 0.1s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.jet};
      cursor: pointer;
    }

    @media (max-width: 500px) {
      margin-top: 2rem;
    }
  }
`
export const ContactSection = styled.div`
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.34);
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.jet};
  margin-top: 10rem;
`
