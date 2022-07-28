import React from "react";
import * as Styles from "./OnboardingStyles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const OnboardingStep1 = (props) => {
    const [fullName, setFullName] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    return (
        <Styles.BodyContainer>
            <Styles.Heading>Welcome! First things first...</Styles.Heading>
            <Styles.SubHeading>You can always change them later</Styles.SubHeading>
            <TextInput
                id='full-name-input'
                label="Full Name"
                placeholder="Steve Jobs"
                onChange={e => setFullName(e.currentTarget.value)}
                value={fullName}
            />
            <TextInput
                id='display-name-input'
                label="Display Name"
                placeholder="Steve"
                onChange={e => setDisplayName(e.currentTarget.value)}
                value={displayName}
            />
            <Button onClick={() => props.setOnboardingStep(2)}>
                Create Workspace
            </Button>
        </Styles.BodyContainer>
    )
}
export default OnboardingStep1;
