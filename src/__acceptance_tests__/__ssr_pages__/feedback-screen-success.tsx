import * as React from 'react';
import {SuccessFeedbackScreen} from '@patterns/Feedback/feedback';
import {ButtonPrimary} from '@components/Buttons';

const SuccessFeedbackScreenTest = (): JSX.Element => (
    <SuccessFeedbackScreen
        title="Some title"
        description="Some description text"
        primaryButton={<ButtonPrimary href="https://google.com">Action</ButtonPrimary>}
    />
);

export default SuccessFeedbackScreenTest;
