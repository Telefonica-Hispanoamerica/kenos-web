import * as React from 'react';
import {Stepper} from '@components/Stepper';

const StepperTest = (): JSX.Element => (
    <Stepper currentIndex={1} steps={['Foo', 'Bar', 'Baz']} aria-label="Progress" />
);

export default StepperTest;
