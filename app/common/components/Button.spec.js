import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {shallow} from "enzyme";
import sinon from "sinon";
import Button from "./Button";

describe('Button.spec.js', () => {

	let wrapper, pressHandler;

	beforeEach(() => {
		pressHandler = sinon.stub();
		wrapper = shallow(<Button onPress={pressHandler}>text</Button>);
	});

	it('should render regular button', () => {
		expect(wrapper.type()).to.equal(TouchableOpacity);
	});

	it('should render correct text', () => {
		const text = wrapper.find(Text).first();
		expect(text).to.have.prop('children', 'text');
	});

	it('should handle press', () => {
		wrapper.simulate('Press');
		expect(pressHandler).to.have.been.calledOnce;
	});
});