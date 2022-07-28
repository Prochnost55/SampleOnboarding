import React from "react";
import * as Styles from "./OnboardingStyles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const OnboardingStep1 = (props) => {
    const [workspaceName, setWorkspaceName] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    return (
        <Styles.BodyContainer>
            <Styles.Heading>Let's set up a home for all your work</Styles.Heading>
            <Styles.SubHeading>You can always create another workspace later</Styles.SubHeading>
            <TextInput
                id='workspace-name-input'
                label="Workspace Name"
                placeholder="Eden"
                onChange={e => setWorkspaceName(e.currentTarget.value)}
                value={workspaceName}
            />
            <TextInput
                id='workspace-url-input'
                label="Workspace URL"
                placeholder="Steve"
                onChange={e => setDisplayName(e.currentTarget.value)}
                value={displayName}
            />
            <Button onClick={() => props.setOnboardingStep(3)}>
                Create Workspace
            </Button>
        </Styles.BodyContainer>
    )
}
export default OnboardingStep1;
