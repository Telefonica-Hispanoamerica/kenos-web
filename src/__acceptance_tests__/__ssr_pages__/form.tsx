import * as React from 'react';
import Form from '@patterns/Forms/form';
import Box from '@layout/Box/box';
import Stack from '@layout/Stack/stack';
import Select from '@components/Select';
import {ButtonPrimary, ButtonLayout} from '@components/Buttons';
import {TextField, 
        EmailField, 
        PhoneNumberField, 
        IbanField, 
        CreditCardFields, 
        PasswordField, 
        CreditCardExpirationField, 
        CvvField, 
        DateField,
        DecimalField,
        IntegerField,
        SearchField
    } from '@components/Input';

const FormTest = (): JSX.Element => (
    <Form onSubmit={() => {}}>
        <Box padding={16}>
            <Stack space={16}>
                <TextField name="name" label="Name" />
                <EmailField name="email" label="e-mail" />
                <Select
                    name="fruits"
                    label="Choose a fruit"
                    options={[
                        {value: 'orange', text: 'Orange'},
                        {value: 'banana', text: 'Banana'},
                    ]}
                />
                <PhoneNumberField name="phone" label="Phone" />
                <IbanField name="bankAccount" label="IBAN" />
                <CreditCardFields />
                <DateField name="date" label="Date" />
                <DecimalField name="decimal" label="Decimal" />
                <IntegerField name="integer" label="Integer" />
                <PasswordField name="password" label="Password" />
                <CreditCardExpirationField name="expiration-date" label="Expiration date" />
                <CvvField name="cvv" label="CVV" />
                <SearchField name="search" label="Search" />
                <ButtonLayout>
                    <ButtonPrimary submit>Send</ButtonPrimary>
                </ButtonLayout>
            </Stack>
        </Box>
    </Form>
);

export default FormTest;
