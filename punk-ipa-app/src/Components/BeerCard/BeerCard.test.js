import React from 'react';
import BeerCard from './BeerCard';
import { shallow } from 'enzyme';
import { isValidElement } from 'react';

describe("BeerCard tests", () =>{
  let component;

  beforeEach(() => {
    component = isValidElement(<BeerCard />)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })
})