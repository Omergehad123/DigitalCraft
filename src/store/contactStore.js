import { create } from 'zustand';

export const useContactStore = create((set, get) => ({
  formData: {
    fullName: '',
    workEmail: '',
    company: '',
    primaryScope: 'Web Application',
    capitalAllocation: '$35K – $75K',
    deliveryTarget: '1 – 3 Months',
    projectDetails: '',
    attachedFile: null,
  },

  scopeOptions: [
    'Website Development',
    'Web Application',
    'E-Commerce',
    'Mobile Apps',
    'UI/UX & Systems',
    'Technical Advisory',
  ],

  deliveryOptions: [
    'Immediate (<1m)',
    '1 – 3 Months',
    '3+ Months',
    'Flexible',
  ],

  isSubmitting: false,
  isSubmitted: false,
  errorMessage: '',

  setField: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
      errorMessage: '',
    })),

  setAttachedFile: (file) =>
    set((state) => ({
      formData: {
        ...state.formData,
        attachedFile: file
          ? {
              name: file.name,
              size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
              raw: file,
            }
          : null,
      },
    })),

  removeAttachedFile: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        attachedFile: null,
      },
    })),

  submitForm: async () => {
    const { formData } = get();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.projectDetails.trim()) {
      set({ errorMessage: 'Please fill in all required fields marked with *.' });
      return false;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail.trim())) {
      set({ errorMessage: 'Please enter a valid work email address.' });
      return false;
    }

    set({ isSubmitting: true, errorMessage: '' });

    // Simulated network transmission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    set({
      isSubmitting: false,
      isSubmitted: true,
      errorMessage: '',
    });
    return true;
  },

  resetForm: () =>
    set({
      formData: {
        fullName: '',
        workEmail: '',
        company: '',
        primaryScope: 'Web Application',
        capitalAllocation: '$35K – $75K',
        deliveryTarget: '1 – 3 Months',
        projectDetails: '',
        attachedFile: null,
      },
      isSubmitting: false,
      isSubmitted: false,
      errorMessage: '',
    }),
}));
