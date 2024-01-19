import * as React from 'react';
import { useTheme } from '@hooks/hooks';
import Stack from '@layout/Stack/stack';
import { useForm } from '@patterns/Forms/form-context';
import DoubleField from '@layout/DoubleField/double-field';
import { CvvField, CreditCardNumberField, CreditCardExpirationField } from '@components/Input';
import { getCvvLength } from '@utils/credit-card';
import type { CardOptions } from '@utils/credit-card';

type CreditCardFieldsProps = {
    numberFieldName?: string;
    expirationFieldName?: string;
    cvvFieldName?: string;
    acceptedCards?: CardOptions;
    children?: void;
};

const CreditCardFields: React.FC<CreditCardFieldsProps> = ({
    numberFieldName = 'ccNum',
    expirationFieldName = 'ccExp',
    cvvFieldName = 'ccCvv',
    acceptedCards,
}) => {
    const {values} = useForm();
    const {texts} = useTheme();
    const cvvLength = getCvvLength(String(values[numberFieldName]));

    return (
        <Stack space={16}>
            <CreditCardNumberField
                acceptedCards={acceptedCards}
                name={numberFieldName}
                label={texts.formCreditCardNumberLabel}
            />
            <DoubleField layout="60/40">
                <CreditCardExpirationField
                    name={expirationFieldName}
                    label={texts.formCreditCardExpirationLabel}
                />
                <CvvField
                    acceptedCards={acceptedCards}
                    name={cvvFieldName}
                    label={texts.formCreditCardCvvLabel}
                    maxLength={cvvLength}
                />
            </DoubleField>
        </Stack>
    );
};

export default CreditCardFields;
