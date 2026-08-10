export type ProductWizardState = [boolean, (value: boolean) => void];

export interface ProductWizardProps {
  productWizardState: ProductWizardState;
}
