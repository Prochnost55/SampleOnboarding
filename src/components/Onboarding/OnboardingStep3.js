import React from "react";
import * as Styles from "./OnboardingStyles";
import Button from "../Button/Button";
import { MultiplePerson, SinglePerson } from "../../assests/svgs";

const UsageCard = (props) => {
    return (
        <Styles.Card 
            isSelected={props.isSelected}
            onClick={props.onClick}
        >
            {props.icon}
            <Styles.CardHeading>
                {props.heading}
            </Styles.CardHeading>
            <Styles.CardBody>
                {props.body}
            </Styles.CardBody>
        </Styles.Card>
    )
}

const USAGE_CARDS = [
    {
        usageId: 1,
        heading: 'For myself',
        body: 'Write better. Think more clearly. Stay organized.',
        icon: <SinglePerson />
    },
    {
        usageId: 2,
        heading: 'With my team',
        body: 'Wikis, docs, tasks & projects, all in one place.',
        icon: <MultiplePerson />
    }
]
const OnboardingStep1 = (props) => {
    const [selectedUsage, setSelectedUsage] = React.useState(USAGE_CARDS[0].usageId)
    return (
        <Styles.BodyContainer>
            <Styles.Heading>How are you planning to use Eden?</Styles.Heading>
            <Styles.SubHeading>We'll streamline your setup accordingly</Styles.SubHeading>
            <Styles.CardContainer>
                {USAGE_CARDS.map(card => (
                    <UsageCard
                        icon={card.icon}
                        heading={card.heading}
                        body={card.body}
                        isSelected={selectedUsage == card.usageId}
                        onClick={() => setSelectedUsage(card.usageId)}
                    />
                ))}
            </Styles.CardContainer>
            <Button onClick={() => props.setOnboardingStep(4)}>
                Create Workspace
            </Button>
        </Styles.BodyContainer>
    )
}
export default OnboardingStep1;

