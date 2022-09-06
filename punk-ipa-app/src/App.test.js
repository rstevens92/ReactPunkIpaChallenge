// import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { isValidElement } from 'react';

describe("App tests", () =>{
  let component;

  beforeEach(() => {
    component = isValidElement(<App />)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })
})