import React from "react";
import * as Styles from "./OnboardingStyles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import URLInput from "../URLInput/URLInput";

const OnboardingStep1 = (props) => {
    const [workspaceName, setWorkspaceName] = React.useState('');
    const [workspaceUrl, setWorkspaceUrl] = React.useState('');

    const handleClick = () => {
        let data = Object.assign({}, props.onboardingData);
        data['workspaceName'] = workspaceName;
        data['workspaceUrl'] = workspaceUrl;
        props.setOnboardingData(data);
        props.setOnboardingStep(3);
    };

    return (
        <Styles.BodyContainer>
            <Styles.Heading>Let's set up a home for all your work</Styles.Heading>
            <Styles.SubHeading>You can always create another workspace later</Styles.SubHeading>
            <TextInput
                id='workspace-name-input'
                label="Workspace Name"
                placeholder="Prochnost"
                onChange={e => setWorkspaceName(e.currentTarget.value)}
                value={workspaceName}
            />
            <URLInput
                id='workspace-url-input'
                label="Workspace URL"
                placeholder="prochnost"
                onChange={e => setWorkspaceUrl(e.currentTarget.value)}
                value={workspaceUrl}
                staticText={"www.eden.com/"}
            />
            <Button onClick={handleClick}>
                Create Workspace
            </Button>
        </Styles.BodyContainer>
    )
}
export default OnboardingStep1;
