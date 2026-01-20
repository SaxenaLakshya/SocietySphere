export interface FeatureCardProps {
    sourceImage: string,
    altText: string,
    title: string,
    description: string,
};

export type RegisterInputs = {
    fullName: string,
    email: string,
    mobileNumber: number,
    societyCode: string,
    role: "resident" | "tenant" | "staff",
    password: string,
    terms: boolean,
};

export type AlertType = "info" | "success" | "warning" | "error"

export type GlobalAlertProps = {
    type: AlertType
    message: string
}