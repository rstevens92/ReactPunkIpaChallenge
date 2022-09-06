import React from 'react';
import NavBar from './NavBar';
import { shallow } from 'enzyme';
import { isValidElement } from 'react';

describe("NavBar tests", () =>{
  let component;

  beforeEach(() => {
    isValidElement(<NavBar />)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })
})