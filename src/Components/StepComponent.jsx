import { Steps } from "antd";
import "../Styles/Step/step.css";

export default function StepComponent({ tableau }) {
    return (
        <Steps
            direction="vertical"
            current={tableau.length}
            items={tableau.map((etape) => ({
                title: etape.titre,
                description: etape.description,
            }))}
        />
    );
}
