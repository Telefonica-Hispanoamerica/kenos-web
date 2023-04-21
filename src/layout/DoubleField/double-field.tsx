import * as React from 'react';
import Box from '@layout/Box/box';
import CreditCardExpirationField from '@components/Input/CreditCardExpirationField/credit-card-expiration-field';
import CvvField from '@components/Input/CvvField/cvv-field';
import DateField from '@components/Input/DateField/date-field';
import DecimalField from '@components/Input/DecimalField/decimal-field';
import EmailField from '@components/Input/EmailField/email-field';
import IntegerField from '@components/Input/IntegerField/integer-field';
import PasswordField from '@components/Input/PasswordField/password-field';
import PhoneNumberField from '@components/Input/PhoneNumberField/phone-number-field';
import Select from '@components/Select/select';
import TextField from '@components/Input/TextFields/TextField/text-field';
import * as styles from './double-field.css';

import type {RendersElement} from '@utils/types';

type Field =
    | RendersElement<typeof TextField>
    | RendersElement<typeof Select>
    | RendersElement<typeof CvvField>
    | RendersElement<typeof CreditCardExpirationField>
    | RendersElement<typeof DecimalField>
    | RendersElement<typeof IntegerField>
    | RendersElement<typeof DateField>
    | RendersElement<typeof PhoneNumberField>
    | RendersElement<typeof PasswordField>
    | RendersElement<typeof EmailField>;

type Props = {
    fullWidth?: boolean;
    children: Field | [Field, Field];
    layout?: '50/50' | '40/60' | '60/40';
};

const DoubleField: React.FC<Props> = ({children, fullWidth, layout}) => {
    let rightWidth: string;
    let leftWidth: string;
    if (layout === '40/60') {
        leftWidth = '40%';
        rightWidth = '60%';
    } else if (layout === '60/40') {
        leftWidth = '60%';
        rightWidth = '40%';
    } else {
        leftWidth = '50%';
        rightWidth = '50%';
    }

    const renderChildren = () => {
        const [first, second]: any = React.Children.toArray(children);
        return (
            <>
                <Box paddingRight={8} width={leftWidth}>
                    {React.cloneElement(first, {
                        fullWidth: true,
                    })}
                </Box>
                <Box paddingLeft={8} width={rightWidth}>
                    {second &&
                        React.cloneElement(second, {
                            fullWidth: true,
                        })}
                </Box>
            </>
        );
    };

    return <div className={styles.variants[fullWidth ? 'fullWidth' : 'default']}>{renderChildren()}</div>;
};

export default DoubleField;
