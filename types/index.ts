export interface FeatureCardProps {
    sourceImage: string,
    altText: string,
    title: string,
    description: string,
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