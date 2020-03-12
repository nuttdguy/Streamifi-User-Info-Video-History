import React from 'react';
import { shallow } from 'enzyme';
import Broadcast from '../client/components/Broadcast.jsx';
import { TestScheduler } from 'jest';

describe("Console log", () => {
    test("it should console.log Hello World", () => {
        expect(console.log('Hello World')).toEqual(Broadcast.Message);
    });
});