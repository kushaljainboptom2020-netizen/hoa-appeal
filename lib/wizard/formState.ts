import {
  getDefenseOptions,
  type ViolationCategory,
} from "@/lib/wizard/constants";
import { sanitizeFieldValue } from "@/lib/wizard/sanitizeInput";

export type AppealFormData = {
  fullName: string;
  propertyAddress: string;
  state: string;
  hoaManagementCompany: string;
  dateOfNotice: string;
  fineAmount: string;
  violationCategory: ViolationCategory;
  primaryDefenseStrategy: string;
  supportingDetails: string;
};

export type FormErrors = Partial<Record<keyof AppealFormData, string>>;

export const initialFormData: AppealFormData = {
  fullName: "",
  propertyAddress: "",
  state: "",
  hoaManagementCompany: "",
  dateOfNotice: "",
  fineAmount: "",
  violationCategory: "",
  primaryDefenseStrategy: "",
  supportingDetails: "",
};

function isBlank(value: string): boolean {
  return value.trim().length === 0;
}

export function validateStep1(data: AppealFormData): FormErrors {
  const errors: FormErrors = {};

  if (isBlank(data.fullName)) {
    errors.fullName = "Please enter your full name.";
  }
  if (isBlank(data.propertyAddress)) {
    errors.propertyAddress = "Please enter your property address.";
  }
  if (isBlank(data.state)) {
    errors.state = "Please select your state.";
  }
  if (isBlank(data.hoaManagementCompany)) {
    errors.hoaManagementCompany =
      "Please enter your HOA management company name.";
  }

  return errors;
}

export function validateStep2(data: AppealFormData): FormErrors {
  const errors: FormErrors = {};

  if (isBlank(data.dateOfNotice)) {
    errors.dateOfNotice = "Please enter the date of notice.";
  }
  if (isBlank(data.fineAmount)) {
    errors.fineAmount = "Please enter the fine amount.";
  } else {
    const amount = Number.parseFloat(data.fineAmount);
    if (Number.isNaN(amount) || amount <= 0) {
      errors.fineAmount = "Please enter a valid fine amount greater than $0.";
    }
  }
  if (isBlank(data.violationCategory)) {
    errors.violationCategory = "Please select a violation category.";
  }

  return errors;
}

export function validateStep3(data: AppealFormData): FormErrors {
  const errors: FormErrors = {};

  if (isBlank(data.primaryDefenseStrategy)) {
    errors.primaryDefenseStrategy =
      "Please select a primary defense strategy.";
  } else {
    const options = getDefenseOptions(data.violationCategory);
    if (!options.includes(data.primaryDefenseStrategy)) {
      errors.primaryDefenseStrategy =
        "Please select a defense strategy for your violation category.";
    }
  }

  return errors;
}

export function validateStep(
  step: number,
  data: AppealFormData
): FormErrors {
  switch (step) {
    case 1:
      return validateStep1(data);
    case 2:
      return validateStep2(data);
    case 3:
      return validateStep3(data);
    default:
      return {};
  }
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function updateFormField<K extends keyof AppealFormData>(
  data: AppealFormData,
  field: K,
  value: AppealFormData[K]
): AppealFormData {
  const sanitized = sanitizeFieldValue(field, value);
  const next = { ...data, [field]: sanitized };

  if (field === "violationCategory") {
    const options = getDefenseOptions(value as ViolationCategory);
    if (
      next.primaryDefenseStrategy &&
      !options.includes(next.primaryDefenseStrategy)
    ) {
      next.primaryDefenseStrategy = "";
    }
  }

  return next;
}
