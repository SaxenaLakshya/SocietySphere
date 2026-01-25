export interface FeatureCardProps {
    sourceImage: string,
    altText: string,
    title: string,
    description: string,
};

export type RegisterFormInputs = {
    fullName: string,
    email: string,
    mobileNumber: number,
    societyCode: string,
    role: "resident" | "tenant" | "staff",
    password: string,
    terms: boolean,
};

export type AdminFormInputs = {
    fullName: string,
    email: string,
    mobileNumber: number,
    societyName: string,
    city: string,
    state: string,
    towers: number,
    houses: number,
    password: string,
    terms: boolean,
};

export type LoginFormInput = {
    email: string,
    password: string,
    rememberMe: boolean,
};

export type AlertType = "info" | "success" | "warning" | "error"

export type GlobalAlertProps = {
    type: AlertType
    message: string
}

export type ContactFormInput = {
    email: string,
    message: string,
};